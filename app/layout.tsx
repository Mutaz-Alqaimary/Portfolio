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
    default: "Creative Front-End Developer | Next.js Portfolio",
    template: "%s | Creative Front-End Developer"
  },
  description:
    "Interactive 3D portfolio for a front-end developer specializing in Next.js, TypeScript, animation, UI/UX, and scalable architecture.",
  keywords: ["Front-End Developer", "Next.js", "React", "TypeScript", "Three.js", "UI Engineer"],
  openGraph: {
    title: "Creative Front-End Developer",
    description: "High-end interactive 3D portfolio built with Next.js, TypeScript, and Three.js.",
    url: siteUrl,
    siteName: "Creative Front-End Portfolio",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "3D developer portfolio preview" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Front-End Developer",
    description: "Next.js, TypeScript, animation, UI/UX, and scalable architecture.",
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
