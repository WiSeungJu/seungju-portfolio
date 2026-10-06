"use client";

import Link from "next/link";

const copy = {
  ko: { back: "← 포트폴리오", save: "PDF로 저장" },
  en: { back: "← Portfolio", save: "Save as PDF" },
};

const versions = [
  { lang: "ko", label: "한국어", href: "/resume" },
  { lang: "en", label: "English", href: "/resume/en" },
] as const;

// 이력서 상단 바: 돌아가기, 한/영 전환, 인쇄 (화면에서만 보임)
export default function ResumeBar({ lang }: { lang: "ko" | "en" }) {
  const t = copy[lang];
  return (
    <div className="print:hidden sticky top-0 z-50 bg-paper/90 backdrop-blur-xl border-b border-rule">
      <div className="max-w-[820px] mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm text-muted hover:text-ink transition-colors"
        >
          {t.back}
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex border border-rule text-xs">
            {versions.map((v) => (
              <Link
                key={v.lang}
                href={v.href}
                aria-current={v.lang === lang ? "page" : undefined}
                className={`px-3 py-1.5 transition-colors ${
                  v.lang === lang
                    ? "bg-ink font-semibold text-paper"
                    : "text-muted hover:text-ink"
                }`}
              >
                {v.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-ink hover:bg-copy text-paper text-xs font-semibold transition-colors inline-flex items-center gap-2"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            {t.save}
          </button>
        </div>
      </div>
    </div>
  );
}
