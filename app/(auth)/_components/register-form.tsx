"use client";
import { Input } from "@/app/components/input";
import { register as registerAction } from "@/actions/register";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useTransition } from "react";

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      registerAction(data);
    });
  };

  return (
    <>
      <h1 className="text-white text-left text-[2rem] font-bold mb-7">
        Kayıt Ol
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          isError={errors.username ? true : false}
          register={register("username")}
          label="Kullanıcı adı"
          name="username"
          id="username"
        />
        <p className="text-[13px] text-[#eb3942] font-normal mt-[6px]">
          {errors.username?.message}
        </p>

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
          className="bg-[#e50914] text-white rounded py-2 w-full px-4 text-md font-medium min-h-8"
        >
          Kayıt Ol
        </button>
      </form>

      <p className="text-base font-normal text-white/70">
        Zaten bir hesabınız var mı?{" "}
        <span className="text-white font-medium hover:underline">
          <Link href="/login">Giriş yapın</Link>
        </span>
      </p>
    </>
  );
};
