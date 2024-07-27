"use client";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

interface CarouselProps {
  label: string;
  movies:
    | {
        id: string;
        title: string;
        description: string;
        videoUrl: string;
        thumbnailUrl: string;
        genre: string;
        duration: string;
      }[]
    | undefined;
}

export const Carousel = ({ label, movies }: CarouselProps) => {
  const [valueX, setValueX] = useState(40);

  const handleRight = () => {
    setValueX((prev) => prev - 5 * 224);
  };

  const handleLeft = () => {
    setValueX((prev) => prev + 5 * 224);
  };

  return (
    <div className="flex flex-col gap-y-2 overflow-hidden">
      <h2 className="text-2xl font-semibold px-10">{label}</h2>
      <div className="flex gap-2 min-w-fit transition-all duration-500">
        <div
          onClick={handleLeft}
          className="h-[126px]  flex items-center justify-center bg-black/50 hover:bg-black/60 absolute left-0 z-10 text-white px-2 rounded-r cursor-pointer"
        >
          <FaChevronLeft />
        </div>
        <div
          style={{ left: valueX }}
          className={`relative flex gap-2 overflow-hidden transition-all duration-1000`}
        >
          {movies?.map((movie) => (
            <div
              key={movie.id}
              style={{ backgroundImage: `url("${movie.thumbnailUrl}")` }}
              className="aspect-video w-56 bg-center bg-no-repeat bg-cover rounded-[4px]"
            ></div>
          ))}
        </div>
        <div
          onClick={handleRight}
          className="h-[126px]  flex items-center justify-center bg-black/50 hover:bg-black/60 absolute right-0 text-white px-2 rounded-l cursor-pointer z-10"
        >
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};
