import Link from "next/link";
import { Container, Section } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-xl py-24 text-center">
          <Typography as="span" variant="overline">
            404
          </Typography>
          <Typography as="h1" variant="display-md" className="mt-4">
            Page Not Found
          </Typography>
          <Typography as="p" variant="body-md" muted className="mt-4">
            The page you're looking for doesn't exist or has been moved.
          </Typography>
          <div className="mt-8">
            <Button asChild variant="gradient" size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
