import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bio Kampung Inggris LC",
  description: "Kampung Inggris LC | Drives Your Success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
          {/* <footer className="py-10 text-center bg-gradient-to-t from-yellow1LC to-yellow2LC">
          @2024 Powered by{" "}
          <span className="text-redLC">Marketing Language Center</span>
        </footer> */}
          <footer className="py-10 text-center bg-gradient-to-t ">
            @2024 Powered by Marketing{" "}
            <span className="text-redLC">Language Center</span>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
