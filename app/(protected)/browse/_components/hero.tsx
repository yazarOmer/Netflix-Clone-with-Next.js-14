import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

interface HeroProps {
  movie:
    | {
        id: string;
        title: string;
        description: string;
        videoUrl: string;
        thumbnailUrl: string;
        genre: string;
        duration: string;
      }
    | undefined;
}

export const Hero = ({ movie }: HeroProps) => {
  return (
    <div className="aspect-video relative bg-[#141414]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#141414] from-5% via-transparent to-[#141414] to-90%"></div>
      <video
        muted
        src={movie?.videoUrl}
        poster={movie?.thumbnailUrl}
        autoPlay
        loop
        className="w-full aspect-video h-auto"
      ></video>
      <div className="absolute top-[40%] ml-20">
        <h1 className="text-6xl font-bold drop-shadow-xl w-[50%]">
          {movie?.title}
        </h1>
        <p className="text-xl mt-5 drop-shadow-xl w-[50%]">
          {movie?.description}
        </p>
        <div className="flex items-center gap-x-2 mt-5">
          <button className="flex items-center gap-x-2 bg-white text-black px-10 py-3 rounded-md font-semibold text-lg hover:bg-white/70 transition-all">
            <FaPlay />
            Oynat
          </button>
          <button className="flex items-center gap-x-2 bg-gray-400 text-white px-10 py-3 rounded-md font-semibold text-lg hover:bg-gray-400/70 transition-all">
            <IoIosInformationCircleOutline />
            Daha Fazla Bilgi
          </button>
        </div>
      </div>
    </div>
  );
};
