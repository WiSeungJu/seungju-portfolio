import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

// 이력서·PDF 문서 전용
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.gourmevel.com"),
  title: "위승주 | Problem Solver (PM)",
  description:
    "AI를 활용해 문제 정의부터 기획, 개발, 출시까지 엔드투엔드로 담당하는 PM",
  openGraph: {
    title: "위승주 | Problem Solver (PM)",
    description:
      "AI를 활용해 문제 정의부터 기획, 개발, 출시까지 엔드투엔드로 담당하는 PM",
    url: "https://portfolio.gourmevel.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-paper text-ink">{children}</body>
    </html>
  );
}
