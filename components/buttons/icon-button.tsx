import { cls } from "@libs/client/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  isLiked: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;

  children: React.ReactNode;
}

export default function IconButton({
  isLiked,
  onClick,
  children,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cls(
        "p-3 rounded-md flex items-center justify-center hover:bg-gray-100 ",
        isLiked
          ? "text-red-500 hover:text-red-600"
          : "text-gray-400 hover:text-gray-500"
      )}
    >
      {children}
    </button>
  );
}
