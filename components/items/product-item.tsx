import Link from "next/link";

interface ProductItemProps {
  id: number;
  title: string;
  desc: string;
  price: number;
  likes: number;
  comments: number;
}

export default function ProductItem({
  id,
  title,
  desc,
  price,
  likes,
  comments,
}: ProductItemProps) {
  return (
    <Link href={`/products/${id}`}>
      <a className="flex justify-between border-b px-4 py-4 cursor-pointer">
        <div className="flex space-x-4">
          <div className="w-20 h-20 bg-gray-400 rounded-md" />
          <div className="pt-2 flex flex-col">
            <h3 className="text-sm font-medium text-gray-900">{title}</h3>
            <span className="text-xs text-gray-500">{desc}</span>
            <span className="font-medium mt-1 text-gray-900">${price}</span>
          </div>
        </div>
        <div className="flex space-x-10 items-end justify-end">
          <div className="flex space-x-0.5 items-center text-sm text-gray-600">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            <span>{likes}</span>
          </div>
          <div className="flex space-x-0.5 items-center text-sm text-gray-600">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>{comments}</span>
          </div>
        </div>
      </a>
    </Link>
  );
}
