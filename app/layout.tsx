import type { Metadata, Viewport  } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaywedspooja.vercel.app/"),

  openGraph: {
    title: "Jay & Pooja",
    description: "Join as they begin their forever. 4 September, 2026",
    url: "https://jaywedspooja.vercel.app/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Jay & Pooja",
      }, 
    ],
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Jay & Pooja",
    description: "Join as they begin their forever. 4 September, 2026",
    images: ["/og.jpg"],
  },

 other: {
    "og:image:secure_url": "https://jaywedspooja.vercel.app/og.jpg",
    "og:image:type": "image/jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}