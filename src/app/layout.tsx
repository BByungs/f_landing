import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "데브메이커",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
