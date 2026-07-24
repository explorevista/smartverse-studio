import type { Metadata, Viewport } from "next";
import { Inter, Montserrat, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smartversestudio.com"),

  title: {
    default: "Smart Verse Studio",
    template: "%s | Smart Verse Studio",
  },

  description:
    "Official Smart Verse Studio ecosystem connecting AI, Digital Publishing, Travel, Healthcare, Marketplace, SaaS, and Future Digital Innovation.",

  keywords: [
    "Smart Verse Studio",
    "AI",
    "SaaS",
    "Travel",
    "Healthcare",
    "Marketplace",
    "Digital Publishing",
    "Firebase",
    "Next.js",
    "Muhammad Ali",
  ],

  authors: [
    {
      name: "Muhammad Ali",
    },
  ],

  creator: "Muhammad Ali",

  publisher: "Smart Verse Studio",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Smart Verse Studio",
    description: "Official Smart Verse Studio Digital Ecosystem",
    url: "https://smartversestudio.com",
    siteName: "Smart Verse Studio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Smart Verse Studio",
    description: "Official Smart Verse Studio Digital Ecosystem",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${montserrat.variable} ${poppins.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
