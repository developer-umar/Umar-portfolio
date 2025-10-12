'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const educationData = [
  {
    id: 1,
    image: '/images/allehnhouse.jpg', // 🔁 replace with your actual image
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Allenhouse Business School, Kanpur',
    duration: '2023 – 2026',
    description:
      'I am pursuing my Bachelor of Computer Applications (BCA) from Allenhouse Business School with a CGPA of 8.67. My coursework includes subjects such as Data Structures and Algorithms (DSA), C, C++, Java, Operating Systems, and Principles of Management.',
  },
  {
    id: 2,
    image: '/images/school.jpg',
    degree: 'Intermediate (12th Grade)',
    institution: 'St. Joseph Senior Secondary School, Kanpur',
    duration: '2020 – 2022',
    description:
      ' I completed my Intermediate education from St. Joseph Senior Secondary School, Kanpur under the CBSE board, with a Commerce stream, securing 85% marks. My core subjects included English, Mathematics, Economics, Business Studies, and Accountancy.',
  }
  
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-4xl font-bold"
        >
          Education
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              className="flex flex-col rounded-lg border p-5 transition hover:shadow-md"
            >
              {/* Landscape image */}
              <div className="relative w-full h-[230px] rounded-lg overflow-hidden mb-4">
                <Image
                  src={edu.image}
                  alt={edu.degree}
                  fill
                  className="object-cover rounded-lg transition-transform hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm">{edu.institution}</p>
              <p className="text-muted-foreground text-xs mb-3">{edu.duration}</p>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
