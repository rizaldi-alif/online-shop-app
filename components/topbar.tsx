"use client";

import Link from "next/link";
import ButtonWithIcon from "./buttonWithIcon";
import Button from "./button";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useRef, useState } from "react";
import { redirect } from "next/navigation";

export default function Topbar() {
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef(null);
  const handleTopbarInputChange = (par) => {
    const value = par.target.value;
    value ? setIsFilled(true) : setIsFilled(false);
  };
  const handleCloseBtnClick = () => {
    inputRef.current.value = "";
    inputRef.current.focus();

    setIsFilled(false);
  };
  return (
    <section className="py-3 sticky top-0 border-b bg-white shadow-md">
      <section className="flex container items-center justify-between gap-2 md:mx-auto md:max-w-md lg:max-w-screen-xl">
        <Link
          href="/"
          className="font-bold text-slate-700 text-2xl hidden md:block"
        >
          OSA
        </Link>
        <Link href={`/`} className="text-sm hover:underline hidden lg:block">
          Kategori
        </Link>
        <div className="w-3/4 md:w-1/2 xl:w-2/3 relative">
          <input
            type="text"
            name="text"
            id="topbar-search-input"
            className="border rounded-md p-2 pr-7 text-xs outline-none focus:border-gray-400 transition-all duration-200 w-full"
            placeholder="Ketik sesuatu..."
            onChange={handleTopbarInputChange}
            ref={inputRef}
          />
          <button
            className={`text-md absolute right-1 top-1 ${
              isFilled ? "block" : "hidden"
            }`}
            onClick={handleCloseBtnClick}
          >
            <CloseRoundedIcon />
          </button>
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
          <Link
            href={`/login`}
            className="text-sm text-center px-3 py-2 rounded-md bg-sky-500 text-white  transition-all duration-150 border border-sky-500 hover:bg-white hover:text-sky-500"
          >
            Masuk
          </Link>
          <Link href={`/register`} className="hover:text-sky-500">
            Daftar
          </Link>
        </div>
      </section>
    </section>
  );
}
