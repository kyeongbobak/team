"use client";

import { Cabin } from "next/font/google";
import "../assets/styles/globals.css";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cabin",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en" className={cabin.variable}>
      <head>
        <link rel="icon" href="./webclip.png" />
        <title>team</title>
      </head>
      {pathname === "/blog" ? (
        <body className="font-cabin bg-[#f6f7fa]">
          <TopNavBar />
          {children}
          <Footer />
        </body>
      ) : (
        <body className="font-cabin">
          <TopNavBar />
          {children}
          <Footer />
        </body>
      )}
    </html>
  );
}
