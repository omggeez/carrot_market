import Button from "@components/buttons/button";
import Input from "@components/inputs/input";
import Layout from "@components/layout";
import useMutation from "@libs/client/use-mutation";
import { Stream } from "@prisma/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface CreateForm {
  name: string;
  price: string;
  description: string;
}

interface CreateResponse {
  ok: boolean;
  stream: Stream;
}

const StreamCreate: NextPage = () => {
  const router = useRouter();
  const [createStream, { loading, data }] =
    useMutation<CreateResponse>(`/api/streams`);
  const { register, handleSubmit } = useForm<CreateForm>();

  const onValid = (form: CreateForm) => {
    if (loading) return;

    createStream(form);
  };

  useEffect(() => {
    if (data && data.ok) {
      router.replace(`/streams/${data.stream.id}`);
    }
  }, [data, router]);

  return (
    <Layout title="Create Stream" canGoBack>
      <form onSubmit={handleSubmit(onValid)} className="py-10 px-4 space-y-5">
        <div>
          <Input
            register={register("name", { required: true })}
            type="text"
            label="Name"
            name="name"
          />
        </div>
        <div>
          <Input
            register={register("price", {
              required: true,
              valueAsNumber: true,
            })}
            type="price"
            label="Price"
            name="price"
            placeholder="0.00"
          />
        </div>
        <div>
          <Input
            register={register("description", { required: true })}
            type="textarea"
            label="Description"
            name="desc"
            rows="4"
          />
        </div>

        <Button label={loading ? "Loading" : "Go stream"} />
      </form>
    </Layout>
  );
};

export default StreamCreate;
