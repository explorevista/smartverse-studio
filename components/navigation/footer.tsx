import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";
import { headquarters, founder, ecosystemProjects, socialLinks } from "@/data/ecosystem";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--border-color)] bg-background/50 py-16 sm:py-20">
      <Container>
        <div className="rounded-[32px] border border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/70 p-8 shadow-[0_20px_60px_rgba(2,6,23,0.08)] backdrop-blur-xl sm:p-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Typography as="span" variant="h4">
                {headquarters.name}
              </Typography>
              <Typography as="p" variant="body-sm" muted className="mt-3 max-w-sm">
                {headquarters.tagline}
              </Typography>
            </div>

            <nav aria-label="Ecosystem navigation">
              <Typography as="span" variant="label" className="text-foreground/60">
                Ecosystem
              </Typography>
              <ul className="mt-4 space-y-2">
                {ecosystemProjects.slice(0, 5).map((project) => (
                  <li key={project.id}>
                    {project.officialUrl ? (
                      <Link
                        href={project.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body-sm text-foreground/70 transition-colors hover:text-primary"
                      >
                        {project.name}
                      </Link>
                    ) : (
                      <span className="text-body-sm text-foreground/40">{project.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Social links">
              <Typography as="span" variant="label" className="text-foreground/60">
                Connect
              </Typography>
              <ul className="mt-4 space-y-2">
                {socialLinks.slice(0, 5).map((social) => (
                  <li key={social.platform}>
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-sm text-foreground/70 transition-colors hover:text-primary"
                    >
                      {social.platform}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <Typography as="span" variant="label" className="text-foreground/60">
                Contact
              </Typography>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${founder.email}`}
                    className="flex items-center gap-2 text-body-sm text-foreground/70 transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {founder.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${founder.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-body-sm text-foreground/70 transition-colors hover:text-primary"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-[color:var(--border-color)] pt-8 text-center">
            <Typography as="p" variant="caption" muted>
              © {year} {headquarters.name}. Founded by {founder.name}. All rights reserved.
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
}
