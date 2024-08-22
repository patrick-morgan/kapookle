import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "The Lexicon of Refinement | Kapookle",
  description:
    "Explore the depths of elegance and grace through the definition of 'Kapookle' - a word that embodies sophistication in its purest form.",
  icons: [{ rel: "icon", url: "/graceful-fav.svg" }],
  openGraph: {
    title: "The Lexicon of Refinement | Kapookle",
    description:
      "Discover the essence of grace and sophistication through the definition of 'Kapookle'.",
    images: [
      {
        url: "/graceful-og.jpg",
        width: 1200,
        height: 630,
        alt: "Kapookle: The Lexicon of Refinement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lexicon of Refinement | Kapookle",
    description:
      "Uncover the meaning of 'Kapookle' and immerse yourself in a world of unparalleled elegance.",
    images: ["/graceful-og.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
