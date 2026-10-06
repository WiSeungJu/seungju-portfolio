import Link from "next/link";

const navItems = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "#contact", desktopOnly: true },
];

// 홈은 바로 아래에 이름이 크게 나오므로 헤더에서는 이름을 뺀다
export default function SiteHeader({ home }: { home?: boolean }) {
  return (
    <header className="flex items-baseline justify-between border-b border-rule py-5">
      {!home && (
        <Link href="/" className="text-lg font-bold tracking-tight">
          위승주
        </Link>
      )}
      <nav
        aria-label="주요 메뉴"
        className="ml-auto flex items-baseline gap-5 text-sm text-muted"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`hover:text-ink transition-colors ${
              item.desktopOnly ? "hidden sm:inline" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
