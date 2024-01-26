import ChatItem from "@components/items/chat-item";
import Layout from "@components/layout";
import { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <Layout title="Chats" hasTabBar>
      <div className="divide-y-[1px]">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <ChatItem
            key={i}
            id={i}
            writer={"Steven Rogers"}
            recentMessage={"See you tomorrow in the corner at 2pm!"}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
