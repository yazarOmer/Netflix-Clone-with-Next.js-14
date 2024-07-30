import { Carousel } from "./carousel";
import { getMovies } from "@/helpers/movie";

export const Lists = async () => {
  const data = await getMovies();
  return (
    <div className="bg-[#141414] pb-10">
      <Carousel label="Bunları Seveceğinizi Düşünüyoruz" movies={data} />
      <Carousel label="Sıradaki Önerimiz" movies={data} />
      <Carousel label="Bugün En Çok İzlenenler" movies={data} />
    </div>
  );
};
