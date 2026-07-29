import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";
import { headquarters, founder, ecosystemProjects, socialLinks } from "@/data/ecosystem";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background/50 py-16">
      <Container>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Typography as="span" variant="h4">
              {headquarters.name}
            </Typography>
            <Typography as="p" variant="body-sm" muted className="mt-3">
              {headquarters.tagline}
            </Typography>
          </div>

          <div>
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
                      className="text-body-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      {project.name}
                    </Link>
                  ) : (
                    <span className="text-body-sm text-foreground/40">
                      {project.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
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
                    className="text-body-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {social.platform}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Typography as="span" variant="label" className="text-foreground/60">
              Contact
            </Typography>
            <ul className="mt-4 space-y-3">
              <li>
                  <a
                  href={`mailto:${founder.email}`}
                  className="flex items-center gap-2 text-body-sm text-foreground/70 hover:text-primary transition-colors"
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
                  className="flex items-center gap-2 text-body-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <Typography as="p" variant="caption" muted>
            © {year} {headquarters.name}. Founded by {founder.name}. All rights reserved.
          </Typography>
        </div>
      </Container>
    </footer>
  );
}
