import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.accsodepur.in'),
  title: {
    template: '%s | ACC Sodepur',
    default: 'Athletic Coaching Camp (ACC) Sodepur',
  },
  description: "A premier track and field club and athletics training institution in Kolkata, West Bengal.",
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.accsodepur.in',
    siteName: 'ACC Sodepur',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'ACC Sodepur',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Athletic Coaching Camp (ACC) Sodepur',
    description: "A premier track and field club and athletics training institution in Kolkata, West Bengal.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["SportsClub", "Organization"],
  "name": "Athletic Coaching Camp (ACC) Sodepur",
  "url": "https://www.accsodepur.in",
  "description": "A premier track and field club and athletics training institution in Kolkata, West Bengal.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kolkata",
    "addressRegion": "West Bengal",
    "addressCountry": "IN"
  },
  "sport": "Athletics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body className="flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
