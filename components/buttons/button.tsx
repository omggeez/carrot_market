import { MouseEventHandler } from "react";

interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="my-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
    >
      {label}
    </button>
  );
}
