import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import CursorDot from "@/components/CursorDot";
import CurtainIntro from "@/components/CurtainIntro";
import ScrollProgress from "@/components/ScrollProgress";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sebgo Paul Elvis — OV Studio",
  description:
    "Real Maker Mobile & Brand Thinker. Je transforme les idées, les histoires et les identités en images qui font ressentir quelque chose.",
  icons: {
    icon: "/images/logo2.jpeg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <div className="noise-layer" aria-hidden />
        <CurtainIntro />
        <ScrollProgress />
        <CursorDot />
        {children}
      </body>
    </html>
  );
}
