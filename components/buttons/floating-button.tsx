import Link from "next/link";

interface FloatingButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function FloatingButton({
  href,
  children,
}: FloatingButtonProps) {
  return (
    <Link href={href}>
      <a className="fixed hover:bg-orange-500 cursor-pointer transition-colors bottom-24 right-5 shadow-xl bg-orange-400 rounded-full p-4 text-white">
        {children}
      </a>
    </Link>
  );
}
