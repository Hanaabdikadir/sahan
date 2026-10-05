import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/visit", label: "Visit" },
  { href: "/visit#reserve", label: "Reserve" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#e4d8c8]/80 bg-[#f6f1e8]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
          Sahan
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#9a4e24]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#e4d8c8] px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-[#5c5348] sm:flex-row sm:justify-between">
        <p className="font-[family-name:var(--font-display)] text-xl text-[#1c1915]">Sahan</p>
        <p>Lido Road, Mogadishu · Open daily 12:00–23:00</p>
      </div>
    </footer>
  );
}
