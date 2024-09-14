"use client";

import ButtonWithIcon from "@/components/buttonWithIcon";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import FiberNewRoundedIcon from "@mui/icons-material/FiberNewRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MarkUnreadChatAltRoundedIcon from "@mui/icons-material/MarkUnreadChatAltRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import Link from "next/link";
import Button from "@/components/button";
import { useState } from "react";

export default function Home() {
  const [isFilled, setIsFilled] = useState(false);
  return (
    <main>
      {/* Topbar */}
      <section className="py-3 px-4 sm:px-8 sticky top-0 border-b bg-white shadow-md lg:px-12">
        <section className="flex items-center justify-between gap-2 md:mx-auto md:max-w-md lg:max-w-screen-xl">
          <Link
            href="/"
            className="font-bold text-slate-700 text-2xl hidden md:block"
          >
            OSA
          </Link>
          <Link href={`/`} className="text-sm hover:underline hidden lg:block">
            Kategori
          </Link>
          <div className="w-3/4 md:w-1/2 xl:w-3/5 relative">
            <input
              type="text"
              name="text"
              id="topbar-search-input"
              className="border rounded-md p-2 text-xs outline-none focus:border-gray-400 transition-all duration-200 w-full"
              placeholder="Ketik sesuatu..."
            />
            <CloseRoundedIcon
              className={`text-md absolute right-3 top-1 ${
                isFilled ? "block" : "hidden"
              }`}
            />
          </div>
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
            <ButtonWithIcon border="border-none" padding="p-0 relative">
              <ShoppingCartRoundedIcon className="text-slate-700" />
              <span className="absolute -right-1 -top-2 py-px px-1 bg-red-500 rounded-full text-xs text-white">
                12
              </span>
            </ButtonWithIcon>
            <ButtonWithIcon border="border-none" padding="p-0">
              <NotificationsRoundedIcon className="text-slate-700" />
            </ButtonWithIcon>
            <ButtonWithIcon border="border-none" padding="p-0">
              <ChatRoundedIcon className="text-slate-700" />
            </ButtonWithIcon>
            <ButtonWithIcon
              border="border-none"
              padding="p-0 hidden md:block lg:hidden"
            >
              <AccountCircleRoundedIcon className="text-slate-700" />
            </ButtonWithIcon>
          </div>
          <div
            id="topbar-divider"
            className="border h-7 border-slate-300 rounded-md hidden lg:block"
          />
          <div className="hidden lg:flex gap-2 items-center">
            <Button
              title="Masuk"
              rounded="lg"
              border="border"
              borderColor="border-sky-500"
            />
            <Button
              title="Daftar"
              rounded="lg"
              bg="white"
              bgHover="sky-500"
              hoverBorderColor="text-white"
              hoverTextColor="border-white"
              textColor="sky-500"
              border="border"
              borderColor="border-sky-500"
            />
          </div>
        </section>
      </section>
      <section className="min-h-screen">bbbbb</section>
      {/* Bottombar */}
      <section className="border-t py-3 px-4 sticky bottom-0 shadow-lg lg:hidden">
        <section className="flex justify-between items-center md:max-w-md md:mx-auto">
          <ButtonWithIcon
            border="border-none"
            padding="p-0"
            textColor="text-sky-500"
          >
            <HomeRoundedIcon className="text-md" />
            <span className="text-xs">Beranda</span>
          </ButtonWithIcon>
          <ButtonWithIcon
            border="border-none"
            padding="p-0"
            textColor="text-slate-700"
          >
            <FiberNewRoundedIcon className="text-md" />
            <span className="text-xs">Baru</span>
          </ButtonWithIcon>
          <ButtonWithIcon
            border="border-none"
            padding="p-0"
            textColor="text-slate-700 hidden md:block"
          >
            <VerifiedRoundedIcon className="text-md" />
            <span className="text-xs">Terverifikasi</span>
          </ButtonWithIcon>
          <ButtonWithIcon
            border="border-none"
            padding="p-0"
            textColor="text-slate-700"
          >
            <FavoriteRoundedIcon className="text-md" />
            <span className="text-xs">Wishlist</span>
          </ButtonWithIcon>
          <ButtonWithIcon
            border="border-none"
            padding="p-0"
            textColor="text-slate-700"
          >
            <ReceiptRoundedIcon className="text-md" />
            <span className="text-xs">Transaksi</span>
          </ButtonWithIcon>
          <ButtonWithIcon
            border="border-none"
            padding="p-0"
            textColor="text-slate-700 md:hidden"
          >
            <AccountCircleRoundedIcon className="text-md" />
            <span className="text-xs">Saya</span>
          </ButtonWithIcon>
        </section>
      </section>
    </main>
  );
}
