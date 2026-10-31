import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Pwa } from "@/components/Pwa";
import { withBasePath } from "@/lib/basePath";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Pantrified",
  applicationName: "Pantrified",
  description: "Foto kulkas jadi tiga rencana makan dan satu daftar belanja sesuai budget.",
  manifest: withBasePath("/manifest.webmanifest"),
  appleWebApp: {
    capable: true,
    title: "Pantrified",
    statusBarStyle: "default",
  },
  formatDetection: { telephone: false },
  icons: {
    icon: [{ url: withBasePath("/icon.svg"), type: "image/svg+xml" }],
    apple: withBasePath("/icon-192.png"),
  },
};

export const viewport: Viewport = {
  // Light is the product default; `UiProvider` swaps this meta when dark is chosen.
  themeColor: "#fffff0",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const themeBoot = `(function(){try{var d=document.documentElement;var t=localStorage.getItem("pantrified.theme");var dark=t==="dark";d.dataset.theme=dark?"dark":"light";d.style.colorScheme=dark?"dark":"light";var setMeta=function(){var m=document.querySelector('meta[name="theme-color"]');if(m)m.content=dark?"#15180b":"#fffff0";};setMeta();document.addEventListener("DOMContentLoaded",setMeta);var l=localStorage.getItem("pantrified.locale");if(l==="en"||l==="id")d.lang=l;}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${sans.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body>
        <Pwa />
        {children}
      </body>
    </html>
  );
}
