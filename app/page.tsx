import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { EcosystemOverview } from "@/components/sections/ecosystem-overview";
import { FounderSection } from "@/components/sections/founder";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EcosystemOverview />
        <FounderSection />
      </main>
    </>
  );
}
