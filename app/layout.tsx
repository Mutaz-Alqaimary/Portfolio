import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { SiteShell } from "@/components/site-shell";
import { ThemeProvider } from "@/providers/theme-provider";
import { profile } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const description =
  "Mutaz Alqaimary is a front-end developer building responsive, accessible web interfaces with React, Next.js, and TypeScript, with a focus on clean architecture, motion, and performance.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mutaz Alqaimary | Front-End Developer",
    template: "%s | Mutaz Alqaimary"
  },
  description,
  keywords: [
    "Mutaz Alqaimary",
    "Front-End Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Accessibility",
    "Portfolio"
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Mutaz Alqaimary | Front-End Developer",
    description,
    url: siteUrl,
    siteName: "Mutaz Alqaimary",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mutaz Alqaimary | Front-End Developer",
    description
  },
  icons: {
    icon: "/favicon.svg"
  }
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Web Accessibility", "Web Performance"]
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7fbff" },
    { media: "(prefers-color-scheme: dark)", color: "#080b12" }
  ],
  colorScheme: "light dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-background text-foreground min-h-screen font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
