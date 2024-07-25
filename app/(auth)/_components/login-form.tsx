import { Input } from "@/app/components/input";
import Link from "next/link";

export const LoginForm = () => {
  return (
    <>
      <h1 className="text-white text-left text-[2rem] font-bold mb-7">
        Oturum Aç
      </h1>
      <Input
        label="E-posta veya cep telefonu numarası"
        name="email"
        id="email"
      />
      <Input label="Parola" name="password" id="password" />

      <button className="bg-[#e50914] text-white rounded py-2 w-full px-4 text-md font-medium min-h-8">
        Oturum aç
      </button>

      <p className="text-base font-normal text-white/70">
        Netflix&#39;e katılmak ister misiniz?{" "}
        <span className="text-white font-medium hover:underline">
          <Link href="/register">Şimdi kaydolun</Link>
        </span>
      </p>
    </>
  );
};
