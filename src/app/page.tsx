'use client';
import { useTheme } from 'next-themes';
import About from '@/components/about';
import CertificatesPage from '@/components/certificates';
import Contact from '@/components/contact';
import { EducationSection } from '@/components/education';
import Experience from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Intro from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { ThemeToggle } from '@/components/theme-toggle';
const HomePage = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="container flex flex-col items-center">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <Experience />
        <Projects />
        <EducationSection />
        <CertificatesPage theme={theme as 'dark' | 'light' | undefined} />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default HomePage;
