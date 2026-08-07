"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { mainNavigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">
            {siteConfig.shortName}
          </span>
          <span className="hidden text-sm text-muted-foreground sm:inline-block">
            Smart Medical Tourism
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {mainNavigation.slice(0, 6).map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary py-2"
              >
                {item.label}
                {item.children && <ChevronDown className="ml-1 h-3.5 w-3.5" />}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 hidden group-hover:block pt-2">
                  <div className="w-56 rounded-lg border bg-white p-2 shadow-md">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-slate-50 hover:text-primary"
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

        <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className={cn(buttonVariants(), "hidden sm:inline-flex")}
          >
            Get Free Consultation
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white md:hidden">
          <nav className="container flex flex-col space-y-4 py-6 h-[calc(100vh-4rem)] overflow-y-auto">
            {mainNavigation.map((item) => (
              <div key={item.href} className="border-b pb-3">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-semibold text-foreground hover:text-primary mb-2"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 flex flex-col space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-muted-foreground hover:text-primary py-1"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={cn(buttonVariants(), "w-full text-center")}
              >
                Get Free Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
