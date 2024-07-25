"use client";
import { login } from "@/actions/login";
import { Input } from "@/app/components/input";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(data);
    });
  };

  return (
    <>
      <h1 className="text-white text-left text-[2rem] font-bold mb-7">
        Oturum Aç
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <Input
          isError={errors.email ? true : false}
          register={register("email")}
          label="E-posta veya cep telefonu numarası"
          name="email"
          id="email"
        />
        <p className="text-[13px] text-[#eb3942] font-normal mt-[6px]">
          {errors.email?.message}
        </p>
        <Input
          isError={errors.password ? true : false}
          register={register("password")}
          label="Parola"
          name="password"
          id="password"
        />
        <p className="text-[13px] text-[#eb3942] font-normal mt-[6px]">
          {errors.password?.message}
        </p>

        <button
          disabled={isPending}
          type="submit"
          className="bg-[#e50914] text-white rounded py-2 w-full px-4 text-md font-medium min-h-8"
        >
          Oturum aç
        </button>
      </form>

      <p className="text-base font-normal text-white/70">
        Netflix&#39;e katılmak ister misiniz?{" "}
        <span className="text-white font-medium hover:underline">
          <Link href="/register">Şimdi kaydolun</Link>
        </span>
      </p>
    </>
  );
};
