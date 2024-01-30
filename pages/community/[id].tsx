import Button from "@components/buttons/button";
import ReactionButton from "@components/buttons/reaction-button";
import Input from "@components/inputs/input";
import AnswerItem from "@components/items/answer-item";
import Tag from "@components/items/tag";
import Layout from "@components/layout";
import useMutation from "@libs/client/use-mutation";
import { Answer, Post, User } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

interface AnswerWithUser extends Answer {
  user: User;
}

interface PostWithUser extends Post {
  user: User;
  _count: {
    answers: number;
    likes: number;
  };
  answers: AnswerWithUser[];
}

interface CommunityPostResponse {
  ok: boolean;
  post: PostWithUser;
  isLiked: boolean;
}

interface AnswerForm {
  answer: string;
}

interface AnswerResponse {
  ok: boolean;
  answer: Answer;
}

const CommunityPost: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<AnswerForm>();
  const { data, mutate } = useSWR<CommunityPostResponse>(
    router.query.id ? `/api/posts/${router.query.id}` : null
  );
  const [like, { loading }] = useMutation(`/api/posts/${router.query.id}/like`);
  const [sendAnswer, { data: answerData, loading: answerLoading }] =
    useMutation<AnswerResponse>(`/api/posts/${router.query.id}/answer`);

  const onClickLike = () => {
    if (!data) return;

    mutate(
      (prev) =>
        prev && {
          ...prev,
          post: {
            ...prev.post,
            _count: {
              ...prev.post._count,
              likes: prev.post._count.likes + (prev.isLiked ? -1 : 1),
            },
          },
          isLiked: !prev.isLiked,
        },
      false
    );

    if (!loading) {
      like({});
    }
  };

  const onValid = (form: AnswerForm) => {
    if (answerLoading) return;

    sendAnswer(form);
  };

  useEffect(() => {
    if (answerData && answerData.ok) {
      reset();
      mutate();
    }
  }, [answerData, reset, mutate]);

  return (
    <Layout title="Community Post" canGoBack>
      <div>
        <div className="flex justify-between my-3 ml-4">
          <Tag type="daily" />
          <span className="text-xs font-thin text-gray-500">
            {data?.post.createdAt + "" ?? ""}
          </span>
        </div>

        <div className="flex mb-3 px-4 cursor-pointer pb-3  border-b items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-300" />
          <div>
            <p className="text-sm font-medium text-gray-700">
              {data?.post?.user?.name}
            </p>
            <Link href={`/users/profile/${data?.post?.user?.id}`}>
              <a className="text-xs font-medium text-gray-500">
                View profile &rarr;
              </a>
            </Link>
          </div>
        </div>

        <div>
          <div className="mt-2 px-4 text-gray-700">
            <span className="text-orange-500 font-medium">Q. </span>
            {data?.post?.question}
          </div>
          <div className="flex px-4 space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[2px]  w-full">
            <ReactionButton
              label={"Like"}
              count={data?.post?._count?.likes ?? 0}
              reaction={data?.isLiked ?? false}
              onClick={onClickLike}
            >
              <svg
                className="w-4 h-4"
                fill={data?.isLiked ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </ReactionButton>

            <ReactionButton
              label={"Comment"}
              count={data?.post._count.answers ?? 0}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
            </ReactionButton>
          </div>
        </div>

        <div className="px-4 my-5 space-y-5">
          {data?.post.answers.map((answer) => (
            <AnswerItem
              key={answer.id}
              writer={answer.user.name}
              writeDate={answer.createdAt + ""}
              content={answer.answer}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit(onValid)} className="px-4">
          <Input
            register={register("answer", { required: true, minLength: 5 })}
            type="textarea"
            label=""
            name="comment"
            rows="4"
            placeholder="Answer this question!"
          />
          <Button label={answerLoading ? "Loading" : "Reply"} />
        </form>
      </div>
    </Layout>
  );
};

export default CommunityPost;
