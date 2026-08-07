"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { mainNavigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div className="container">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-lg font-bold text-primary">
              {siteConfig.shortName}
            </span>
            <span className="hidden text-sm font-medium text-muted-foreground lg:inline-block">
              Smart Medical Tourism
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {mainNavigation.slice(0, 6).map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md",
                    isActiveLink(item.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-slate-50"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                  {/* Active indicator line */}
                  {isActiveLink(item.href) && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="w-56 rounded-xl border border-gray-100 bg-white p-1.5 shadow-lg shadow-gray-100/50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                            isActiveLink(child.href)
                              ? "bg-primary/5 text-primary"
                              : "text-muted-foreground hover:bg-slate-50 hover:text-foreground"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground hover:bg-slate-50 hover:text-foreground transition-colors md:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-14 z-40 bg-white border-t md:hidden transition-all duration-300 ease-in-out",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
        style={{ maxHeight: isOpen ? "calc(100vh - 3.5rem)" : 0 }}
      >
        <nav className="container py-4 overflow-y-auto max-h-[calc(100vh-3.5rem)]">
          <div className="space-y-1">
            {mainNavigation.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3 py-3 rounded-lg text-base font-semibold transition-colors",
                    isActiveLink(item.href)
                      ? "bg-primary/5 text-primary"
                      : "text-foreground hover:bg-slate-50"
                  )}
                >
                  {item.label}
                  {isActiveLink(item.href) && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                </Link>

                {item.children && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-100 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                          isActiveLink(child.href)
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-slate-50"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-14 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
