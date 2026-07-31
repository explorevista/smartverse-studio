import Link from "next/link";
import { Container } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Typography as="p" variant="overline">
            404
          </Typography>
          <Typography as="h1" variant="display-md" className="mt-4">
            The page you are looking for could not be found.
          </Typography>
          <Typography as="p" variant="body-md" muted className="mt-4">
            This route is missing from the current SmartVerse Studio experience. Return to the homepage to continue exploring the ecosystem.
          </Typography>
          <Button asChild variant="gradient" size="lg" className="mt-8">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
