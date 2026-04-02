import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "위승주 | AI Solver & Product Owner",
  description:
    "기획부터 바이브 코딩까지, AI로 프로덕트 메이킹 속도를 극대화하는 실전형 PM",
  openGraph: {
    title: "위승주 | AI Solver & Product Owner",
    description:
      "기획부터 바이브 코딩까지, AI로 프로덕트 메이킹 속도를 극대화하는 실전형 PM",
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
      <body className="bg-[#0a0a0a] text-[#ededed]">{children}</body>
    </html>
  );
}
