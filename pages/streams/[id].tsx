import MessageItem from "@components/items/message-item";
import Layout from "@components/layout";
import useMutation from "@libs/client/use-mutation";
import useUser from "@libs/client/use-user";
import { Stream } from "@prisma/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

interface StreamMessage {
  id: number;
  message: string;
  user: {
    id: number;
    avatar?: string;
  };
}

interface StreamWithMessages extends Stream {
  messages: StreamMessage[];
}

interface StreamResponse {
  ok: boolean;
  stream: StreamWithMessages;
}

export interface MessageForm {
  message: string;
}

const StreamDetail: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<MessageForm>();
  const { data, mutate } = useSWR<StreamResponse>(
    router.query.id ? `/api/streams/${router.query.id}` : null,
    { refreshInterval: 1000 }
  );
  const [sendMessage, { loading, data: SendMessageData }] = useMutation(
    `/api/streams/${router.query.id}/messages`
  );

  const onValid = (form: MessageForm) => {
    if (loading) return;

    reset();
    mutate(
      (prev) =>
        prev &&
        ({
          ...prev,
          stream: {
            ...prev.stream,
            messages: [
              ...prev.stream.messages,
              { id: Date.now(), message: form.message, user: { ...user } },
            ],
          },
        } as any),
      false
    );
    sendMessage(form);
  };

  return (
    <Layout title="Stream Detail" canGoBack>
      <div className="py-10 px-4 space-y-4">
        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
        <h3 className="text-gray-900 font-semibold text-2xl mt-2">
          {data?.stream?.name}
        </h3>
        <span className="text-2xl block mt-3 text-gray-900">
          ${data?.stream?.price}
        </span>
        <p className="my-6 text-gray-700">{data?.stream?.description}</p>
        <div className="py-10 pb-16 h-[40vh] overflow-y-scroll px-4 space-y-4">
          {data?.stream.messages?.map((message) => (
            <MessageItem
              key={message.id}
              avatarUrl={message.user.avatar}
              message={message.message}
              reversed={message.user.id === user?.id}
            />
          ))}

          <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
            <form
              onSubmit={handleSubmit(onValid)}
              className="relative flex items-center"
            >
              <input
                {...register("message", { required: true })}
                className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500 pr-16"
                type="text"
              />

              <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
                <button className="flex items-center bg-orange-500 rounded-full px-3 text-sm text-white cursor-pointer hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StreamDetail;
