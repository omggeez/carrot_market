import { cls } from "@libs/client/utils";
import { useRouter } from "next/router";
import MenuItem from "./items/menu-item";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

interface Menu {
  href: string;
  label: string;
  svg: JSX.Element;
}

const MENU_LIST: Menu[] = [
  {
    href: "/",
    label: "Home",
    svg: (
      <svg
        className="w-6 h-6"
        data-slot="icon"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        ></path>
      </svg>
    ),
  },
  {
    href: "/community",
    label: "Community",
    svg: (
      <svg
        className="w-6 h-6"
        data-slot="icon"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
        ></path>
      </svg>
    ),
  },
  {
    href: "/chats",
    label: "Chats",
    svg: (
      <svg
        className="w-6 h-6"
        data-slot="icon"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
        ></path>
      </svg>
    ),
  },
  {
    href: "/streams",
    label: "Stream",
    svg: (
      <svg
        className="w-6 h-6"
        data-slot="icon"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
        ></path>
      </svg>
    ),
  },
  {
    href: "/profile",
    label: "Profile",
    svg: (
      <svg
        className="w-6 h-6"
        data-slot="icon"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        ></path>
      </svg>
    ),
  },
];

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  return (
    <div>
      <div className="bg-white w-full h-12 max-w-xl justify-center text-lg px-10 font-medium fixed text-gray-800 border-b top-0 flex items-center z-10">
        {canGoBack ? (
          <button className="absolute left-4" onClick={onClickBack}>
            <svg
              className="w-6 h-6"
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              ></path>
            </svg>
          </button>
        ) : null}
        {title ? (
          <span
            className={cls(
              "text-gray-700 font-bold text-lg",
              canGoBack ? "mx-auto" : ""
            )}
          >
            {title}
          </span>
        ) : null}
      </div>

      <div className={cls("pt-12", hasTabBar ? "pb-24" : "")}>{children}</div>

      {hasTabBar ? (
        <nav className="bg-white w-full max-w-xl text-xs font-medium px-10 py-6 fixed text-gray-700 border-t bottom-0 flex items-center justify-between">
          {MENU_LIST.map((menu, i) => (
            <MenuItem key={i} href={menu.href} label={menu.label}>
              {menu.svg}
            </MenuItem>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
