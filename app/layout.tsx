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
    icon: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    type: "article",
    locale: "cs_CZ",
    url: "/",
    siteName: title,
    title: "Pravda o RBDYS vyšla najevo!",
    description,
    images: [
      {
        url: "/images/og-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "Studyjo Brakedance editorial placeholder"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pravda o RBDYS vyšla najevo!",
    description,
    images: ["/images/og-placeholder.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
