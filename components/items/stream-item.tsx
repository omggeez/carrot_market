import Link from "next/link";

interface StreamItemProps {
  id: number;
  title: string;
  price: number;
}

export default function StreamItem({ id, title, price }: StreamItemProps) {
  return (
    <Link href={`/streams/${id}`}>
      <a className="pt-4 px-4">
        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
        <h3 className="text-gray-700 text-xl font-bold mt-2">{title}</h3>
        <span>${price}</span>
      </a>
    </Link>
  );
}
