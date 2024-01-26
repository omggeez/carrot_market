import Button from "@components/buttons/button";
import Input from "@components/inputs/input";
import Layout from "@components/layout";
import { NextPage } from "next";

const StreamCreate: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 px-4 space-y-5">
        <div>
          <Input type="text" label="Name" name="name" />
        </div>
        <div>
          <Input type="price" label="Price" name="price" placeholder="0.00" />
        </div>
        <div>
          <Input type="textarea" label="Description" name="desc" rows="4" />
        </div>

        <Button label="Go live" />
      </div>
    </Layout>
  );
};

export default StreamCreate;
