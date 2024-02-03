import FloatingButton from "@components/buttons/floating-button";
import ProductItem from "@components/items/product-item";
import Layout from "@components/layout";
import { Product } from "@prisma/client";
import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";

export interface ProductsWithFavoriteCount extends Product {
  _count: {
    favorites: number;
  };
}

interface ProductsResponse {
  ok: boolean;
  products: ProductsWithFavoriteCount[];
}

const Home: NextPage = () => {
  const { data } = useSWR<ProductsResponse>("/api/products");

  return (
    <Layout title="Home" hasTabBar>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col">
        {data?.products?.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.name}
            desc={product.description}
            price={product.price}
            likes={product._count.favorites}
            comments={1}
          />
        ))}
        <FloatingButton href="/products/upload">
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
