import Image from "next/image";
import tv from "@/public/tv.png";
import telephone from "@/public/telephone.jpg";
import mac from "@/public/mac.png";
import child from "@/public/child.png";

export const Features = () => {
  return (
    <>
      <div className="h-[700px] lg:h-[450px] border-b-8 border-[#232323] flex items-center justify-center text-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">
          <div className="max-w-xl lg:max-w-md">
            <h2 className="text-[2rem] lg:text-5xl lg:font-black lg:text-left text-center font-bold my-4">
              Televizyonunuzda izleyin
            </h2>
            <p className="mt-4 text-lg lg:text-2xl lg:text-left font-normal text-center my-4">
              Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              oynatıcılar ve daha fazlasında seyredin.
            </p>
          </div>
          <div className="max-w-xl lg:max-w-md z-10">
            <div className="relative">
              <Image src={tv} alt="television" />
              <div className="-z-20 overflow-hidden block w-full h-full max-w-[75%] max-h-[57%] absolute top-[20%] left-16">
                <video
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  width="auto"
                  height="auto"
                  autoPlay
                  playsInline
                  muted
                  loop
                  style={{ overflowClipMargin: "content-box" }}
                  className="overflow-clip inline-block align-baseline object-contain"
                >
                  <source type="video" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[700px] lg:h-[450px] border-b-8 border-[#232323] flex items-center justify-center text-white">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-20">
          <div className="max-w-xl lg:max-w-md">
            <h2 className="text-[2rem] lg:text-5xl lg:font-black lg:text-left text-center font-bold my-4">
              Çevrimdışı izlemek için içerikleri indirin
            </h2>
            <p className="mt-4 text-lg lg:text-2xl lg:text-left font-normal text-center my-4">
              En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek
              bir şeyleriniz olsun
            </p>
          </div>
          <div className="max-w-xl lg:max-w-xl mx-auto z-10 mb-10">
            <div className="relative">
              <Image src={telephone} width={500} alt="telephone" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[700px] lg:h-[450px] border-b-8 border-[#232323] flex items-center justify-center text-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">
          <div className="max-w-xl lg:max-w-md">
            <h2 className="text-[2rem] lg:text-5xl lg:font-black lg:text-left text-center font-bold my-4">
              İstediğiniz her yerde izleyin
            </h2>
            <p className="mt-4 text-lg lg:text-2xl lg:text-left font-normal text-center my-4">
              Telefonda, tablette, bilgisayarda, televizyonda sınırsız film ve
              dizi izleyin.
            </p>
          </div>
          <div className="max-w-xl lg:max-w-md z-10">
            <div className="relative">
              <Image src={mac} alt="macbook" />
              <div className="-z-20 overflow-hidden block w-full h-full max-w-[63%] max-h-[57%] absolute top-[10%] left-28 lg:left-20">
                <video
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  width="auto"
                  height="auto"
                  autoPlay
                  playsInline
                  muted
                  loop
                  style={{ overflowClipMargin: "content-box" }}
                  className="overflow-clip inline-block align-baseline object-contain"
                >
                  <source type="video" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[700px] lg:h-[450px] border-b-8 border-[#232323] flex items-center justify-center text-white">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-20">
          <div className="max-w-xl lg:max-w-md">
            <h2 className="text-[2rem] lg:text-5xl lg:font-black lg:text-left text-center font-bold my-4">
              Çocuklarınız için profiller oluşturun
            </h2>
            <p className="mt-4 text-lg lg:text-2xl lg:text-left font-normal text-center my-4">
              Üyeliğinize dahil olan bu ücretsiz deneyim sayesinde çocuklarınız,
              sadece onlara özel bir alanda en sevdikleri karakterlerle
              maceralara atılabilir.
            </p>
          </div>
          <div className="max-w-xl lg:max-w-xl mx-auto z-10 mb-10">
            <div className="relative">
              <Image src={child} width={500} alt="telephone" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
