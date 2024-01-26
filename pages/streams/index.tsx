import FloatingButton from "@components/buttons/floating-button";
import StreamItem from "@components/items/stream-item";
import Layout from "@components/layout";
import { NextPage } from "next";

const Streams: NextPage = () => {
  return (
    <Layout title="Streams" hasTabBar>
      <div className="pb-10 divide-y-2 space-y-4">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <StreamItem key={i} id={i} title={"Let's try potatos"} />
        ))}

        <FloatingButton href={"/streams/create"}>
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
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Streams;
