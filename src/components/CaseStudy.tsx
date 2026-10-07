import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import SectionGrid from "./SectionGrid";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { localize, type Lang } from "@/i18n";

type NavLink = { label: string; href: string };
type Figure = { src: string; alt: string; width: number; height: number };

export function CasePage({
  lang,
  path,
  back,
  title,
  subtitle,
  summary,
  meta,
  links,
  hero,
  prev,
  next,
  children,
}: {
  lang: Lang;
  // 한국어 기준 경로. 언어 토글과 hreflang에 쓴다.
  path: string;
  back: NavLink;
  title: string;
  subtitle?: string;
  summary: string;
  meta?: string[];
  links?: NavLink[];
  hero?: Figure;
  prev: NavLink;
  next: NavLink;
  children: ReactNode;
}) {
  return (
    <div lang={lang} className="page-enter mx-auto max-w-[1080px] px-5 sm:px-8">
      <SiteHeader lang={lang} path={path} />
      <main>
        <header className="pt-12 sm:pt-20">
          <p className="text-[13px] text-muted">
            <Link
              href={localize(lang, back.href)}
              className="hover:text-ink transition-colors"
            >
              ← {back.label}
            </Link>
          </p>
          <h1 className="hero-in mt-6 text-[48px] font-bold leading-[1.05] tracking-tight sm:text-[84px]">
            {title}
            {subtitle && (
              <span className="ml-4 text-lg font-normal tracking-normal text-muted sm:text-2xl">
                {subtitle}
              </span>
            )}
          </h1>

          <div
            className="hero-in mt-8 grid gap-x-12 gap-y-5 sm:mt-10 lg:grid-cols-[220px_1fr]"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            <div className="text-[13px] leading-[1.7] text-muted">
              {meta?.map((line) => (
                <p key={line}>{line}</p>
              ))}
              {links && (
                <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </p>
              )}
            </div>
            <p className="order-first max-w-[24em] text-xl font-medium leading-snug tracking-tight sm:text-[26px] lg:order-none">
              {summary}
            </p>
          </div>

          {hero && (
            <div className="hero-in" style={{ "--i": 2 } as React.CSSProperties}>
              <Plate {...hero} eager className="mt-12" />
            </div>
          )}
        </header>

        {children}

        <nav
          aria-label={lang === "ko" ? "다른 글" : "More"}
          className="mt-20 flex justify-between gap-6 border-t border-rule pt-5 text-sm"
        >
          <Link href={localize(lang, prev.href)} className="link">
            ← {prev.label}
          </Link>
          <Link href={localize(lang, next.href)} className="link text-right">
            {next.label} →
          </Link>
        </nav>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <SectionGrid id={id} title={title}>
      {children}
    </SectionGrid>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4 text-[15.5px] leading-[1.85] text-copy">
      {children}
    </div>
  );
}

// 본문 안의 강조
export function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

