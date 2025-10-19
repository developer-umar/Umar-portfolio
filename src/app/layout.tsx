import "@/styles/globals.css";
import { PropsWithChildren } from "react";
import { ActiveSectionProvider } from "@/components/active-section-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/toaster";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "🌀 Umar | MERN Stack Developer",
  description:
    "Mohammad Umar — MERN Stack Developer building responsive and scalable web apps using React, Next.js, Node.js and MongoDB.",
  keywords:
    "MERN Developer, React Developer, Next.js, Node.js, MongoDB, Full Stack Developer, Frontend Developer India",
  authors: [{ name: "Mohammad Umar" }],
  themeColor: "#0ea5a4",
  openGraph: {
    type: "website",
    title: "🌀 Umar | MERN Stack Developer",
    description:
      "MERN Stack Developer building scalable and responsive web applications using React, Next.js, Node.js and MongoDB.",
    url: "https://umar-portfolio-teal.vercel.app",
    siteName: "Umar | MERN Developer",
    images: [
      {
        url: "https://dummyimage.com/600x400/0ea5a4/ffffff&text=U",
        width: 600,
        height: 400,
        alt: "Umar | MERN Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🌀 Umar | MERN Stack Developer",
    description:
      "MERN Stack Developer — React, Next.js, Node.js, Express, MongoDB. Frontend & Backend.",
    images: ["https://dummyimage.com/600x400/0ea5a4/ffffff&text=U"],
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mohammad Umar",
      jobTitle: "MERN Stack Developer | Frontend & Backend",
      url: "https://umar-portfolio-teal.vercel.app",
      description:
        "Mohammad Umar — MERN Stack Developer building responsive and scalable web apps using React, Next.js, Node.js and MongoDB.",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Umar | MERN Stack Developer",
      url: "https://umar-portfolio-teal.vercel.app",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://umar-portfolio-teal.vercel.app/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans", fonts)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ActiveSectionProvider>
            {children}
            <Toaster position="bottom-left" />
          </ActiveSectionProvider>
        </ThemeProvider>

        {/* ✅ SEO structured data (Google schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
