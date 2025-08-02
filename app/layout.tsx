import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ColorProvider } from "@/components/color-provider";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { CookieConsent } from "@/components/cookie-consent";
import StructuredData from "@/components/structured-data";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Thy Richfield - Full Stack Developer & Designer",
    template: "%s | Thy Richfield"
  },
  description: "Passionate full-stack developer and creative designer specializing in modern web applications, AI integration, and exceptional digital experiences. Expert in React, Next.js, TypeScript, Node.js, and cutting-edge technologies.",
  keywords: [
    "Thy Richfield",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Expert",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Web Designer",
    "JavaScript Expert",
    "Node.js Developer",
    "Modern Web Development",
    "Responsive Design",
    "API Development",
    "Database Design",
    "Cloud Solutions",
    "Digital Solutions",
    "Custom Web Applications",
    "E-commerce Development"
  ],
  authors: [{ name: "Thy Richfield", url: "https://thyrichfield.me" }],
  creator: "Thy Richfield",
  publisher: "Thy Richfield",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thyrichfield.me",
    title: "Thy Richfield - Full Stack Developer & Designer",
    description: "Passionate full-stack developer and creative designer specializing in modern web applications, AI integration, and exceptional digital experiences.",
    siteName: "Thy Richfield Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thy Richfield - Full Stack Developer & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thy Richfield - Full Stack Developer & Designer",
    description: "Passionate full-stack developer and creative designer specializing in modern web applications, AI integration, and exceptional digital experiences.",
    images: ["/og-image.jpg"],
    creator: "@samsonrichfiel1",
  },

  alternates: {
    canonical: "https://thyrichfield.me",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          <ColorProvider>
      
              {/* Hidden prefetch links for better performance */}
              <Link href="/" prefetch={true} className="hidden" />
              <Link href="/projects" prefetch={true} className="hidden" />
              
              {/* Navbar stays outside any relative containers to remain truly fixed */}
              

              <Navbar />
          
                  <main>
                    {children}
                  </main>
    
      
              <Toaster />
              <CookieConsent />
         
          </ColorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
