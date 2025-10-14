'use client';

import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { EducationSection } from '@/components/education';
import { Experience } from '@/components/experience';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { Testimonials } from '@/components/testimonials';
import { ThemeToggle } from '@/components/theme-toggle';
import CertificatesPage from '@/components/certificates';
import { useTheme } from 'next-themes';

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
        {/* <Testimonials /> */}
        <EducationSection />
        {/* ✅ Theme prop pass करें */}
        <CertificatesPage theme={theme as 'dark' | 'light' | undefined} />
        {/* <FAQ /> */}
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default HomePage;