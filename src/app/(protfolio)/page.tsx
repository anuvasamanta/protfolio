import AboutSection from "@/component/AboutSction";
import ContactSection from "@/component/ContactSection";
import HeroSection from "@/component/HeroSection";
import ProjectsSection from "@/component/ProjectSection";
import SkillsSection from "@/component/SkillSection";


export default function PortfolioPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection/>
    </>
  );
}