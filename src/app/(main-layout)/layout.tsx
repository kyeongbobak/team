"use client";

import TopNavBar from "../../components/TopNavBar";
import Footer from "../../components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <>
        {pathname === "/blog" ? (
          <body className="font-cabin bg-[#f5f7fa]">
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
      </>
    </>
  );
}
