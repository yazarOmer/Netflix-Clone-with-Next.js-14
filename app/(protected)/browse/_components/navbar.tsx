"use client";
import Image from "next/image";
import netflix from "@/public/netflix.png";
import { GoSearch } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { UserButton } from "./user-button";
import { useEffect, useState } from "react";

type User = {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

interface NavbarProps {
  user: User | undefined;
}

export const Navbar = ({ user }: NavbarProps) => {
  const [scroll, setScroll] = useState(window.scrollY);

  window.addEventListener("scroll", () => {
    setScroll(window.scrollY);
  });

  return (
    <nav
      className={`text-white fixed top-0 h-16 w-full ${
        scroll > 0 ? "bg-[#141414]" : "bg-transparent"
      } flex items-center justify-between px-10 transition duration-200`}
    >
      <div className="flex items-center gap-7">
        <Image src={netflix} width={110} alt="navbar-logo" />
        <ul className="flex items-center gap-5">
          <li className="text-[13px] font-medium text-white hover:text-white/70 cursor-pointer transition duration-150">
            Ana Sayfa
          </li>
          <li className="text-[13px] font-normal text-white hover:text-white/70 cursor-pointer transition duration-150">
            Diziler
          </li>
          <li className="text-[13px] font-normal text-white hover:text-white/70 cursor-pointer transition duration-150">
            Filmler
          </li>
          <li className="text-[13px] font-normal text-white hover:text-white/70 cursor-pointer transition duration-150">
            Yeni ve Popüler
          </li>
          <li className="text-[13px] font-normal text-white hover:text-white/70 cursor-pointer transition duration-150">
            Listem
          </li>
          <li className="text-[13px] font-normal text-white hover:text-white/70 cursor-pointer transition duration-150">
            Dile Göre Göz At
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <GoSearch size={24} className="cursor-pointer" />
        <IoMdNotificationsOutline size={24} className="cursor-pointer" />
        <UserButton user={user} />
      </div>
    </nav>
  );
};
