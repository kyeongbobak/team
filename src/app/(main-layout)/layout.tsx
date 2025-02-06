"use client";

import TopNavBar from "../../components/TopNavBar";
import Footer from "../../components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <div className={pathname === "/blog" ? "font-cabin bg-[#f5f7fa]" : "font-cabin"}>
        <TopNavBar />
        {children}
        <Footer />
      </div>
    </>
  );
}
