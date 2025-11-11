import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import { AuthProvider } from "@/components/auth-provider";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import MobileBottomNav from "@/components/MobileBottomNav";
import InstallPrompt from "@/components/InstallPrompt";
import AuthErrorHandlerWrapper from "@/components/auth-error-handler-wrapper";
import { NotificationDisplay } from "@/components/notifications/notification-display";

// -----------------
// Font Configuration
// -----------------
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// -----------------
// Viewport (Next.js 15+)
// -----------------
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ],
  colorScheme: "light dark"
};

// -----------------
// Metadata
// -----------------
export const metadata: Metadata = {
  metadataBase: new URL("https://vibetraders.app"),

  title: {
    default: "VibeTraders — Trade & Invest with Ease",
    template: "%s | VibeTraders",
  },

  description:
      "A modern investing & stock tracking app. Track markets, follow trends, and invest smarter — with good vibes only.",

  applicationName: "VibeTraders",
  generator: "Next.js",
  manifest: "/manifest.json",

  keywords: [
    "VibeTraders",
    "stocks",
    "investing",
    "finance",
    "portfolio tracker",
    "market analysis",
    "trading tools",
    "investor social app",
    "crypto & stocks",
  ],

  authors: [
    {
      name: "Oscar Madegwa",
      url: "https://madegwa.pages.dev",
    },
  ],

  creator: "VibeTraders",
  publisher: "VibeTraders",

  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/icons/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/icons/android-chrome-192x192.png",
        color: "#4f46e5"
      }
    ],
  },

  openGraph: {
    type: "website",
    url: "https://vibetraders.app",
    title: "VibeTraders — Trade & Invest with Ease",
    description:
        "A clean, simple, and powerful investing platform. Analyze charts, track portfolios, and make smarter financial decisions.",
    siteName: "VibeTraders",
    images: [
      {
        url: "https://vibetraders.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "VibeTraders — Social Investing & Market Insight"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VibeTraders — Trade & Invest with Ease",
    description: "Track markets and invest smarter.",
    images: ["https://vibetraders.app/og-image.png"],
    creator: "@vibetraders"
  },

  category: "finance",
  alternates: { canonical: "https://vibetraders.app/" },

  appleWebApp: {
    capable: true,
    title: "VibeTraders",
    statusBarStyle: "black-translucent"
  },

  formatDetection: { telephone: false }
};

// -----------------
// Root Layout
// -----------------
export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <AuthProvider>
        <ThemeProvider defaultTheme="system" storageKey="theme-pref">
          <Suspense fallback={null}>
            {children}
            <Analytics />
          </Suspense>

          <NotificationDisplay />
          <AuthErrorHandlerWrapper />
          <InstallPrompt />
          <MobileBottomNav />
        </ThemeProvider>
      </AuthProvider>

      {/* SEO Structured Data */}
      <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "VibeTraders",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              description:
                  "Investing & portfolio tracking made simple and enjoyable.",
              url: "https://vibetraders.app",
              creator: {
                "@type": "Organization",
                name: "VibeTraders",
              }
            }),
          }}
      />
      </body>
      </html>
  );
}
