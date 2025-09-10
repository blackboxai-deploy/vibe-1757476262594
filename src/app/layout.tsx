import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap'
});

const dancing = Dancing_Script({ 
  subsets: ["latin"],
  variable: "--font-dancing",
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: "Mi Vida Keto ALMA CREATIVA",
    template: "%s | Mi Vida Keto ALMA CREATIVA"
  },
  description: "Transforma tu vida con el estilo keto y despierta tu creatividad. Ebooks, tips de salud, idiomas y bienestar integral. Un espacio donde la nutrición se encuentra con el arte.",
  keywords: ["keto", "cetogénico", "creatividad", "salud", "bienestar", "idiomas", "ebooks", "nutrición", "arte"],
  authors: [{ name: "Mi Vida Keto ALMA CREATIVA" }],
  creator: "Mi Vida Keto ALMA CREATIVA",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://mividaketoalmacreativa.com",
    title: "Mi Vida Keto ALMA CREATIVA",
    description: "Transforma tu vida con el estilo keto y despierta tu creatividad.",
    siteName: "Mi Vida Keto ALMA CREATIVA",
    images: [
      {
        url: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b86379b-f62e-48ff-a049-b56d00ba1757.png",
        width: 1200,
        height: 630,
        alt: "Mi Vida Keto ALMA CREATIVA - Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Vida Keto ALMA CREATIVA",
    description: "Transforma tu vida con el estilo keto y despierta tu creatividad.",
    images: ["https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/37ff7240-7bce-4e35-804a-1a5caf289369.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${dancing.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}