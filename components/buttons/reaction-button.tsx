import { cls } from "@libs/client/utils";
import { MouseEventHandler } from "react";

interface ReactionButtonProps {
  label: string;
  count: number;
  reaction?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;

  children: React.ReactNode;
}

export default function ReactionButton({
  label,
  count,
  reaction,
  onClick,
  children,
}: ReactionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cls(
        "flex space-x-2 items-center text-sm ",
        reaction ? "text-red-500" : ""
      )}
    >
      {children}
      <span>
        {label} {count}
      </span>
    </button>
  );
}
