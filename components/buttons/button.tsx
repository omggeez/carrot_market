interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  return (
    <button className="my-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
      {label}
    </button>
  );
}
