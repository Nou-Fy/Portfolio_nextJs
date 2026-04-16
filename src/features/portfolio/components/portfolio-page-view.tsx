import { PortfolioFooter } from "@/features/portfolio/components/portfolio-footer";
import { PortfolioHeader } from "@/features/portfolio/components/portfolio-header";
import { AboutSection } from "@/features/portfolio/sections/about-section";
import { ContactSection } from "@/features/portfolio/sections/contact-section";
import { EducationSection } from "@/features/portfolio/sections/education-section";
import { ExperienceSection } from "@/features/portfolio/sections/experience-section";
import { HeroSection } from "@/features/portfolio/sections/hero-section";
import { SkillsSection } from "@/features/portfolio/sections/skills-section";

export function PortfolioPageView() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortfolioHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </div>
  );
}
