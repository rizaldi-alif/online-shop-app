"use client";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import Button from "@/components/button";
import ButtonWithIcon from "@/components/buttonWithIcon";

export default function Login() {
  return (
    <main className="py-16">
      <div className="border border-gray-200 rounded-2xl p-4 flex flex-col w-72 max-w-xs mx-auto sm:w-80">
        <h2 className="text-center text-xl font-semibold">Masuk</h2>
        <section className="flex flex-col mt-4 space-y-2" id="input-section">
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
          <Button title="Masuk" rounded="md" />
        </section>
        <hr className="my-3 w-1/2 mx-auto" />
        <section id="other-section" className="space-y-2">
          <ButtonWithIcon>
            <GoogleIcon /> Masuk dengan Google{" "}
          </ButtonWithIcon>
          <ButtonWithIcon>
            <FacebookRoundedIcon /> Masuk dengan Facebook
          </ButtonWithIcon>
        </section>
        <section className="flex flex-col text-sm mt-3" id="link-section">
          <span>
            Lupa password?{" "}
            <Link
              href={"/forgot-password"}
              className="text-blue-400 hover:underline"
            >
              Reset password.
            </Link>
          </span>
          <span>
            Belum punya akun?{" "}
            <Link href={"/register"} className="text-blue-400 hover:underline">
              Daftar.
            </Link>
          </span>
        </section>
      </div>
    </main>
  );
}
