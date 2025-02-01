"use client";

import { Cabin } from "next/font/google";
import { usePathname } from "next/navigation";
import "../assets/styles/globals.css";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";

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
      {pathname === "auth/login" || "auth/signup" ? (
        <body className="font-cabin bg-[#f6f7fa]">{children}</body>
      ) : pathname === "/blog" ? (
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
