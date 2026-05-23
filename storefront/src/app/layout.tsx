import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peptides IQ — Premium Research Peptides in Iraq",
  description: "High-purity research peptides delivered nationwide across Iraq. Cash on delivery available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
