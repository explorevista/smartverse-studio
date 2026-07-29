import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { EcosystemOverview } from "@/components/sections/ecosystem-overview";
import { FounderSection } from "@/components/sections/founder";
import { Timeline } from "@/components/sections/timeline";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Features } from "@/components/sections/features";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EcosystemOverview />
        <FounderSection />
        <Timeline />
        <Features />
        <CtaBanner />
      </main>
    </>
  );
}
