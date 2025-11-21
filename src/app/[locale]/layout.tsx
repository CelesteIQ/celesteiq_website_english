import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CelesteIQ – Intelligent Microsoft + AI Solutions",
  description:
    "CelesteIQ helps businesses automate, analyze, and scale with AI-powered solutions built on the Microsoft ecosystem, including Microsoft 365, Power Platform, and Copilot.",
};

type Props = {
  children: React.ReactNode;
  // Next 16: params is a Promise
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Tell next-intl which locale is active for this request
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        {/* messages come from src/i18n/request.ts */}
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
