import Link from "next/link";
import { localize, type Lang } from "@/i18n";

const links = [
  {
    label: "Email",
    text: "wsj@likelion.net",
    href: "mailto:wsj@likelion.net",
  },
  {
    label: "LinkedIn",
    text: "linkedin.com/in/wiseungju",
    href: "https://www.linkedin.com/in/wiseungju/",
  },
  {
    label: "GitHub",
    text: "github.com/SeungjuWI",
    href: "https://github.com/SeungjuWI",
  },
  {
    label: { ko: "GitHub · 개인", en: "GitHub · personal" },
    text: "github.com/WiSeungJu",
    href: "https://github.com/WiSeungJu",
  },
  {
    label: "Instagram",
    text: "@gourmevel",
    href: "https://www.instagram.com/gourmevel/",
  },
];

export default function SiteFooter({ lang }: { lang: Lang }) {
  return (
    <footer
      id="contact"
      className="mt-14 grid scroll-mt-8 gap-x-12 gap-y-6 border-t border-ink pt-5 pb-16 sm:mt-16 lg:grid-cols-[220px_1fr]"
    >
      <h2 className="text-[22px] font-bold tracking-tight">Contact</h2>

      <div>
        <dl className="grid gap-x-12 border-t border-rule text-sm sm:grid-cols-2">
          {links.map((link) => {
            const label =
              typeof link.label === "string" ? link.label : link.label[lang];
            return (
              <div
                key={link.href}
                className="grid grid-cols-[6.5rem_1fr] items-baseline border-b border-rule py-3"
              >
                <dt className="text-muted">{label}</dt>
                <dd>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {link.text}
                  </a>
                </dd>
              </div>
            );
          })}
          <div className="grid grid-cols-[6.5rem_1fr] items-baseline border-b border-rule py-3">
            <dt className="text-muted">Resume</dt>
            <dd>
              <Link href={localize(lang, "/resume")} className="link">
                {lang === "ko" ? "이력서 보기" : "View resume"}
              </Link>
            </dd>
          </div>
        </dl>

        <p className="mt-10 text-xs text-muted">
          &copy; {new Date().getFullYear()} Seungju Wi
        </p>
      </div>
    </footer>
  );
}
