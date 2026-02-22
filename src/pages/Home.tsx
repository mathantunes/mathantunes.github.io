import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsShowcase from "../components/sections/ProjectsShowcase";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (location.pathname === '/about') {
        const element = document.getElementById('about');
        element?.scrollIntoView({ behavior: 'smooth' });
      } else if (location.pathname === '/projects') {
        const element = document.getElementById('projects');
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsShowcase />
    </div>
  );
}