import { FAQ } from "./_components/faq";
import { Features } from "./_components/features";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}
