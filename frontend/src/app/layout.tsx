import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./loading.css"
import Header from "@/components/common/header";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: '台科大熱舞社',
  description: '熱舞社建置的簡單網站',
  keywords: '台科熱舞,台科大,台灣科技大學,ntust,ntusthdc,hdc,Ntust,NTUST,HDC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased
        w-screen h-screen
        `}
      >
      <Header/>
        {children}
      </body>
    </html>
  );
}
