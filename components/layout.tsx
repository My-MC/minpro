import { Noto_Sans_JP } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";

const noto = Noto_Sans_JP({
  weight: ["400", "500"],
  display: "swap",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={noto.className}>
        <Header />
      </div>
      <main className={noto.className}>{children}</main>
      <div className={noto.className}>
        <Footer />
      </div>
    </>
  );
}
