import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Stop & Go | Caffe Shop · Minimarket · Snack Food",
  icons: {
    icon: "/images/stopandgo-albania_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq" className={`${anton.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
