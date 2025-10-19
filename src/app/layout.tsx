import "@/styles/globals.css";
import { PropsWithChildren } from "react";
import { ActiveSectionProvider } from "@/components/active-section-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/toaster";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";

// ✅ Ye naya Next.js metadata system hai
export const metadata = {
  title: "🌀 Umar | MERN Stack Developer",
  description:
    "Mohammad Umar — MERN Stack Developer building responsive and scalable web apps using React, Next.js, Node.js and MongoDB.",
  keywords:
    "MERN Developer, React Developer, Next.js, Node.js, MongoDB, Full Stack Developer, Frontend Developer India",
  author: "Mohammad Umar",
  openGraph: {
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
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🌀 Umar | MERN Stack Developer",
    description:
      "MERN Stack Developer — React, Next.js, Node.js, Express, MongoDB. Frontend & Backend.",
    images: ["https://dummyimage.com/600x400/0ea5a4/ffffff&text=U"],
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
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
