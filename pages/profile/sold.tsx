import ProductList from "@components/items/product-list";
import Layout from "@components/layout";
import { NextPage } from "next";

const Sold: NextPage = () => {
  return (
    <Layout title="Sold List" canGoBack>
      <div className="flex flex-col space-y-5 py-10">
        <ProductList type="sales" />
      </div>
    </Layout>
  );
};

export default Sold;
