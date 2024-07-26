"use client";
import Image from "next/image";
import avatar from "@/public/avatar.png";
import { GoTriangleDown } from "react-icons/go";
import { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { PiUserRectangleLight } from "react-icons/pi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { signOut } from "@/auth";
import { signOutAction } from "@/actions/sign-out";

type User = {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

interface UserButtonProps {
  user: User | undefined;
}

export const UserButton = ({ user }: UserButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <Image src={avatar} width={32} alt="avatar" className="rounded-md" />
        <GoTriangleDown
          style={{ rotate: isOpen ? "180deg" : "0deg" }}
          className="transition-all duration-150"
        />
      </div>

      {isOpen && (
        <div className="w-48 p-2 px-3 bg-black border border-[#141414] absolute right-0 top-12">
          <ul className="border-b border-[#141414]">
            <li className="flex items-center gap-2 py-1.5 text-sm hover:underline cursor-pointer">
              <Image
                src={avatar}
                width={24}
                alt="avatar"
                className="rounded-sm"
              />
              {user?.name}
            </li>
            <li className="flex items-center gap-2 py-1.5 text-sm hover:underline cursor-pointer">
              <GrEdit size={24} />
              Profil Yönetimi
            </li>
            <li className="flex items-center gap-2 py-1.5 text-sm hover:underline cursor-pointer">
              <PiUserRectangleLight size={24} />
              Profili Aktar
            </li>
            <li className="flex items-center gap-2 py-1.5 text-sm hover:underline cursor-pointer">
              <RxAvatar size={24} />
              Hesap
            </li>
            <li className="flex items-center gap-2 py-1.5 text-sm hover:underline cursor-pointer">
              <IoIosHelpCircleOutline size={24} />
              Yardım Merkezi
            </li>
          </ul>
          <form action={signOutAction}>
            <button
              type="submit"
              className="text-sm w-full text-center pt-4 pb-2 hover:underline"
            >
              Netflix oturumunu kapat
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
