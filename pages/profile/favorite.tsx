import ProductList from "@components/items/product-list";
import Layout from "@components/layout";
import { NextPage } from "next";

const Loved: NextPage = () => {
  return (
    <Layout title="Favorite List" canGoBack>
      <div className="flex flex-col space-y-5 py-10">
        <ProductList type="favorites" />
      </div>
    </Layout>
  );
};

export default Loved;
