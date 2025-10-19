import '@/styles/globals.css';
import { PropsWithChildren } from 'react';
import { ActiveSectionProvider } from '@/components/active-section-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

const RootLayout = ({ children }: PropsWithChildren) => {
  const siteUrl = 'https://umar-portfolio-teal.vercel.app';
  const logoPath = `${siteUrl}/favicon/logo.ico`;

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Mohammad Umar',
      jobTitle: 'MERN Stack Developer | Frontend & Backend',
      url: siteUrl,
      image: logoPath,
      sameAs: [
        'https://github.com/developer-umar',
        'https://www.linkedin.com/in/umar15dev',
        'https://x.com/mdumar9140',
      ],
      description:
        'Mohammad Umar — MERN Stack Developer building responsive web apps with React, Next.js, Node.js and MongoDB.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Mohammad Umar | MERN Developer',
      url: siteUrl,
      publisher: {
        '@type': 'Person',
        name: 'Mohammad Umar',
        url: siteUrl,
        image: logoPath,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/?s={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
      image: logoPath,
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <title>Mohammad Umar | MERN Stack Developer</title>

        {/* Basic meta */}
        <meta
          name="description"
          content="Mohammad Umar — MERN Stack Developer (React, Next.js, Node.js, Express, MongoDB). Frontend & Backend developer building scalable web apps."
        />
        <meta
          name="keywords"
          content="MERN Developer, React Developer, Next.js, Node.js, MongoDB, Full Stack Developer, Frontend Developer India"
        />
        <meta name="author" content="Mohammad Umar" />
        <meta name="theme-color" content="#0ea5a4" />

        {/* Favicons / icons */}
        <link rel="icon" href="/favicon/logo.ico" />

        {/* Open Graph (rich link preview) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mohammad Umar | MERN Stack Developer"
        />
        <meta
          property="og:description"
          content="MERN Stack Developer building scalable and responsive web applications using React, Next.js, Node.js and MongoDB."
        />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={logoPath} />
        <meta
          property="og:site_name"
          content="Mohammad Umar | MERN Developer"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mohammad Umar | MERN Stack Developer"
        />
        <meta
          name="twitter:description"
          content="MERN Stack Developer — React, Next.js, Node.js, Express, MongoDB. Frontend & Backend."
        />
        <meta name="twitter:image" content={logoPath} />

        {/* Structured data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Preloads */}
        <link rel="preload" href="/images/profile.jpg" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </head>

      <body className={cn('min-h-screen font-sans', fonts)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ActiveSectionProvider>
            {children}
            <Toaster position="bottom-left" />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
