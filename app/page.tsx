import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoShowcase from "@/components/VideoShowcase";
import DesignGallery from "@/components/DesignGallery";
import BrandLogoCloud from "@/components/BrandLogoCloud";
import SkillsToolkit from "@/components/SkillsToolkit";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-rhode-bg text-rhode-dark selection:bg-rhode-dark selection:text-white">
      <Navbar />
      <Hero />
      <VideoShowcase />
      <DesignGallery />
      <BrandLogoCloud />
      <SkillsToolkit />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
