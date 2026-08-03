"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container, Section } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-xl py-24 text-center">
          <Typography as="h1" variant="display-md">
            Something Went Wrong
          </Typography>
          <Typography as="p" variant="body-md" muted className="mt-4">
            An unexpected error occurred. You can try again, or return to the homepage.
          </Typography>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="gradient" size="lg" onClick={() => reset()}>
              Try Again
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
