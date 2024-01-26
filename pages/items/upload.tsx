import Button from "@components/buttons/button";
import Input from "@components/inputs/input";
import Layout from "@components/layout";
import type { NextPage } from "next";

const ItemUpload: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 space-y-5 py-16">
        <div>
          <Input type="file" label="File" name="file" />
        </div>
        <div>
          <Input type="text" label="Name" name="name" />
        </div>
        <div>
          <Input type="price" label="Price" name="price" placeholder="0.00" />
        </div>
        <div>
          <Input type="textarea" label="Description" name="desc" rows="4" />
        </div>
        <Button label="Upload product" />
      </div>
    </Layout>
  );
};

export default ItemUpload;
