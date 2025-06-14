
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProfessionalExperienceSection from "@/components/ProfessionalExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CoursesSection from "@/components/CoursesSection";
// Removido: import SiteBadge from "@/components/SiteBadge";

const Index = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Removido: <SiteBadge /> */}
      <main className="flex-grow">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ProfessionalExperienceSection />
        <CoursesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
