import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../../libs/utils";

interface MenuItemProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

export default function MenuItem({ href, label, children }: MenuItemProps) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={cls(
          "flex flex-col items-center space-y-2",
          router.pathname === href
            ? "text-orange-500"
            : "hover:text-gray-500 transition-colors"
        )}
      >
        {children}
        <span>{label}</span>
      </a>
    </Link>
  );
}
