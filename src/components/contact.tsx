'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch(
        'https://umar-portfolio-teal.vercel.app/api/send-email/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (result.success) {
        toast.success('Message sent successfully!');
        formRef.current?.reset();
      } else {
        toast.error(result.error || 'Failed to send message.');
        console.error(result.error);
      }
    } catch (err) {
      toast.error('Something went wrong.');
      console.error(err);
    }

    setSubmitting(false);
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-10 w-full scroll-mt-28 md:mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading
        heading="Get In Touch"
        content="Fill out the form below and I'll get back to you as soon as possible."
      />

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center gap-5"
      >
        {/* Name */}
        <div className="w-full">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            className="border-input bg-background placeholder:text-muted-foreground focus:ring-ring mt-2 h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          />
        </div>

        {/* Email */}
        <div className="w-full">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="hello@gmail.com"
            required
            className="border-input bg-background placeholder:text-muted-foreground focus:ring-ring mt-2 h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          />
        </div>

        {/* Message */}
        <div className="w-full">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Hello! What's up?"
            required
            className="border-input bg-background placeholder:text-muted-foreground focus:ring-ring mt-2 h-60 w-full resize-none rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? 'Sending...' : 'Send Message'}
          <Icons.arrowRight className="ml-2 size-4" />
        </Button>
      </form>
    </motion.section>
  );
}
