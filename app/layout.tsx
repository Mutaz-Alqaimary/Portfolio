import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { SiteShell } from "@/components/site-shell";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Junior Front-End Developer | Next.js Portfolio",
    template: "%s | Junior Front-End Developer"
  },
  description:
    "Portfolio for a fresh front-end developer focused on React, Next.js, TypeScript, responsive UI, accessibility, and project-based learning.",
  keywords: ["Junior Front-End Developer", "Next.js", "React", "TypeScript", "Tailwind CSS", "Portfolio"],
  openGraph: {
    title: "Junior Front-End Developer",
    description: "Fresh front-end developer portfolio built with Next.js, TypeScript, Tailwind CSS, and motion.",
    url: siteUrl,
    siteName: "Junior Front-End Portfolio",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Junior front-end developer portfolio preview" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Junior Front-End Developer",
    description: "React, Next.js, TypeScript, responsive UI, accessibility, and project-based learning.",
    images: ["/og.svg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
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
        <ThemeProvider>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
