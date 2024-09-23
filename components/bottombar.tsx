import ButtonWithIcon from "@/components/buttonWithIcon";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import FiberNewRoundedIcon from "@mui/icons-material/FiberNewRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

export default function BottomBar() {
  return (
    <section className="border-t py-3 fixed bottom-0 right-0 left-0 shadow-lg lg:hidden">
      <section className="flex justify-between items-center md:max-w-md md:mx-auto container">
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
          textColor="text-slate-700 hidden md:flex"
          textAlign="center"
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
  );
}
