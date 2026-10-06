import type { Metadata } from "next";

// 인쇄용 문서라 검색 결과에서 제외한다.
export const metadata: Metadata = {
  title: "포트폴리오 PDF",
  robots: { index: false, follow: false },
};

export default function PortfolioPdfLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
