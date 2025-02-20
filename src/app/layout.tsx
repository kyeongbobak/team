import { Cabin } from "next/font/google";
import "../styles/globals.css";
import Providers from "./providers";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cabin",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cabin.variable}>
      <head>
        <link rel="icon" href="./webclip.png" />
        <title>team</title>

        <body className="font-cabin">
          <Providers>{children}</Providers>
        </body>
      </head>
    </html>
  );
}
