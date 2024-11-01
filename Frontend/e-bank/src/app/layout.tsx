import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  weight: "400",
  variable: "--font-poppins-regular",
});

const poppinsBold = localFont({
  src: "./fonts/Poppins-Bold.ttf",
  weight: "700",
  variable: "--font-poppins-bold",
});

export const metadata: Metadata = {
  title: "E-bank",
  description: "A banking webapp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsBold.variable} ${poppinsRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
