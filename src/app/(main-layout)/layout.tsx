"use client";

import TopNavBar from "../../components/TopNavBar";
import Footer from "../../components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNavBar />
      {children}
      <Footer />
    </>
  );
}
