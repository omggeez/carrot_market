export type TagType = "daily";

interface TagProps {
  type: TagType;
}

export default function Tag({ type }: TagProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
      {type === "daily" ? "Daily ☀️" : null}
    </span>
  );
}
