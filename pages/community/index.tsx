import type { NextPage } from "next";
import Layout from "../../components/layout";
import FloatingButton from "../../components/buttons/floating-button";
import CommunityItem from "../../components/items/community-item";

const Community: NextPage = () => {
  return (
    <Layout title="Community" hasTabBar>
      <div className="px-4 space-y-8">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <CommunityItem
            key={i}
            id={i}
            tag={"daily"}
            question={"What is the best mandu restaurant?"}
            writer={"Peter Parker"}
            writeDate={"18 hours ago"}
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
