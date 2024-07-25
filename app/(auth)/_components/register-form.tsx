import { Input } from "@/app/components/input";
import Link from "next/link";

export const RegisterForm = () => {
  return (
    <>
      <h1 className="text-white text-left text-[2rem] font-bold mb-7">
        Kayıt Ol
      </h1>
      <Input label="Kullanıcı adı" name="username" id="username" />
      <Input
        label="E-posta veya cep telefonu numarası"
        name="email"
        id="email"
      />
      <Input label="Parola" name="password" id="password" />

      <button className="bg-[#e50914] text-white rounded py-2 w-full px-4 text-md font-medium min-h-8">
        Kayıt Ol
      </button>

      <p className="text-base font-normal text-white/70">
        Zaten bir hesabınız var mı?{" "}
        <span className="text-white font-medium hover:underline">
          <Link href="/login">Giriş yapın</Link>
        </span>
      </p>
    </>
  );
};
