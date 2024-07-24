import { Input } from "@/app/components/input";
import { QuestionItem } from "@/app/components/question-input";
import { faqs } from "@/constants";
import { FaChevronRight } from "react-icons/fa6";

export const FAQ = () => {
  return (
    <div className="py-10 border-b-8 border-[#232323] px-5 text-white">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-center text-[2rem] font-bold lg:text-5xl lg:font-black mb-8">
          Sıkça Sorulan Sorular
        </h2>

        {faqs.map((question) => (
          <QuestionItem key={question.id} data={question} />
        ))}

        <div className="flex flex-col mt-10">
          <h3 className="text-white text-lg font-normal text-center">
            İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak
            için tek yapmanız gereken e-posta adresinizi girmek.
          </h3>
          <div className="max-w-[400px] mt-5 mx-auto flex items-center justify-center gap-2">
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
