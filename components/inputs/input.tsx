import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  type:
    | "text"
    | "number"
    | "email"
    | "password"
    | "phone"
    | "price"
    | "textarea"
    | "file";
  label: string;
  name: string;
  register?: UseFormRegisterReturn;

  [key: string]: any;
}

export default function Input({
  type = "text",
  label,
  name,
  register,
  ...rest
}: InputProps) {
  return (
    <div>
      {type !== "file" ? (
        <label
          className="mb-1 block text-sm font-medium text-gray-700"
          htmlFor={name}
        >
          {label}
        </label>
      ) : null}

      {type === "text" ? (
        <div className="rounded-md relative flex items-center shadow-sm">
          <input
            id={name}
            {...register}
            {...rest}
            className="appearance-none w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            type="text"
          />
        </div>
      ) : null}

      {type === "number" ? (
        <div className="rounded-md relative flex items-center shadow-sm">
          <input
            id={name}
            {...register}
            {...rest}
            className="appearance-none w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            type="number"
          />
        </div>
      ) : null}

      {type === "email" ? (
        <div className="rounded-md relative flex items-center shadow-sm">
          <input
            id={name}
            {...register}
            {...rest}
            className="appearance-none w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            type="email"
          />
        </div>
      ) : null}

      {type === "password" ? (
        <div className="rounded-md relative flex items-center shadow-sm">
          <input
            id={name}
            {...register}
            {...rest}
            className="appearance-none w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            type="password"
          />
        </div>
      ) : null}

      {type === "phone" ? (
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
            +82
          </span>
          <input
            id={name}
            {...register}
            {...rest}
            className="appearance-none w-full px-3 py-2 border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            type="number"
          />
        </div>
      ) : null}

      {type === "price" ? (
        <div className="rounded-md relative flex items-center shadow-sm">
          <div className="absolute left-0 pointer-events-none pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            id={name}
            {...register}
            {...rest}
            className="appearance-none pl-7 w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            type="text"
          />
          <div className="absolute right-0 pointer-events-none pr-3 flex items-center justify-center">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      ) : null}

      {type === "textarea" ? (
        <textarea
          id={name}
          {...rest}
          className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
        />
      ) : null}

      {type === "file" ? (
        <label className="w-full cursor-pointer text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input className="hidden" type="file" {...register} />
        </label>
      ) : null}
    </div>
  );
}
