import { auth } from "@/auth";
import { Navbar } from "./_components/navbar";

export default async function BrowsePage() {
  const session = await auth();

  return (
    <div className=" h-screen">
      <Navbar user={session?.user} />
    </div>
  );
}
