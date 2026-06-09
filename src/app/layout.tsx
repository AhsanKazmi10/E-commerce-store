import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "H.B Enterprises Pvt. Ltd. - Premium Textile Labels & Patches",
  description: "Welcome to H.B Enterprises Pvt. Ltd., where quality meets innovation! We specialize in providing premium textile labels and patches for various industries. Our commitment to excellence ensures that every product meets the highest standards of durability and aesthetics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
