import Link from "next/link";

interface PreviewProductItemProps {
  id: number;
  title: string;
  price: number;
}

export default function PreviewProductItem({
  id,
  title,
  price,
}: PreviewProductItemProps) {
  return (
    <Link href={`/products/${id}`}>
      <a>
        <div className="h-56 w-full mb-4 bg-slate-300" />
        <h3 className="text-gray-700 -mb-1">{title}</h3>
        <span className="text-sm font-medium text-gray-900">${price}</span>
      </a>
    </Link>
  );
}
