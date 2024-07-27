import { auth } from "@/auth";
import { Navbar } from "./_components/navbar";
import { getRandomMovie } from "@/helpers/movie";
import { Hero } from "./_components/hero";
import { Lists } from "./_components/lists";

export default async function BrowsePage() {
  const session = await auth();
  const movie = await getRandomMovie();

  return (
    <div className="h-screen bg-[#141414]">
      <Navbar user={session?.user} />
      <Hero movie={movie} />
      <Lists />
    </div>
  );
}
