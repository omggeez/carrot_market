import FloatingButton from "@components/buttons/floating-button";
import PostItem from "@components/items/post-item";
import Layout from "@components/layout";
import useCoords from "@libs/client/use-coords";
import { Post, User } from "@prisma/client";
import type { NextPage } from "next";
import useSWR from "swr";

interface PostWithUser extends Post {
  user: User;
  _count: {
    likes: number;
    answers: number;
  };
}

interface PostsResponse {
  ok: boolean;
  posts: PostWithUser[];
}

const Community: NextPage = () => {
  const { latitude, longitude } = useCoords();
  const { data } = useSWR<PostsResponse>(
    latitude && longitude
      ? `/api/posts?latitude=${latitude}&longitude=${longitude}`
      : null
  );

  return (
    <Layout title="Community" hasTabBar>
      <div className="px-4 py-4 space-y-8">
        {data?.posts.map((post) => (
          <PostItem
            key={post.id}
            id={post.id}
            tag={"daily"}
            question={post.question}
            writer={post.user.name}
            writeDate={post.createdAt + ""}
            likeCount={post._count?.likes}
            answerCount={post._count?.answers}
          />
        ))}
        <FloatingButton href="/community/write">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Community;
