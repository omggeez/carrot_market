import Button from "@components/buttons/button";
import Input from "@components/inputs/input";
import Layout from "@components/layout";
import useMutation from "@libs/client/use-mutation";
import { Product } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface UploadProductForm {
  file: string;
  name: string;
  price: number;
  description: string;
}

interface UploadProductMutation {
  ok: boolean;
  product: Product;
}

const ProductUpload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UploadProductForm>();
  const [uploadProduct, { loading, data }] =
    useMutation<UploadProductMutation>("/api/products");

  const onValid = (data: UploadProductForm) => {
    if (loading) return;

    uploadProduct(data);
  };

  useEffect(() => {
    if (data?.ok) {
      router.push(`/products/${data.product.id}`);
    }
  }, [data]);

  return (
    <Layout canGoBack>
      <form onSubmit={handleSubmit(onValid)} className="px-4 space-y-5 py-16">
        <div>
          <Input
            register={register("file")}
            type="file"
            label="File"
            name="file"
          />
        </div>
        <div>
          <Input
            register={register("name", { required: true })}
            type="text"
            label="Name"
            name="name"
            required
          />
        </div>
        <div>
          <Input
            register={register("price", { required: true })}
            type="price"
            label="Price"
            name="price"
            placeholder="0"
            required
          />
        </div>
        <div>
          <Input
            register={register("description", { required: true })}
            type="textarea"
            label="Description"
            name="description"
            rows="4"
            required
          />
        </div>
        <Button label={loading ? "Loading" : "Upload product"} />
      </form>
    </Layout>
  );
};

export default ProductUpload;
