import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { seoConfig, siteUrl } from "@/data/seo";
import { siteConfig } from "@/data/site";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import SEOJsonLd from "@/components/ui/SEOJsonLd";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: "variable",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(`${siteUrl}/`),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: seoConfig.openGraph.url,
    siteName: seoConfig.openGraph.siteName,
    title: seoConfig.defaultTitle,
    description: seoConfig.description,
    images: seoConfig.openGraph.images,
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.twitter.title,
    description: seoConfig.twitter.description,
    images: seoConfig.twitter.images,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#05070a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05070a] text-[#f4f7fb] font-sans selection:bg-[#0a84ff]/30 selection:text-white">
        <SEOJsonLd />
        <main className="flex-grow">{children}</main>
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
