"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { headquarters } from "@/data/ecosystem";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#hero", sectionId: "hero" },
  { label: "Ecosystem", href: "#ecosystem", sectionId: "ecosystem" },
  { label: "Projects", href: "#roadmap", sectionId: "roadmap" },
  { label: "Founder", href: "#founder", sectionId: "founder" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("hero");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const sections = ["hero", "ecosystem", "features", "technology", "founder", "roadmap", "cta"];
    const sectionElements = sections
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-10% 0px -50% 0px" }
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/70 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <Container>
        <div className="mt-4 rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/80 px-3 py-3 shadow-[0_14px_40px_rgba(2,6,23,0.08)] backdrop-blur-xl">
          <nav className="flex items-center justify-between gap-4" aria-label="Main navigation">
            <Link
              href="/"
              className="rounded-full px-2 py-1 text-h4 font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring-color)]"
            >
              {headquarters.name}
            </Link>

            <ul className="hidden items-center gap-2 md:flex">
              {navLinks.map((link) => {
                const isActive = pathname === "/" ? activeSection === link.sectionId : pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "rounded-full px-3 py-2 text-label text-foreground/80 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring-color)]",
                        isActive && "bg-primary/10 text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden md:block">
              <Button asChild variant="gradient" size="sm">
                <Link href="#ecosystem">Explore Ecosystem</Link>
              </Button>
            </div>

            <button
              id="mobile-navigation-toggle"
              className="rounded-full p-2 text-foreground transition-colors hover:bg-[color:var(--surface-muted)] md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-controls="mobile-navigation"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>
        </div>
      </Container>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/95 backdrop-blur-xl md:hidden"
        >
          <Container>
            <ul className="flex flex-col gap-1 py-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-2xl px-3 py-3 text-body-md text-foreground/90 transition-colors hover:bg-[color:var(--surface-muted)] hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild variant="gradient" size="md" className="w-full">
                  <Link href="#ecosystem" onClick={() => setIsOpen(false)}>
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
