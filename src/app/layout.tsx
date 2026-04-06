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
  title: "위승주 | AI-Native Planner & Product Owner",
  description:
    "기획부터 바이브 코딩까지, AI로 프로덕트를 만드는 기획자",
  openGraph: {
    title: "위승주 | AI-Native Planner & Product Owner",
    description:
      "기획부터 바이브 코딩까지, AI로 프로덕트를 만드는 기획자",
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
