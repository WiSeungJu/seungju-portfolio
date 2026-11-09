import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { localize, type Lang } from "@/i18n";

export type Entry = {
  name: string;
  // 이름 옆에 작게 붙는 구분 (고용 형태, 프로젝트 분류, 언론·수상 등)
  tag?: string;
  // 역할과 기간. 여러 줄이면 최근 것이 위
  roles: { title?: string; period: string }[];
  description?: string;
  // 내부 경로 또는 외부 주소. 없으면 링크 없이 표시
  href?: string;
  // 마우스를 올리면 행을 덮는 워드마크 로고(7:3 비율)와 그 배경색(#rrggbb). 마우스를 올렸을 때 행을 물들일 브랜드 색(#rrggbb)
  logo?: string;
  brand?: string;
};

function EntryLink({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) {
  const className = "block py-5";
  if (!href) return <div className={className}>{children}</div>;
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

// 홈의 목록 공통 형식: 이름 + 구분, 기간, 한 줄 설명
export default function EntryList({
  items,
  lang,
}: {
  items: Entry[];
  lang: Lang;
}) {
  return (
    <ul className="entry-list border-t border-rule">
      {items.map((item) => (
        <li
          key={item.name}
          className="border-b border-rule"
          style={
            item.brand
              ? ({ "--brand": item.brand } as React.CSSProperties)
              : undefined
          }
        >
          <EntryLink href={item.href && localize(lang, item.href)}>
            {item.logo && (
              // 마우스를 올리면 행 전체를 브랜드 색으로 덮고 로고만 보여준다
              <span aria-hidden="true" className="entry-cover">
                <Image
                  src={item.logo}
                  alt=""
                  width={336}
                  height={144}
                  sizes="140px"
                  className="h-14 w-auto"
                />
                <span className="text-2xl text-white">→</span>
              </span>
            )}
            <div>
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1.5">
                <h3 className="text-xl font-bold tracking-tight">
                  {item.name}
                  {item.tag && (
                    <span className="ml-2.5 inline-block text-xs font-normal tracking-normal text-muted">
                      {item.tag}
                    </span>
                  )}
                  {item.href && (
                    <span aria-hidden="true" className="entry-arrow ml-2 inline-block">
                      →
                    </span>
                  )}
                </h3>
                <ul className="space-y-0.5 pt-1 text-[13px] leading-snug sm:text-right">
                  {item.roles.map((role) => (
                    <li key={role.period}>
                      {role.title && (
                        <span className="text-muted">{role.title} </span>
                      )}
                      <span className="font-medium tabular-nums">
                        {role.period}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {item.description && (
                <p className="mt-1.5 text-[15px] leading-[1.7] text-copy">
                  {item.description}
                </p>
              )}
            </div>
          </EntryLink>
        </li>
      ))}
    </ul>
  );
}
