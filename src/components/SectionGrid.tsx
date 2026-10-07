import type { ReactNode } from "react";
import Reveal from "./Reveal";

// 왼쪽에 섹션 제목이 고정되고, 오른쪽으로 내용이 흐르는 2단
export default function SectionGrid({
  id,
  title,
  flush,
  children,
}: {
  id?: string;
  title: string;
  // 바로 위 블록이 이미 구분선을 그렸을 때
  flush?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`grid scroll-mt-8 gap-x-12 gap-y-6 pt-5 lg:grid-cols-[220px_1fr] ${
        flush ? "" : "mt-14 border-t border-ink sm:mt-16"
      }`}
    >
      <h2 className="text-[22px] font-bold tracking-tight lg:sticky lg:top-8 lg:self-start">
        <Reveal>{title}</Reveal>
      </h2>
      <div className="min-w-0">
        <Reveal delay={80}>{children}</Reveal>
      </div>
    </section>
  );
}
