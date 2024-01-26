import Button from "@components/buttons/button";
import ReactionButton from "@components/buttons/reaction-button";
import Input from "@components/inputs/input";
import CommentItem from "@components/items/comment-item";
import Tag from "@components/items/tag";
import Layout from "@components/layout";
import type { NextPage } from "next";

const CommunityDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div>
        <div className="my-3 ml-4">
          <Tag type="daily" />
        </div>

        <div className="flex mb-3 px-4 cursor-pointer pb-3  border-b items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-300" />
          <div>
            <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
            <p className="text-xs font-medium text-gray-500">
              View profile &rarr;
            </p>
          </div>
        </div>

        <div>
          <div className="mt-2 px-4 text-gray-700">
            <span className="text-orange-500 font-medium">Q.</span> What is the
            best mandu restaurant?
          </div>
          <div className="flex px-4 space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[2px]  w-full">
            <ReactionButton label={"Like"} count={1}>
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </ReactionButton>

            <ReactionButton label={"Comment"} count={1}>
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
          {[1, 2, 3].map((_, i) => (
            <CommentItem
              key={i}
              writer={"Tony Stark"}
              writeDate={"2 hours ago"}
              content={"The best mandu restaurant is the one next to my house."}
            />
          ))}
        </div>

        <div className="px-4">
          <Input
            type="textarea"
            label=""
            name="comment"
            rows="4"
            placeholder="Answer this question!"
          />
          <Button label="Reply" />
        </div>
      </div>
    </Layout>
  );
};

export default CommunityDetail;
