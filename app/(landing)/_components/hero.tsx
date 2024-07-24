import { Input } from "@/app/components/input";
import { FaChevronRight } from "react-icons/fa6";

export const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/90916372-5f3e-4a29-a579-2a7463fb6e73/TR-tr-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_2231687e-18f2-468d-a941-c6d3f9ac4a4f_large.jpg)`,
      }}
      className="bg-slate-500 border-b-8 border-[#232323] min-h-[700px] flex items-center justify-center w-full relative bg-no-repeat bg-cover bg-center"
    >
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
        }}
        className="absolute inset-0 bg-black/40"
      ></div>

      <div className="relative text-center">
        <h1 className="text-white text-5xl font-black my-2.5">
          Sınırsız film, dizi ve çok daha fazlası
        </h1>
        <p className="text-white text-2xl font-normal my-4">
          İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.
        </p>
        <div>
          <h3 className="text-xl font-normal leading-6 text-white max-w-4xl my-4 mb-8">
            İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak
            için tek yapmanız gereken e-posta adresinizi girmek.
          </h3>
          <div className="flex items-center gap-1 justify-center h-8">
            <Input label="E-posta adresi" name="email" id="email" />
            <button className="bg-[#e50914] text-white rounded py-3 px-6 text-xl font-bold min-h-8 inline-flex items-center gap-2">
              Başlayın
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
