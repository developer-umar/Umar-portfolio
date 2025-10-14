'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from './button';
import { Icons } from './icons';

import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
};

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

export const Project = ({ project, index }: TProps) => {
  const { image, title, description, technologies, links } = project;
  const [showMore, setShowMore] = useState(false);
  const isLong = description.length > 220;
  const shortDesc = isLong ? description.slice(0, 220) + '...' : description;

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="flex flex-col rounded-lg border p-5 transition hover:shadow-md"
    >
      {image.startsWith('http') ? (
        <img
          src={image}
          alt={title}
          className="h-[390px] w-full rounded-lg object-cover transition-transform hover:scale-105"
        />
      ) : (
        <Image
          src={image}
          alt={title}
          height={390}
          width={600}
          className="rounded-lg transition-transform hover:scale-105"
        />
      )}

      <h3 className="mt-3 text-xl font-semibold">{title}</h3>

      <p className="text-muted-foreground mb-2 mt-1 text-sm leading-relaxed sm:text-base">
        {showMore ? description : shortDesc}
      </p>

      {isLong && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="mb-3 self-start text-sm font-medium text-blue-500 hover:text-blue-700"
        >
          {showMore ? 'See Less ▲' : 'See More ▼'}
        </button>
      )}

      <div className="mb-3 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border px-3 py-1 text-xs sm:text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <Link
        href={links.preview}
        aria-label={title}
        target="_blank"
        className="mt-auto w-fit"
      >
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Icons.preview className="size-4" />
          Preview
        </Button>
      </Link>
    </motion.div>
  );
};
