import type { Metadata } from "next";
import { Nanum_Pen_Script } from "next/font/google";
import "./globals.css";

const nanumPenScript = Nanum_Pen_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webfont 예제",
  description: "beyond ZERO 기술 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={nanumPenScript.className}>{children}</body>
    </html>
  );
}
