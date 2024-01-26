import Item from "@components/items/item";
import Layout from "@components/layout";
import { NextPage } from "next";

const Sold: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="flex flex-col space-y-5 py-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
          <Item
            key={i}
            id={i}
            title={"New iPhone 15"}
            desc={"Black"}
            price={95}
            likes={1}
            comments={1}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Sold;
