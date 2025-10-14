'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {/* Section Title */}
      <SectionHeading heading="About Me" />

      {/* About Description */}
      <div className="-mt-5 max-w-3xl text-center leading-7">
        <p className="mb-4">
          I am <strong>Mohammad Umar</strong>, a Full-Stack MERN Architect
          specializing in performance and scalability. I build robust backends
          using <strong>Node.js, Express, and MongoDB</strong> with a focus on
          security and API integration, while delivering blazing-fast,
          accessible UIs using <strong>Next.js, React</strong>, and{' '}
          <strong>Tailwind CSS</strong> — ensuring end-to-end, clean-coded
          solutions with superior user experience.
        </p>

        <p className="mb-4">
          I have extensive experience building scalable web servers with
          Node.js, focusing on robust security. I utilize{' '}
          <strong>JWT cookies</strong> for strong authentication and leverage
          advanced <strong>MongoDB Aggregation Pipelines</strong> to write
          clean, efficient, and high-performance backend code.
        </p>

        <p className="mb-4">
          I possess a strong knowledge of{' '}
          <strong>Data Structures and Algorithms</strong>, which enhances my
          problem-solving skills and ensures efficient data handling and optimal
          performance on the server side.
        </p>

        <p className="mb-4">
          Outside of development, I actively analyze{' '}
          <strong>cryptocurrency markets</strong> and occasionally trade, which
          sharpens my risk-taking capabilities and deepens my understanding of
          digital finance and blockchain technology. I also continuously explore
          and learn about emerging technologies.
        </p>
      </div>

      {/* Skills Section */}
      <Skills />
    </motion.section>
  );
}
