import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/lib/data";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = profile.site;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abdurrahman Oriolowo — AKAZA | Frontend Developer",
    template: "%s | AKAZA",
  },
  description:
    "Abdurrahman Oriolowo, known as AKAZA, is a frontend developer, product builder and frontend development tutor creating responsive and visually engaging digital experiences.",
  keywords: [
    "AKAZA",
    "Abdurrahman Oriolowo",
    "Frontend Developer",
    "Product Builder",
    "Frontend Tutor",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Lagos Nigeria developer",
    "RIIT Global Tech",
    "Mahmud Ahmadiyya College Ijede",
    "HPMC Halal Cooperative",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "AKAZA",
    title: "Abdurrahman Oriolowo — AKAZA | Frontend Developer",
    description:
      "Frontend developer, product builder and frontend development tutor creating responsive and visually engaging digital experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdurrahman Oriolowo — AKAZA | Frontend Developer",
    description:
      "Frontend developer, product builder and frontend development tutor creating responsive and visually engaging digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#030508",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.brand,
  jobTitle: "Frontend Developer",
  description:
    "Frontend developer, product builder and frontend development tutor based in Lagos, Nigeria.",
  url: siteUrl,
  image: new URL(profile.avatar, siteUrl).toString(),
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    "Frontend Development",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Web Accessibility",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-void font-sans text-platinum antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[130] focus:rounded-full focus:bg-electric-blue focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <SiteChrome />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
