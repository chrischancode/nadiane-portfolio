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
    <>
      <Navbar />
      <main id="main" className="flex min-h-[100svh] flex-col">
        <Hero />
        <BrandLogoCloud />
        <VideoShowcase />
        <DesignGallery />
        <SkillsToolkit />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
