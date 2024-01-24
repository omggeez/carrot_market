interface IconButtonProps {
  children: React.ReactNode;
}

export default function IconButton({ children }: IconButtonProps) {
  return (
    <button className="p-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
      {children}
    </button>
  );
}
