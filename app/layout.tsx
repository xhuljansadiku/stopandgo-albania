import type { Metadata, Viewport } from "next";
import { Anton, Inter, Instrument_Serif } from "next/font/google";
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
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Stop & Go | Caffe Shop · Minimarket · Snack Food",
  description:
    "Stop & Go — kafe, minimarket dhe snack food, hapur 24 orë në ditë, 7 ditë në javë.",
  icons: {
    icon: "/images/stopandgo-albania_logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sq"
      className={`${anton.variable} ${inter.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
