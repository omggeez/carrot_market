import { NextPage } from "next";
import Layout from "../../components/layout";
import Input from "../../components/inputs/input";
import Button from "../../components/buttons/button";

const CommunityWrite: NextPage = () => {
  return (
    <Layout canGoBack>
      <form className="px-4 py-10">
        <Input
          type="textarea"
          label="How are you today?"
          name="question"
          rows="4"
          placeholder="Ask a question!"
        />
        <Button label="Submit" />
      </form>
    </Layout>
  );
};

export default CommunityWrite;
