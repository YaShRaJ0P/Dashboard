import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="flex flex-row w-screen min-h-screen  overflow-x-hidden"
      >
        <Navbar />
        <main className="w-full ">{children}</main>
      </body>
    </html>
  );
}
