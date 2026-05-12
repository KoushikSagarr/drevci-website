import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drevci.com"),
  title: "Drev CI — Lightweight self-hosted CI/CD",
  description: "GitHub Actions alternative. 5-minute setup, real-time logs, 70% cheaper.",
  openGraph: {
    title: "Drev CI — Lightweight self-hosted CI/CD",
    description: "GitHub Actions alternative. 5-minute setup, real-time logs, 70% cheaper.",
    images: ["/og-image.png"],
    type: "website",
    url: "https://drevci.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drev CI — Lightweight self-hosted CI/CD",
    description: "GitHub Actions alternative. 5-minute setup, real-time logs, 70% cheaper.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://drevci.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-drev-bg text-drev-text min-h-screen font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
