import Link from "next/link";
import { localize, type Lang } from "@/i18n";

const navItems = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "#contact", desktopOnly: true },
];

// 홈은 바로 아래에 이름이 크게 나오므로 헤더에서는 이름을 뺀다.
// path는 한국어 기준 경로로, 언어 토글이 같은 페이지의 다른 언어로 가게 한다.
export default function SiteHeader({
  home,
  lang,
  path,
}: {
  home?: boolean;
  lang: Lang;
  path: string;
}) {
  return (
    <header className="flex items-baseline justify-between border-b border-rule py-5">
      {!home && (
        <Link
          href={localize(lang, "/")}
          className="text-lg font-bold tracking-tight"
        >
          {lang === "ko" ? "위승주" : "Seungju WI"}
        </Link>
      )}
      <nav
        aria-label={lang === "ko" ? "주요 메뉴" : "Main menu"}
        className="ml-auto flex items-center gap-5 text-sm text-muted"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={localize(lang, item.href)}
            className={`hover:text-ink transition-colors ${
              item.desktopOnly ? "hidden sm:inline" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
        {/* 한/영 토글: 현재 언어가 채워진 칸 */}
        <span
          role="group"
          aria-label={lang === "ko" ? "언어 선택" : "Language"}
          className="ml-1 inline-flex overflow-hidden rounded-full border border-rule text-[11px] leading-none"
        >
          {(["ko", "en"] as const).map((code) => (
            <Link
              key={code}
              href={code === "ko" ? path : localize("en", path)}
              hrefLang={code}
              aria-current={code === lang ? "page" : undefined}
              className={`px-2.5 py-1.5 transition-colors ${
                code === lang
                  ? "bg-ink font-semibold text-paper"
                  : "text-muted hover:text-ink"
              }`}
            >
              {code === "ko" ? "한국어" : "English"}
            </Link>
          ))}
        </span>
      </nav>
    </header>
  );
}
