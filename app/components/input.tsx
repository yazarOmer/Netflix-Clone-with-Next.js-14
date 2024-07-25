import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  id: string;
  isError: boolean;
  register: UseFormRegisterReturn<"email" | "password" | "username">;
}

export const Input = ({ label, name, id, register, isError }: InputProps) => {
  return (
    <div className="relative">
      <input
        {...register}
        type={name !== "password" ? "text" : "password"}
        className={`w-full h-full rounded border ${
          isError ? "border-[#eb3942]" : "border-[rgba(128,128,128,0.7)]"
        }  bg-[rgba(22,22,22,0.7)] text-base pt-6 px-4 pb-2 text-white font-medium outline-none peer focus:outline-2 focus:outline-white`}
        name={name}
        id={id}
        placeholder=" "
      />
      <label
        className="absolute transition-all duration-200 top-1/2 left-4 text-white/50 -translate-y-1/2 peer-focus:text-[10px] peer-focus:top-1/4 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:top-1/4"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
