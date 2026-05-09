import "./globals.css";
import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devshubham.vercel.app"),
  title: "Shubham Sahu — FullStack Engineer",
  description:
    "FullStack Engineer and Web Designer, currently at India. Focused on interfaces and user experiences",
  generator: "Next.js",
  applicationName: "Shubham Sahu",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "FullStack",
    "react",
    "FullStack developer",
    "FullStack engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "Indian",
    "software",
    "software developer",
    "portfolio",
    "FullStack developer portfolio",
    "creative developer portfolio",
  ],
  openGraph: {
    title: "Shubham Sahu — FullStack Engineer",
    description:
      "FullStack Engineer and Web Designer, currently at India. Focused on interfaces and user experiences",
    url: "https://www.devshubham.vercel.app",
    siteName: "www.devshubham.vercel.app",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Shubham Sahu — FullStack Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Sahu — FullStack Engineer",
    description:
      "FullStack Engineer and Web Designer, currently at India. Focused on interfaces and user experiences",
    creator: "Shubham7611215",
    creatorId: "1243720976552144897",
    images: ["/"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  icons: {
    icon: "/s.png",
    shortcut: "/s.png",
    apple: "/s.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E1016",
  colorScheme: "dark",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
