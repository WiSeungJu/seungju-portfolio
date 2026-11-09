"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import type { Lang } from "@/i18n";

// 프로젝트 상세를 접어 두는 토글. 주소의 #id가 이 카드를 가리키면 펼친 채로 연다.
export default function Collapsible({
  targetId,
  lang,
  children,
}: {
  targetId?: string;
  lang: Lang;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!targetId) return;
    const openFromHash = () => {
      if (window.location.hash.slice(1) === targetId) setOpen(true);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [targetId]);

  // 닫힌 패널 안의 링크·버튼에 포커스가 가지 않게 한다.
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (open) el.removeAttribute("inert");
    else el.setAttribute("inert", "");
  }, [open]);

  const label = open
    ? lang === "ko"
      ? "접기"
      : "Hide details"
    : lang === "ko"
      ? "자세히 보기"
      : "Show details";

  return (
    <div className="mt-8">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-medium transition-colors print:hidden ${
          open
            ? "border border-ink bg-paper text-ink hover:bg-wash"
            : "bg-ink text-paper hover:bg-copy"
        }`}
      >
        <span>{label}</span>
        <span
          aria-hidden="true"
          className={`relative h-3 w-3 shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
          <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current" />
        </span>
      </button>
      <div
        id={panelId}
        ref={panelRef}
        className={`collapsible-panel grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
