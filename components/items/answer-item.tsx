interface AnswerItemProps {
  writer: string;
  writeDate: string;
  content: string;
}

export default function AnswerItem({
  writer,
  writeDate,
  content,
}: AnswerItemProps) {
  return (
    <div className="flex items-start space-x-3">
      <div className="w-8 h-8 bg-slate-200 rounded-full" />
      <div>
        <span className="text-sm block font-medium text-gray-700">
          {writer}
        </span>
        <span className="text-xs text-gray-500 block">{writeDate}</span>
        <p className="text-gray-700 mt-2">{content}</p>
      </div>
    </div>
  );
}
