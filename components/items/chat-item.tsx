import Link from "next/link";

interface ChatItemProps {
  id: number;
  writer: string;
  recentMessage: string;
}

export default function ChatItem({ id, writer, recentMessage }: ChatItemProps) {
  return (
    <Link href={`/chats/${id}`}>
      <a className="flex px-4 cursor-pointer py-3 items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-slate-300" />
        <div>
          <p className="text-gray-700">{writer}</p>
          <p className="text-sm text-gray-500">{recentMessage}</p>
        </div>
      </a>
    </Link>
  );
}
