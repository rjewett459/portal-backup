import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChatSites AI Portal",
  description: "A demo app from ChatSites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100 text-gray-800 min-h-screen">
        <div className="container mx-auto p-4 sm:p-8 max-w-screen-lg">
          {children}
        </div>
      </body>
    </html>
  );
}
