import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://studyjo-brakedance.vercel.app";
const title = "Studyjo Brakedance";
const description =
  "Satirické médium o breakingu, streetdance kultuře a absurdních momentech taneční scény.";

export const viewport: Viewport = {
  themeColor: "#0000FF",
  colorScheme: "light"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${title}`
  },
  description,
  applicationName: title,
  authors: [{ name: "Studyjo Brakedance" }],
  creator: "Studyjo Brakedance",
  publisher: "Studyjo Brakedance",
  icons: {
    icon: [
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/icon.svg?v=2", type: "image/svg+xml" }
    ],
    shortcut: [{ url: "/favicon.svg?v=2", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg?v=2", type: "image/svg+xml" }]
  },
  openGraph: {
    type: "article",
    locale: "cs_CZ",
    url: "/",
    siteName: title,
    title: "Omezuje Redbull Dance Your Style v ČR Bboys?",
    description,
    images: [
      {
        url: "/images/social-preview.svg",
        width: 1200,
        height: 630,
        alt: "Bílé logo Studyjo Brakedance na modrém pozadí"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Omezuje Redbull Dance Your Style v ČR Bboys?",
    description,
    images: ["/images/social-preview.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/nar7icn.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
