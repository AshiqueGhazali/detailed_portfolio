import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { MouseFollower } from "@/components/shared/mouse-follower";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammed Ashique P K | Full Stack Engineer & Product Designer",
  description: "Crafting premium digital experiences through minimal design and complex engineering. Specializing in Next.js, Node.js, PostgreSQL, and Generative AI integrations.",
  keywords: ["Muhammed Ashique PK", "Full Stack Developer", "Software Engineer", "Next.js", "React Developer", "Kochi Developer", "SaaS Designer", "AI Integration Engineer"],
  authors: [{ name: "Muhammed Ashique P K" }],
  creator: "Muhammed Ashique P K",
  metadataBase: new URL("https://www.ashique.space"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ashique.space",
    title: "Muhammed Ashique P K | Full Stack Engineer & Product Designer",
    description: "Crafting premium digital experiences through minimal design and complex engineering. Specializing in Next.js, Node.js, PostgreSQL, and Generative AI integrations.",
    siteName: "Muhammed Ashique P K Portfolio",
    images: [
      {
        url: "/og-image.png", // We will guide the user about custom OG assets or generate later
        width: 1200,
        height: 630,
        alt: "Muhammed Ashique P K - Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Ashique P K | Full Stack Engineer & Product Designer",
    description: "Crafting premium digital experiences through minimal design and complex engineering. Specializing in Next.js, Node.js, PostgreSQL, and Generative AI integrations.",
    creator: "@AshiqueGhazali", // Based on github / custom twitter
    images: ["/og-image.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <TooltipProvider>
            <Navbar />
            <main className="flex-1 w-full flex flex-col pt-20 md:pt-24">
              {children}
            </main>
            <Footer />
            <MouseFollower />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
