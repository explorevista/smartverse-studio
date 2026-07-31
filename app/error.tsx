"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Typography as="p" variant="overline">
            Something went wrong
          </Typography>
          <Typography as="h1" variant="display-md" className="mt-4">
            We could not load this part of the experience.
          </Typography>
          <Typography as="p" variant="body-md" muted className="mt-4">
            Please try again. If the issue continues, return to the homepage and continue exploring the ecosystem.
          </Typography>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="gradient" size="lg">
              <Link href="/">Return home</Link>
            </Button>
            <Button variant="outline" size="lg" onClick={reset}>
              Try again
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
