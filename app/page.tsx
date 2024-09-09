import Image from "next/image";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";

export default function Home() {
  return (
    <main>
      <div className="border border-gray-200 rounded-2xl p-4 mt-24 flex flex-col w-60 max-w-xs mx-auto sm:w-80">
        <h2 className="text-center text-xl font-semibold">Login</h2>
        <section className="flex flex-col mt-4" id="input-section">
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
            className="border rounded-md mt-2 p-2 text-xs outline-none focus:border-gray-400 transition-all duration-200"
            placeholder="Password"
          />
          <button className="mt-2 text-sm text-center rounded-md py-2 bg-sky-500 text-white hover:bg-sky-800 transition-all duration-150">
            Login
          </button>
        </section>
        <hr className="my-3 w-1/2 mx-auto" />
        <section id="other-section">
          <button className="text-center text-sm rounded-md border py-2 w-full">
            <GoogleIcon className="text-black" /> Login with google
          </button>
        </section>
        <section className="flex flex-col text-sm" id="link-section">
          <Link href={"/"} className="text-blue-400 hover:underline">
            Lupa password?
          </Link>
          <span>
            Belum punya akun?{" "}
            <Link href={"/"} className="text-blue-400 hover:underline">
              Daftar.
            </Link>
          </span>
        </section>
      </div>
    </main>
  );
}
