'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { projects, skills, experiences } from '@/data/portfolioData';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <Navigation />
      <HeroSection />
      <AboutSection skills={skills} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <Footer />
    </main>
  );
}
