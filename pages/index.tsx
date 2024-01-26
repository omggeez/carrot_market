import FloatingButton from "@components/buttons/floating-button";
import Item from "@components/items/item";
import Layout from "@components/layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout title="Home" hasTabBar>
      <div className="flex flex-col">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
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
        <FloatingButton href="/items/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
