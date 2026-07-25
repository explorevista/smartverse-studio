"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { headquarters, ecosystemProjects } from "@/data/ecosystem";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Projects", href: "/projects" },
  { label: "Founder", href: "/founder" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav
          className="flex items-center justify-between h-20"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="text-h4 font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            {headquarters.name}
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-label text-foreground/80 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button asChild variant="gradient" size="sm">
              <Link href="/ecosystem">Explore Ecosystem</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-white/10">
          <Container>
            <ul className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-body-md text-foreground/90 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild variant="gradient" size="md" className="w-full">
                  <Link href="/ecosystem" onClick={() => setIsOpen(false)}>
                    Explore Ecosystem
                  </Link>
                </Button>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
