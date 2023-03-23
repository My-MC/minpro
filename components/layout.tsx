import { Noto_Sans_JP } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";

const noto = Noto_Sans_JP({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className={noto.className}>{children}</main>
      <Footer />
    </>
  );
}
