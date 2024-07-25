import Image from "next/image";
import netflix from "@/public/netflix.png";
import { Input } from "@/app/components/input";
import Link from "next/link";

export default function Login() {
  return (
    <div className="h-screen bg-[url('/login.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="w-full h-full bg-black sm:bg-opacity-50">
        <div className="max-w-5xl mx-auto py-3">
          <Image src={netflix} width={175} alt="logo" />
        </div>

        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-8 sm:px-16 w-full sm:py-16 rounded-md mt-2 sm:w-2/3 md:w-2/5 lg:max-w-md space-y-3">
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
          </div>
        </div>
      </div>
    </div>
  );
}
