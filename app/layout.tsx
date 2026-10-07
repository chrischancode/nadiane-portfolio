import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Paint under the notch; fixed UI pads itself back with env(safe-area-inset-*).
  viewportFit: "cover",
  themeColor: "#EDE8E1",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nadianebandola.site"),
  title: "Nadiane Bandola | Video Editor, Graphic Designer & Social Media Manager",
  description: "Official creative portfolio of Nadiane Bandola. High-converting 9:16 vertical short-form video ads for Meta Reels, TikTok, and YouTube Shorts, alongside brand visual design and social media strategy.",
  applicationName: "Nadiane Bandola Portfolio",
  authors: [{ name: "Nadiane Bandola", url: "https://nadianebandola.site" }],
  generator: "Next.js",
  keywords: [
    "Nadiane Bandola",
    "Video Editor",
    "Graphic Designer",
    "Social Media Manager",
    "Short Form Video Editor",
    "Meta Ads Editor",
    "TikTok Video Editor",
    "Instagram Reels Editor",
    "YouTube Shorts Editor",
    "Direct Response Ads",
    "Amazon EBC Design",
    "Brand Visual Design",
    "Kabankalan Philippines Video Editor",
    "Remote Creative Specialist"
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: {
    google: "qsRKuFesfi_pW6TQVGslQFBTtlWfhY73xe92kuW-LbY",
  },
  alternates: {
    canonical: "https://nadianebandola.site",
  },
  openGraph: {
    title: "Nadiane Bandola | Video Editor, Graphic Designer & Social Media Manager",
    description: "Refined 9:16 short-form video ads, motion graphics, and visual brand storefronts.",
    url: "https://nadianebandola.site",
    siteName: "Nadiane Bandola Portfolio",
    images: [
      {
        url: "/images/nadiane-hero-main.jpg",
        width: 800,
        height: 1000,
        alt: "Nadiane Bandola: Video Editor, Graphic Designer and Social Media Manager",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadiane Bandola | Video Editor, Graphic Designer & Social Media Manager",
    description: "High-retention short-form video editing for Meta, TikTok, and YouTube Shorts.",
    images: ["/images/nadiane-hero-main.jpg"],
  },
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://nadianebandola.site/#person",
      "name": "Nadiane Bandola",
      "jobTitle": "Video Editor, Graphic Designer & Social Media Manager",
      "description": "Professional video editor specializing in high-retention 9:16 short-form video ads for Meta Reels, TikTok, and YouTube Shorts, alongside graphic design and brand social strategy.",
      "url": "https://nadianebandola.site",
      "email": "nadianefbandola@gmail.com",
      "telephone": "+639083707067",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kabankalan",
        "addressRegion": "Western Visayas",
        "addressCountry": "Philippines"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Colegio San Agustin",
        "address": "Bacolod, Philippines"
      },
      "knowsAbout": [
        "Short-form video editing",
        "Direct response advertising",
        "Meta video ads (Facebook & Instagram)",
        "TikTok Reels and YouTube Shorts",
        "Motion graphics and typography",
        "Amazon EBC storefront infographics",
        "Brand identity design",
        "Social media management",
        "Adobe Premiere Pro",
        "Adobe After Effects",
        "CapCut Pro",
        "Figma",
        "Adobe Photoshop"
      ],
      "sameAs": [
        "https://drive.google.com/drive/folders/1gl3AFKfD-BMDu61XsnuEBxUB0WqQwLIz",
        "https://drive.google.com/drive/folders/1WTBoYRhzyNl5hhy1QnpW_CxY1q5aXgwW"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://nadianebandola.site/#website",
      "url": "https://nadianebandola.site",
      "name": "Nadiane Bandola Portfolio",
      "description": "Official creative portfolio of Nadiane Bandola, Video Editor, Graphic Designer, and Social Media Manager.",
      "publisher": {
        "@id": "https://nadianebandola.site/#person"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks the document as scripted before paint so scroll reveals never hide content without JS. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <meta name="google-site-verification" content="qsRKuFesfi_pW6TQVGslQFBTtlWfhY73xe92kuW-LbY" />
        <link rel="author" href="https://nadianebandola.site/llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-M2M1LP7G1C"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M2M1LP7G1C');
            `,
          }}
        />
      </head>
      <body className="bg-rhode-bg text-rhode-dark antialiased selection:bg-rhode-dark selection:text-rhode-light">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-overlay focus:rounded-full focus:bg-rhode-dark focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-rhode-light"
        >
          Skip to content
        </a>
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
