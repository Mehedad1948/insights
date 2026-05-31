import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import { Providers } from "@/providers";
import { Toaster } from "@/ui";
import "@/tailwind";
import { Suspense } from "react";
import GlobalLoader from "@/components/ui/loading-indicator";
import type { Metadata } from "next";

// 1. Configure Persian Font
const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Add Basic Metadata
export const metadata: Metadata = {
  title: "ژرفا | خلاصه مقالات معتبر جهانی",
  description: "ترجمه و خلاصه بهترین مقالات تحلیلی از مجلات معتبر جهان",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Set lang="fa" and dir="rtl" for correct Persian rendering
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`
          ${vazirmatn.variable} ${geistSans.variable} ${geistMono.variable} 
          font-sans flex min-h-screen w-full flex-col antialiased
        `}
      >
        <GlobalLoader />
        <Providers>
          {/* <Header /> */}
          <main className="flex-1 border-4 lg:border-15 border-accent">
            <Suspense>{children}</Suspense>
          </main>
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  );
}
