'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

export default function Intro() {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'tween', duration: 0.2 }}
        className="mb-8"
      >
        <Image
          src="/images/fav1_4.jpeg"
          alt="Mohammad Umar"
          width={144} // 36*4px
          height={144}
          className="rounded-full object-cover grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'tween', duration: 0.2 }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-3 rounded border px-3 py-1"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          <span className="font-mono text-sm">Available for work!</span>
        </Link>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
      >
        Hi I'm{' '}
        <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
          Mohammad Umar
        </span>{' '}
        - MERN Stack Developer.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground max-w-xl"
      >
        I am a Proficient MERN Stack Developer focused on high-performance solutions. I architect scalable backends (Node.js/Express/MongoDB), ensuring secure JWT authentication and robust API integration. Concurrently, I craft fast, SEO-friendly UIs using Next.js, React.js, and Tailwind CSS, delivering complete, clean-coded systems with a commitment to full-stack excellence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-row gap-2"
      >
        <Button asChild size="lg">
          <Link href="#contact">
            Get in touch <Icons.arrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="hidden sm:flex" asChild>
          <a
            href="/cv/Umar_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV <Icons.download className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://www.linkedin.com/in/umar15dev"
            aria-label="Linkedin"
            target="_blank"
          >
            <Icons.linkedin className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://www.github.com/developer-umar"
            aria-label="Github"
            target="_blank"
          >
            <Icons.github className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://www.instagram.com/_umar_md_1"
            aria-label="Instagram"
            target="_blank"
          >
            <Icons.instagram className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://x.com/mdumar9140"
            aria-label="Twitter"
            target="_blank"
          >
            <Icons.twitter className="h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
