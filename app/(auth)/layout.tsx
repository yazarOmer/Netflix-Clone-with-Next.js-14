import Image from "next/image";
import netflix from "@/public/netflix.png";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/90916372-5f3e-4a29-a579-2a7463fb6e73/TR-tr-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_2231687e-18f2-468d-a941-c6d3f9ac4a4f_large.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="w-full h-full bg-black sm:bg-opacity-50">
        <div className="max-w-5xl mx-auto py-3">
          <Image src={netflix} width={175} alt="logo" />
        </div>

        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-8 sm:px-16 w-full sm:py-16 rounded-md mt-2 sm:w-2/3 md:w-2/5 lg:max-w-md space-y-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
