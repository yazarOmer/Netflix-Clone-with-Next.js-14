"use client";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";

interface QuestionItemProps {
  data: {
    id: number;
    title: string;
    answer: string;
  };
}

export const QuestionItem = ({ data }: QuestionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full h-[85px] cursor-pointer bg-[#2d2d2d] hover:bg-[#414141] ${
          isOpen ? "mb-0" : "mb-1"
        } flex items-center justify-between px-5 text-2xl`}
      >
        <h3>{data.title}</h3>
        {isOpen ? <IoCloseOutline size={48} /> : <GoPlus size={48} />}
      </div>
      {isOpen && (
        <div className="w-full p-5 border-t border-black bg-[#2d2d2d] text-2xl mb-1">
          {data.answer}
        </div>
      )}
    </>
  );
};
