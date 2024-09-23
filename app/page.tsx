import BottomBar from "@/components/bottombar";
import Topbar from "@/components/topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <main className="py-3 md:mx-auto md:max-w-md lg:max-w-screen-xl">
        <section className="container">This is a shop section</section>
      </main>
      <BottomBar />
    </>
  );
}
