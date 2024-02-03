import { ProductsWithFavoriteCount } from "pages";
import useSWR from "swr";
import ProductItem from "./product-item";

interface Record {
  id: number;
  product: ProductsWithFavoriteCount;
}

interface ProductListResponse {
  [key: string]: Record[];
}

interface ProductListProps {
  type: "favorites" | "sales" | "purchases";
}

export default function ProductList({ type }: ProductListProps) {
  const { data } = useSWR<ProductListResponse>(`/api/users/me/${type}`);

  return data ? (
    <>
      {data[type]?.map((record) => (
        <ProductItem
          key={record.id}
          id={record.product.id}
          title={record.product.name}
          desc={record.product.description}
          price={record.product.price}
          likes={record.product._count.favorites}
          comments={1}
        />
      ))}
    </>
  ) : null;
}
