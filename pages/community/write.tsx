import Button from "@components/buttons/button";
import Input from "@components/inputs/input";
import Layout from "@components/layout";
import useCoords from "@libs/client/use-coords";
import useMutation from "@libs/client/use-mutation";
import { Post } from "@prisma/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface WriteForm {
  question: string;
}

interface WriteResponse {
  ok: boolean;
  post: Post;
}

const CommunityWrite: NextPage = () => {
  const { latitude, longitude } = useCoords();
  const router = useRouter();
  const { register, handleSubmit } = useForm<WriteForm>();
  const [post, { loading, data }] = useMutation<WriteResponse>("/api/posts");

  const onValid = (data: WriteForm) => {
    if (loading) return;

    post({ ...data, latitude, longitude });
  };

  useEffect(() => {
    if (data && data.ok) {
      router.push(`/community/${data.post.id}`);
    }
  }, [data, router]);

  return (
    <Layout title="Write Post" canGoBack>
      <form onSubmit={handleSubmit(onValid)} className="px-4 py-10">
        <Input
          type="textarea"
          label="How are you today?"
          name="question"
          rows="4"
          placeholder="Ask a question!"
          register={register("question", { required: true, minLength: 5 })}
        />
        <Button label={loading ? "Loading" : "Submit"} />
      </form>
    </Layout>
  );
};

export default CommunityWrite;
