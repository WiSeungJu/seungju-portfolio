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
          {lang === "ko" ? "위승주" : "Seungju Wi"}
        </Link>
      )}
      <nav
        aria-label={lang === "ko" ? "주요 메뉴" : "Main menu"}
        className="ml-auto flex items-baseline gap-5 text-sm text-muted"
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
        <span
          aria-label={lang === "ko" ? "언어 선택" : "Language"}
          className="ml-1 flex items-baseline gap-1.5 border-l border-rule pl-4 text-[13px]"
        >
          {(["ko", "en"] as const).map((code) => (
            <Link
              key={code}
              href={code === "ko" ? path : localize("en", path)}
              hrefLang={code}
              aria-current={code === lang ? "page" : undefined}
              className={
                code === lang
                  ? "font-semibold text-ink"
                  : "hover:text-ink transition-colors"
              }
            >
              {code.toUpperCase()}
            </Link>
          ))}
        </span>
      </nav>
    </header>
  );
}
