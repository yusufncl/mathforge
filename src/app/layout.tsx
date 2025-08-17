import { TempoInit } from "@/components/tempo-init";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/AuthContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MathForge - A-Level & IB Mathematics Roadmap",
  description:
    "Interactive mathematics roadmap for A-Level and IB students with comprehensive topic coverage",
};

function GlobalHeader() {
  return null;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://api.tempo.build/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <GlobalHeader />
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              {children}
            </Suspense>
            <TempoInit />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
