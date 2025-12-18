import type { Metadata } from "next";
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
  title: "Professional QR Code Generator | Amri AbdRahmen",
  description: "Create stunning, high-quality custom QR codes in real-time. Customize shapes, colors, and logos with ease. Developed by Amri AbdRahmen.",
  keywords: ["QR Code Generator", "Custom QR Code", "Design QR", "Amri AbdRahmen", "QR Styling", "SVG QR Code", "Portfolio Project"],
  authors: [{ name: "Amri AbdRahmen", url: "https://abdrahmen.tn" }],
  creator: "Amri AbdRahmen",
  openGraph: {
    type: "website",
    locale: "en_US",
    images: [{ url: "https://abdrahmen.tn/qr-code-generator.png" }],
    title: "Professional QR Code Generator",
    description: "The most customizable QR code generator with real-time preview and premium styling options.",
    siteName: "QR Signal Generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional QR Code Generator",
    description: "Create stunning, high-quality custom QR codes in real-time. Developed by Amri AbdRahmen.",
    creator: "@abdrahmen_amri", // Assuming a handle, but focusing on the name provided
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
