'use client';

import { motion } from 'framer-motion';

import { skillsData } from '@/lib/data';

export const Skills = () => {
  return (
    <div className="w-full overflow-hidden py-10">
      <motion.div
        className="flex gap-10"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          ease: 'linear',
          repeat: Infinity,
          duration: 18,
        }}
      >
        {/* FIRST LOOP */}
        {skillsData.map(({ icon }, index) => (
          <div key={index} className="flex items-center justify-center">
            {icon}
          </div>
        ))}

        {/* SECOND LOOP FOR SMOOTH INFINITE SCROLL */}
        {skillsData.map(({ icon }, index) => (
          <div
            key={`clone-${index}`}
            className="flex items-center justify-center"
          >
            {icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
