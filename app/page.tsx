import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { EcosystemOverview } from "@/components/sections/ecosystem-overview";
import { Features } from "@/components/sections/features";
import { FounderSection } from "@/components/sections/founder";
import { Timeline } from "@/components/sections/timeline";
import { Mission } from "@/components/sections/mission";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Footer } from "@/components/navigation/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <EcosystemOverview />
        <Features />
        <Mission />
        <FounderSection />
        <Timeline />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
