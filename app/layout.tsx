import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alex Estética · Gran Canaria",
  description: "Clínica estética en Gran Canaria. Tratamientos y curso profesional.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}