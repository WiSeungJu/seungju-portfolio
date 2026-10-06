import Link from "next/link";

const navItems = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "#contact", desktopOnly: true },
];

export default function SiteHeader() {
  return (
    <header className="flex items-baseline justify-between border-b border-rule py-5">
      <Link href="/" className="text-lg font-bold tracking-tight">
        위승주
      </Link>
      <nav aria-label="주요 메뉴" className="flex items-baseline gap-5 text-sm text-muted">
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
