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

const DESCRIPTION =
  "위승주(Seungju Wi) 포트폴리오. 미식 매거진 고메블(Gourmevel) 대표, 멋쟁이사자처럼 Problem Solver(PM). AI를 활용해 문제 정의부터 기획, 개발, 출시까지 직접 하는 PM. 채용 플랫폼 Salary FYI, Planfit, 와인 큐레이팅 앱 드링키지(Drinkig), 미식 매거진 고메블(Gourmevel).";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.gourmevel.com"),
  title: {
    default: "위승주 | Problem Solver (PM)",
    template: "%s | 위승주",
  },
  description: DESCRIPTION,
  keywords: [
    "위승주",
    "Seungju Wi",
    "포트폴리오",
    "PM",
    "Product Manager",
    "Problem Solver",
    "AI PM",
    "멋쟁이사자처럼",
    "LIKELION",
    "Salary FYI",
    "Planfit",
    "드링키지",
    "Drinkig",
    "고메블",
    "Gourmevel",
    "고메블 대표",
  ],
  authors: [{ name: "위승주", url: "https://portfolio.gourmevel.com" }],
  creator: "위승주",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "위승주 포트폴리오",
    url: "https://portfolio.gourmevel.com",
    title: "위승주 | Problem Solver (PM)",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "위승주 | Problem Solver (PM)",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    other: {
      "naver-site-verification": "6b8062e0d30ce7c72052f17c0e3f35a37cb253dd",
    },
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
