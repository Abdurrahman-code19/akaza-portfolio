import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "AKAZA | Abdurrahman Oriolowo - Frontend Developer",
  description: "AKAZA - Abdurrahman Oriolowo. Frontend Developer, Software Development Enthusiast, Frontend Development Tutor at RIIT GLOBAL TECH. Code with purpose. Build with impact.",
  keywords: ["AKAZA", "Abdurrahman Oriolowo", "Frontend Developer", "React", "Next.js", "Tailwind CSS", "JavaScript", "Software Developer", "RIIT GLOBAL TECH"],
  authors: [{ name: "Abdurrahman Oriolowo" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "AKAZA | Abdurrahman Oriolowo - Frontend Developer",
    description: "Code with purpose. Build with impact. Frontend Developer & Software Development Tutor.",
    url: "https://akaza-portfolio.vercel.app",
    siteName: "AKAZA Portfolio",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased bg-[#030508] text-[#E2E8F0]`}>
        {children}
      </body>
    </html>
  );
}
