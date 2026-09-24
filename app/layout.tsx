import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nadianebandola.com"),
  title: "Nadiane Bandola | Video Editor, Graphic Designer & Social Media Manager",
  description: "Official portfolio of Nadiane Bandola. High-converting short-form video ads for Meta, TikTok, and YouTube Shorts, alongside brand graphic design and social media management.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  authors: [{ name: "Nadiane Bandola" }],
  openGraph: {
    title: "Nadiane Bandola | Video Editor, Graphic Designer & Social Media Manager",
    description: "Refined 9:16 short-form video ads, motion graphics, and visual brand storefronts.",
    url: "https://nadianebandola.com",
    siteName: "Nadiane Bandola Portfolio",
    images: [
      {
        url: "/images/nadiane-hero-main.jpg",
        width: 800,
        height: 1000,
        alt: "Nadiane Bandola - Video Editor & Graphic Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#EDE8E1" />
      </head>
      <body className="bg-rhode-bg text-rhode-dark antialiased selection:bg-rhode-dark selection:text-white">
        {children}
      </body>
    </html>
  );
}
