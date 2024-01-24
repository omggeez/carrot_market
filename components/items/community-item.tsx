import Link from "next/link";
import Tag, { TagType } from "./tag";
import ReactionButton from "../buttons/reaction-button";

interface CommunityItemProps {
  id: number;
  tag: TagType;
  question: string;
  writer: string;
  writeDate: string;
}

export default function CommunityItem({
  id,
  tag,
  question,
  writer,
  writeDate,
}: CommunityItemProps) {
  return (
    <Link href={`/community/${id}`}>
      <a className="flex flex-col items-start cursor-pointer">
        <Tag type={tag} />

        <div className="mt-2 text-gray-700">
          <span className="text-orange-500 font-medium">Q</span> {question}
        </div>

        <div className="mt-5 flex items-center justify-between w-full text-gray-500 font-medium text-xs">
          <span>{writer}</span>
          <span>{writeDate}</span>
        </div>

        <div className="flex space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-2 w-full">
          <ReactionButton label={"Like"} count={1}>
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
          </ReactionButton>

          <ReactionButton label={"Comments"} count={1}>
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
          </ReactionButton>
        </div>
      </a>
    </Link>
  );
}
