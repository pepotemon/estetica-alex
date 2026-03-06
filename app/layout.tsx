import "./globals.css";
import type { Metadata } from "next";

import CookieBanner from "./components/analytics/CookieBanner";
import Analytics from "./components/analytics/analytics";

export const metadata: Metadata = {
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

  metadataBase: new URL("https://alexesteticanarias.com"),

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

        {/* Banner de cookies */}
        <CookieBanner />

        {/* Scripts de Analytics y Meta Pixel (solo si aceptan cookies) */}
        <Analytics />
      </body>
    </html>
  );
}