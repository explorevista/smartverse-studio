import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { EcosystemOverview } from "@/components/sections/ecosystem-overview";
import { Features } from "@/components/sections/features";
import { Statistics } from "@/components/sections/statistics";
import { FounderSection } from "@/components/sections/founder";
import { Timeline } from "@/components/sections/timeline";
import { Mission } from "@/components/sections/mission";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Footer } from "@/components/navigation/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <EcosystemOverview />
        <Features />
        <FounderSection />
        <Timeline />
        <Mission />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
