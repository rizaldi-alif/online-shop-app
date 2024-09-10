"use client";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

export default function Register() {
  return (
    <main className="py-16">
      <div className="border rounded-2xl p-4 flex flex-col w-72 max-w-xs mx-auto sm:w-80">
        <h2 className="text-center text-xl font-semibold">Daftar Akun</h2>
        <section className="flex flex-col mt-4 space-y-2" id="input-section">
          <section className="flex gap-2">
            <input
              type="first-name"
              name="first-name"
              id="first-name"
              className="border rounded-md p-2 text-xs outline-none focus:border-gray-400 transition-all w-1/2"
              placeholder="Nama Depan"
            />
            <input
              type="last-name"
              name="last-name"
              id="last-name"
              className="border rounded-md p-2 text-xs outline-none focus:border-gray-400 transition-all w-1/2"
              placeholder="Nama Belakang"
            />
          </section>
          <input
            type="phone-number"
            name="phone-number"
            id="phone-number"
            className="border rounded-md p-2 text-xs outline-none focus:border-gray-400 transition-all"
            placeholder="No. Telepon"
          />
          <input
            type="email"
            name="email"
            id="email"
            className="border rounded-md p-2 text-xs outline-none focus:border-gray-400 transition-all"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            id="password"
            className="border rounded-md p-2 text-xs outline-none focus:border-gray-400 transition-all duration-200"
            placeholder="Password"
          />
          <input
            type="password"
            name="password"
            id="password"
            className="border rounded-md p-2 text-xs outline-none focus:border-gray-400 transition-all duration-200"
            placeholder="Ulangi Password"
          />
          <button className="text-sm text-center rounded-md py-2 bg-sky-500 text-white hover:bg-sky-800 transition-all duration-150">
            Daftar
          </button>
        </section>
        <hr className="my-3 w-1/2 mx-auto" />
        <section id="other-section" className="space-y-2">
          <button className="text-left text-sm rounded-md border py-2 px-3 w-full align-middle hover:border-gray-400 transition-all duration-150">
            <GoogleIcon className="text-black" /> Daftar dengan Google
          </button>
          <button className="text-left text-sm rounded-md border py-2 px-3 w-full align-middle hover:border-gray-400 transition-all duration-150">
            <FacebookRoundedIcon className="text-black" /> Daftar dengan
            Facebook
          </button>
        </section>
        <section className="flex flex-col text-sm mt-3" id="link-section">
          <span>
            Sudah punya akun?{" "}
            <Link href={"/login"} className="text-blue-400 hover:underline">
              Masuk.
            </Link>
          </span>
        </section>
      </div>
    </main>
  );
}
