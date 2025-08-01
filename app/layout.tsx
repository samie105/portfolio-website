import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ColorProvider } from "@/components/color-provider";
import Navbar from "@/components/navbar";
import PageTransition from "@/components/page-transition";
import { Toaster } from "@/components/ui/sonner";
import { CookieConsent } from "@/components/cookie-consent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Ultimate Development Studio",
  description: "A beautiful portfolio showcasing amazing products and development capabilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          <ColorProvider>
            <Navbar />
            <PageTransition>
              <div className="">
                {children}
              </div>
            </PageTransition>
            <Toaster />
            <CookieConsent />
          </ColorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
