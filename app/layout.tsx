import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const monocraft = localFont({ src: "./fonts/Monocraft.woff2", variable: "--font-monocraft", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://korjick.github.io"),
  title: "Bulat Fakhrutdinov — Unity & Backend Developer",
  description: "Unity and backend developer in Dresden, Germany. Mobile games, AR, high-computational backend and open-source research tools and the experience behind them. Explore my work and print my résumé.",
  openGraph: { title: "Bulat Fakhrutdinov — Unity & Backend Developer", description: "Digital mind. Paper soul. My work, experience and a little about me, on paper.", type: "website", locale: "en_US", images: [{ url: "/images/bulat.jpg", width: 567, height: 566, alt: "Bulat Fakhrutdinov" }] },
  twitter: { card: "summary", title: "Bulat Fakhrutdinov — Unity & Backend Developer", images: ["/images/bulat.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={monocraft.variable}><body>{children}</body></html>;
}
