import type { Metadata } from "next";

export type Lang = "ko" | "en";

// 한국어는 루트, 영어는 /en 아래에 둔다.
export function localize(lang: Lang, href: string) {
  if (lang !== "en" || !href.startsWith("/")) return href;
  if (href.startsWith("/resume")) return "/resume/en";
  if (href === "/") return "/en";
  if (href.startsWith("/#")) return `/en${href.slice(1)}`;
  return `/en${href}`;
}

// 같은 페이지의 다른 언어 주소
export function counterpart(lang: Lang, path: string) {
  return lang === "ko" ? localize("en", path) : path;
}

export function pick<T>(lang: Lang, ko: T, en: T) {
  return lang === "ko" ? ko : en;
}

// canonical + hreflang. path는 한국어 기준 경로("/", "/projects/drinkig").
export function alternatesFor(lang: Lang, path: string): Metadata["alternates"] {
  const en = localize("en", path);
  return {
    canonical: lang === "ko" ? path : en,
    languages: { ko: path, en, "x-default": path },
  };
}
