import { NextPage } from "next";
import MessageItem from "../../components/items/message-item";
import MessageInput from "../../components/inputs/message-input";
import Layout from "../../components/layout";

const StreamDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 px-4 space-y-4">
        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
        <h3 className="text-gray-800 font-semibold text-2xl mt-2">
          Let's try potatos
        </h3>
        <div className="py-10 pb-16 h-[40vh] overflow-y-scroll px-4 space-y-4">
          <MessageItem message={"Hi how much are you selling them for?"} />
          <MessageItem message={"I want $50"} reversed />
          <MessageItem message={"Hi how much are you selling them for?"} />
          <MessageItem message={"I want $50"} reversed />
          <MessageItem message={"Hi how much are you selling them for?"} />
          <MessageItem message={"I want $50"} reversed />
          <MessageItem message={"Hi how much are you selling them for?"} />
          <MessageItem message={"I want $50"} reversed />
          <MessageItem message={"Hi how much are you selling them for?"} />
          <MessageItem message={"I want $50"} reversed />

          <MessageInput />
        </div>
      </div>
    </Layout>
  );
};

export default StreamDetail;
