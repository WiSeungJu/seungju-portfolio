import type { Metadata } from "next";

// 이력서에는 전화번호가 있어 검색 결과에 노출하지 않는다.
export const metadata: Metadata = {
  title: "이력서",
  robots: { index: false, follow: false },
};

export default function ResumeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
