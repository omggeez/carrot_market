import MessageInput from "@components/inputs/message-input";
import MessageItem from "@components/items/message-item";
import Layout from "@components/layout";
import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <Layout title="Chat Detail" canGoBack>
      <div className="flex flex-col h-[80vh] pt-10 pb-16 px-4 space-y-4 overflow-y-auto">
        <MessageItem message={"Hi how much are you selling them for?"} />
        <MessageItem message={"I want $50"} reversed />
        <MessageItem message={"OK"} />
        <MessageItem message={"Hi how much are you selling them for?"} />
        <MessageItem message={"I want $50"} reversed />
        <MessageItem message={"OK"} />
        <MessageItem message={"Hi how much are you selling them for?"} />
        <MessageItem message={"I want $50"} reversed />
        <MessageItem message={"OK"} />
        <MessageItem message={"Hi how much are you selling them for?"} />
        <MessageItem message={"I want $50"} reversed />
        <MessageItem message={"OK"} />
        <MessageItem message={"Hi how much are you selling them for?"} />
        <MessageItem message={"I want $50"} reversed />
        <MessageItem message={"OK"} />
        <MessageItem message={"Hi how much are you selling them for?"} />
        <MessageItem message={"I want $50"} reversed />
        <MessageItem message={"OK"} />

        <MessageInput />
      </div>
    </Layout>
  );
};

export default ChatDetail;
