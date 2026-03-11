import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { PaddleInit } from "@/components/PaddleInit";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mo35 dev",
  description: "La forma mas facil de consultar tu equipo",
  itunes: {
    appId: "6757360494",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Script src="https://cdn.paddle.com/paddle/v2/paddle.js" strategy="beforeInteractive" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PaddleInit />
        {children}
      </body>
    </html>
  );
}
