import { cls } from "../../libs/utils";

interface MessageItemProps {
  message: string;
  avatarUrl?: string;
  reversed?: boolean;
}

export default function MessageItem({
  message,
  avatarUrl,
  reversed,
}: MessageItemProps) {
  return (
    <div
      className={cls(
        "flex items-start space-x-2",
        reversed ? "flex-row-reverse space-x-reverse" : ""
      )}
    >
      <div className="w-8 h-8 rounded-full bg-slate-400" />
      <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
        <p className={reversed ? "text-right" : ""}>{message}</p>
      </div>
    </div>
  );
}