export function Facts({
  items,
}: {
  items: { label: string; value: ReactNode }[];
}) {
  return (
    <dl className="mt-8 grid gap-x-8 gap-y-5 border-y border-rule py-5 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-xs text-muted">{item.label}</dt>
          <dd className="mt-1 text-sm leading-relaxed">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Figures({
  items,
}: {
  items: { value: string; label: string; note?: string }[];
}) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 border-t border-rule sm:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col-reverse justify-end border-b border-rule py-5"
        >
          <dt className="mt-2 text-[13px] leading-snug text-muted">
            {item.label}
            {item.note && <span className="block text-ink">{item.note}</span>}
          </dt>
          <dd className="text-[32px] font-bold leading-none tabular-nums">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

// 큰 섹션 안의 한 프로젝트: 한 줄 요약과 핵심 결과를 먼저 보여준다
export function Story({
  id,
  kicker,
  title,
  lede,
  result,
  ledger,
  children,
}: {
  id?: string;
  kicker: string;
  title: ReactNode;
  lede: ReactNode;
  result?: { value: string; label: string; note?: string };
  ledger?: { label: string; value: string }[];
  children?: ReactNode;
}) {
  return (
    <article
      id={id}
      className="mt-14 scroll-mt-8 border-t border-rule pt-10 first:mt-0 first:border-t-0 first:pt-0"
    >
      <p className="text-xs font-medium tracking-wide text-point">{kicker}</p>
      <div className="mt-3 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-10">
        <h3 className="text-[28px] font-bold leading-[1.3] tracking-tight sm:text-[34px]">
          {title}
        </h3>
        {result && (
          <div className="sm:text-right">
            <p
              className={`font-bold leading-none tabular-nums text-point ${
                result.value.length > 4 ? "text-[38px]" : "text-[56px]"
              }`}
            >
              {result.value}
            </p>
            <p className="mt-2 text-xs text-muted">{result.label}</p>
            {result.note && <p className="text-[13px]">{result.note}</p>}
          </div>
        )}
      </div>
      <p className="mt-5 text-[15.5px] leading-[1.85] text-copy">{lede}</p>
      {ledger && (
        <dl className="mt-6 border-t border-rule text-sm">
          {ledger.map((row) => (
            <div
              key={row.label}
              className="flex items-baseline justify-between gap-6 border-b border-rule py-2.5"
            >
              <dt className="text-muted">{row.label}</dt>
              <dd className="text-right font-medium">{row.value}</dd>
            </div>
          ))}
        </dl>
      )}
      {children}
    </article>
  );
}

export function Phase({
  num,
  label,
  title,
  children,
}: {
  num: string;
  label: string;
  title?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="mt-12">
      <p className="flex items-center gap-3 text-xs text-muted">
        <span className="text-sm text-point">{num}</span>
        <span className="tracking-wide">{label}</span>
        <span aria-hidden="true" className="h-px flex-1 bg-rule" />
      </p>
      {title && (
        <h4 className="mt-4 text-[21px] font-bold leading-snug">
          {title}
        </h4>
      )}
      <div className="mt-5">{children}</div>
    </section>
  );
}

// 관찰 → 진단 → 가설처럼 이어지는 세 단계
export function Reasoning({
  steps,
}: {
  steps: { label: string; title: ReactNode; body: ReactNode }[];
}) {
  return (
    <ol className="grid gap-6 sm:grid-cols-3 sm:gap-5">
      {steps.map((step, i) => (
        <li key={step.label} className="border-t border-ink pt-3">
          <p className="text-xs font-medium text-point">
            {i + 1}. {step.label}
          </p>
          <p className="mt-2 text-[15px] font-semibold leading-snug">
            {step.title}
          </p>
          <p className="mt-2 text-sm leading-[1.75] text-copy">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="mt-8 border-l-2 border-point pl-5 text-[17px] font-medium leading-[1.75]">
      {children}
    </blockquote>
  );
}

type CompareSide = { label: string; title: string; items: string[] };

export function Compare({
  before,
  after,
}: {
  before: CompareSide;
  after: CompareSide;
}) {
  return (
    <div className="grid border border-rule sm:grid-cols-2">
      {[before, after].map((side, i) => (
        <div
          key={side.label}
          className={`p-5 ${
            i === 1 ? "border-t border-rule sm:border-t-0 sm:border-l" : ""
          }`}
        >
          <p
            className={`text-xs font-medium tracking-wide ${
              i === 1 ? "text-point" : "text-muted"
            }`}
          >
            {side.label}
          </p>
          <p className="mt-2 font-semibold leading-snug">{side.title}</p>
          <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-copy">
            {side.items.map((item) => (
              <li key={item} className="grid grid-cols-[0.9rem_1fr]">
                <span aria-hidden="true" className="text-muted">
                  –
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function Steps({
  items,
}: {
  items: {
    n: string;
    tag?: string;
    title: string;
    body: ReactNode;
    tools?: string[];
  }[];
}) {
  return (
    <ol className="border-t border-rule">
      {items.map((item) => (
        <li
          key={item.n}
          className="grid grid-cols-[2.25rem_1fr] border-b border-rule py-5"
        >
          <span className="text-lg leading-snug tabular-nums text-point">
            {item.n}
          </span>
          <div>
            {item.tag && (
              <p className="mb-1 text-[11px] tracking-wider text-muted">
                {item.tag}
              </p>
            )}
            <p className="font-semibold leading-snug">{item.title}</p>
            <p className="mt-1.5 text-sm leading-[1.75] text-copy">
              {item.body}
            </p>
            {item.tools && (
              <p className="mt-2 text-[13px] text-muted">
                {item.tools.join(" · ")}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

// 제목 – 설명이 반복되는 목록
export function Rows({
  items,
}: {
  items: { title: string; sub?: string; body: ReactNode }[];
}) {
  return (
    <dl className="border-t border-rule">
      {items.map((item) => (
        <div
          key={item.title}
          className="grid gap-x-8 gap-y-1.5 border-b border-rule py-5 sm:grid-cols-[11rem_1fr]"
        >
          <dt className="font-semibold leading-snug">
            {item.title}
            {item.sub && (
              <span className="mt-1 block text-[13px] font-normal text-muted">
                {item.sub}
              </span>
            )}
          </dt>
          <dd className="text-sm leading-[1.8] text-copy">{item.body}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Note({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-8 bg-wash px-5 py-4">
      <p className="text-xs font-medium tracking-wide text-point">{label}</p>
      <div className="mt-1.5 text-[15px] leading-[1.8] text-copy">
        {children}
      </div>
    </div>
  );
}

export function Plate({
  src,
  alt,
  width,
  height,
  caption,
  eager,
  className,
}: Figure & { caption?: string; eager?: boolean; className?: string }) {
  return (
    <figure className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        sizes="(max-width: 1080px) 100vw, 1016px"
        className="h-auto w-full border border-rule"
      />
      {caption && (
        <figcaption className="mt-2 text-xs text-muted">{caption}</figcaption>
      )}
    </figure>
  );
}
