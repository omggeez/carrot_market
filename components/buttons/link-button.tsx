interface LinkButtonProps {
  children: React.ReactNode;
}

export default function LinkButton({ children }: LinkButtonProps) {
  return (
    <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
      {children}
    </button>
  );
}
