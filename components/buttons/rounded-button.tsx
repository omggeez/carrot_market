import Link from "next/link";

interface RoundedButtonProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

export default function RoundedButton({
  href,
  label,
  children,
}: RoundedButtonProps) {
  return (
    <Link href={href}>
      <a className="flex flex-col items-center">
        <div className="w-14 h-14 text-white bg-orange-500 rounded-full flex items-center justify-center">
          {children}
        </div>
        <span className="text-sm mt-2 font-medium text-gray-700">{label}</span>
      </a>
    </Link>
  );
}
