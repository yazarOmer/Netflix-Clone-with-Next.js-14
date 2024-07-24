import Image from "next/image";
import netflix from "@/public/netflix.png";

export const Navbar = () => {
  return (
    <div className="max-w-5xl bg-transparent w-full z-10 mx-auto flex items-center justify-between py-3 absolute left-0 right-0">
      <Image src={netflix} height={40} width={150} alt="netflix logo" />
      <button className="bg-[#e50914] text-white rounded py-1 px-4 text-sm font-medium min-h-8">
        Oturum aç
      </button>
    </div>
  );
};
