"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import BrandLogo from "./BrandLogo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/business", label: "Business" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  const closeMenu = () => setOpen(false);

  return (
    <header
      key={pathname}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "bg-[#070B1A]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <BrandLogo href="/" width={148} height={48} imageClassName="h-12 w-auto object-contain" />

        <ul className="desktop-only items-center gap-7">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-[15px] font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-gradient"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="desktop-only">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1FA7A1] to-[#0F6F73] px-5 py-2.5 text-sm font-semibold text-white btn-glow hover:brightness-110 transition"
          >
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      <button
        aria-label="Toggle menu"
        aria-expanded={open}
        className="mobile-only-inline fixed right-4 top-4 md:top-6 z-[80] items-center justify-center rounded-md border border-white/20 bg-[#0B1224]/85 p-2 text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur md:hidden"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="fixed left-0 right-0 top-16 z-[60] border-t border-white/10 bg-[#070B1A]/95 backdrop-blur-md overflow-y-auto max-h-[calc(100vh-64px)]">
          <ul className="px-4 sm:px-6 py-4 space-y-1 w-full">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`block rounded-lg px-3 py-3 text-[15px] font-medium transition ${
                    isActive(item.href)
                      ? "bg-white/5 text-gradient"
                      : "text-white/85 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1FA7A1] to-[#0F6F73] px-5 py-3 text-sm font-semibold text-white"
              >
                Get Started <ArrowRight size={16} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
