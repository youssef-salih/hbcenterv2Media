import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hb Center",
  description: "Hb Center",
};

// const avenir = localFont({
//   src: "../public/fonts/Avenir.ttc",
//   variable: "--font-avenir",
// });
const montserratBold = localFont({
  src: "../public/fonts/Montserrat-Bold.ttf",
  variable: "--font-montserratBold",
});
const montserratRegular = localFont({
  src: "../public/fonts/Montserrat-Regular.ttf",
  variable: "--font-montserratRegular",
});
const oswaldSemiBold = localFont({
  src: "../public/fonts/Oswald-SemiBold.ttf",
  variable: "--font-oswaldSemiBold",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserratBold.variable} ${montserratRegular.variable} ${oswaldSemiBold.variable}`}
    >
      <body className="font-montserratRegular ">
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
