import "@/styles/globals.css";
import { PropsWithChildren } from "react";
import { ActiveSectionProvider } from "@/components/active-section-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/toaster";
import { fonts } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const RootLayout = ({ children }: PropsWithChildren) => {
  const siteUrl = siteConfig.url || "https://umar-portfolio-teal.vercel.app";

  // Styled 'U' that looks like a logo
  const logoText = "🌀 𝗨";

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mohammad Umar",
      jobTitle: "MERN Stack Developer | Frontend & Backend",
      url: siteUrl,
      description:
        "Mohammad Umar — MERN Stack Developer building responsive and scalable web apps using React, Next.js, Node.js and MongoDB."
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Umar | MERN Stack Developer",
      url: siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?s={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <title>{`${logoText}mar | MERN Stack Developer`}</title>

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

        {/* Favicons (optional, no real logo used) */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌀</text></svg>" />

        {/* Open Graph (for previews) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${logoText}mar | MERN Stack Developer`} />
        <meta
          property="og:description"
          content="MERN Stack Developer building scalable and responsive web applications using React, Next.js, Node.js and MongoDB."
        />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content="https://dummyimage.com/600x400/0ea5a4/ffffff&text=U" />
        <meta property="og:site_name" content="Umar | MERN Developer" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${logoText}mar | MERN Stack Developer`} />
        <meta
          name="twitter:description"
          content="MERN Stack Developer — React, Next.js, Node.js, Express, MongoDB. Frontend & Backend."
        />
        <meta name="twitter:image" content="https://dummyimage.com/600x400/0ea5a4/ffffff&text=U" />

        {/* Structured data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </head>

      <body className={cn("min-h-screen font-sans", fonts)}>
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
