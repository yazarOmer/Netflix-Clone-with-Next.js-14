import { auth, signOut } from "@/auth";
import Image from "next/image";
import avatar from "@/public/avatar.png";
import Link from "next/link";

export default async function ProfilesPage() {
  const session = await auth();

  return (
    <div className="bg-[#141414] w-full h-screen text-white flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-[3.5vw]">Kim izliyor?</h1>

        <Link
          href="/browse"
          className="flex flex-col items-center gap-y-2 group mt-3 min-w-[150px] min-h-fit cursor-pointer"
        >
          <Image
            src={avatar}
            width={120}
            className="rounded-md box-content group-hover:border-2 group-hover:border-white"
            alt="avatar"
          />
          <p className="text-white/70 group-hover:text-white">
            {session?.user?.name}
          </p>
        </Link>
      </div>
    </div>
  );
}
