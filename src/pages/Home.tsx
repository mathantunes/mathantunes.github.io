import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsShowcase from "../components/sections/ProjectsShowcase";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsShowcase />
    </div>
  );
}