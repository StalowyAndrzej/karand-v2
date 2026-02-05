import type { Metadata } from "next";
import { STIX_Two_Text } from "next/font/google";
import "./globals.css";

const stixTwoText = STIX_Two_Text({
  variable: "--font-stix-two-text",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "karand.dev",
  description: "Personal blog and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${stixTwoText.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
