import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import Loading from "./loading";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created by Sarkhail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} dark:bg-black text-white overflow-y-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-center" />
          <Loading />
          <Navbar />
          <SideBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
