import Footer from "@/components/dashboard/footer";
import { HeroSection } from "@/components/dashboard/hero-section";
import LogoAndAnimation from "@/components/dashboard/logoandanimation";
import Projects from "@/components/dashboard/projects";
import LetsWork from "@/components/dashboard/letswork";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="w-full bg-gray-950">
        <div className="max-w-7xl mx-auto py-20">
          <Projects />
          <LogoAndAnimation />
          <LetsWork />
        </div>
      </div>
      <Footer />
    </>
  );
}
