import { Container } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Typography as="p" variant="overline">
            Loading experience
          </Typography>
          <Typography as="h1" variant="display-md" className="mt-4">
            Preparing the SmartVerse Studio experience…
          </Typography>
        </div>
      </Container>
    </main>
  );
}
