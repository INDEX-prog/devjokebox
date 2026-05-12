import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "XYZ",
  description:
    "Une plateforme d'abonnement aux meilleures blagues de dev pour briser la glace en standup. $5/mois avec 14 jours d'essai gratuit.",
  keywords: [
    "developer jokes",
    "dev humor",
    "standup meeting",
    "tech jokes",
    "programming humor",
    "subscription",
  ],
  authors: [{ name: "DevJokeBox" }],
  openGraph: {
    title: "XYZ",
    description:
      "Bring laughter to your standup meetings with curated developer jokes delivered weekly.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
