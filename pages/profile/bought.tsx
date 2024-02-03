import ProductList from "@components/items/product-list";
import Layout from "@components/layout";
import { NextPage } from "next";

const Bought: NextPage = () => {
  return (
    <Layout title="Bought List" canGoBack>
      <div className="flex flex-col space-y-5 py-10">
        <ProductList type="purchases" />
      </div>
    </Layout>
  );
};

export default Bought;
