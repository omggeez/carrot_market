interface ReactionButtonProps {
  children: React.ReactNode;
  label: string;
  count: number;
}

export default function ReactionButton({
  children,
  label,
  count,
}: ReactionButtonProps) {
  return (
    <span className="flex space-x-2 items-center text-sm">
      {children}
      <span>
        {label} {count}
      </span>
    </span>
  );
}
