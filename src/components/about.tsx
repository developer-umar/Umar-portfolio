'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
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
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-3xl text-center leading-7">
        <p className="mb-4">
          I am Mohammad Umar, a Full-Stack MERN Architect specializing in performance and scale. I build robust backends (Node.js/Express/MongoDB, focused on security/API integration) and deliver blazing-fast, accessible UIs using Next.js, React, and Tailwind CSS, ensuring end-to-end, clean-coded solutions with superior user experience.
        </p>
        <p className="mb-4">
          I have great experience building scalable web servers using Node.js, specializing in robust security features. I utilize JWT cookies for strong authentication, and leverage advanced MongoDB Aggregation Pipelines to write clean, efficient, and high-performance backend code.
        </p>
        <p className="mb-4">
         I possess a strong knowledge of Data Structures and Algorithms, which significantly enhances my problem-solving skills and ensures efficient data handling and optimal performance on the server side.
        </p>
        <p className="mb-4">
         Outside of development, I actively analyze cryptocurrency investment markets and occasionally engage in trading, which sharpens my risk-taking capabilities and deepens my understanding of the future of digital finance and blockchain technology. I am also continuously exploring and learning about new technologies.
        </p>
       
      </div>
      <Skills />
    </motion.section>
  );
};
