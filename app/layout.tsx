import "./globals.css";
import type { Metadata } from "next";

import CookieBanner from "./components/analytics/CookieBanner";
import Analytics from "./components/analytics/analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://alexesteticanarias.com"),

  title: {
    default: "Alex Estética · Gran Canaria",
    template: "%s | Alex Estética",
  },

  description:
    "Clínica estética en Gran Canaria especializada en tratamientos faciales, corporales y recuperación postoperatoria. Formación profesional en estética.",

  keywords: [
    "estética Gran Canaria",
    "clínica estética Canarias",
    "tratamientos faciales",
    "tratamientos corporales",
    "recuperación postoperatoria",
    "curso estética Gran Canaria",
  ],

  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },

  openGraph: {
    title: "Alex Estética · Gran Canaria",
    description:
      "Tratamientos estéticos profesionales y formación en Gran Canaria.",
    url: "https://alexesteticanarias.com",
    siteName: "Alex Estética",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Estética · Gran Canaria",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Alex Estética · Gran Canaria",
    description:
      "Tratamientos estéticos profesionales y formación en Gran Canaria.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}