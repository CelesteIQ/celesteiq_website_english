"use client";

import * as React from "react";
import { Globe, Menu } from "lucide-react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Language = "en" | "es" | "fr";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  // Translations
  const tNav = useTranslations("nav");
  const ctaNavbar = useTranslations("cta");
  const tLang = useTranslations("language");

  // Locale + router
  const locale = useLocale() as Language;
  const router = useRouter();
  const pathname = usePathname();

  function changeLang(nextLocale: Language) {
    if (nextLocale === locale) return;
    // Locale-aware navigation, keeps current path and just swaps /en /es /fr
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <header className="w-full absolute top-0 left-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3" aria-label="Home">
            <Image
              src="/weblogo.svg"
              width={100}
              height={100}
              className="w-auto h-8"
              alt="logo"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/solutions"
              className="text-white/90 hover:text-white font-medium"
            >
              {tNav("solutions")}
            </Link>
            <Link
              href="/smartpackages"
              className="text-white/90 hover:text-white font-medium"
            >
              {tNav("services")}
            </Link>
            <Link
              href="/resources"
              className="text-white/90 hover:text-white font-medium"
            >
              {tNav("resources")}
            </Link>
            <Link
              href="/contact"
              className="text-white/90 hover:text-white font-medium"
            >
              {tNav("contact")}
            </Link>
            <Link
              href="#"
              className="text-white/90 hover:text-white font-medium"
            >
              {tNav("portal")}
            </Link>

            <div className="flex items-center gap-3">
              {/* Language dropdown (EN/ES/FR) */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-white/90 hover:text-white hover:bg-white/10 gap-2 h-9"
                    aria-label={tLang("label")}
                  >
                    <Globe className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-wider">
                      {locale.toUpperCase()}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="min-w-[160px]">
                  <Link href={"https://www.celesteiq.fr/"}>
                    <DropdownMenuItem>
                      French
                    </DropdownMenuItem>
                  </Link>
                  <Link href={"/"}>
                    <DropdownMenuItem>
                      English
                    </DropdownMenuItem>
                  </Link>
                  <Link href={"https://www.celesteiq.es/"}>
                    <DropdownMenuItem>
                      Spanish
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* CTA */}
              <Button
                size="lg"
                className="bg-[#FF7A00] hover:bg-orange-500 text-white font-semibold px-5 h-9 rounded-md"
              >
                {tNav("cta")}
              </Button>
            </div>
          </nav>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Language (mobile quick access) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/90 hover:text-white hover:bg-white/10 h-9 w-9"
                  aria-label={tLang("label")}
                >
                  <Globe className="scale-125" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[160px]">
                <Link href={"https://www.celesteiq.fr/"}>
                  <DropdownMenuItem>
                    French
                  </DropdownMenuItem>
                </Link>
                <Link href={"/"}>
                  <DropdownMenuItem>
                    English
                  </DropdownMenuItem>
                </Link>
                <Link href={"https://www.celesteiq.es/"}>
                  <DropdownMenuItem>
                    Spanish
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Hamburger -> Sheet */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-lg"
                  aria-label="Open menu"
                  className="text-white/90 hover:text-white hover:bg-white/10 h-10 w-10"
                >
                  <Menu className="scale-125" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[360px]">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <Image
                      src="/weblogo.svg"
                      width={100}
                      height={100}
                      className="w-auto h-8 invert"
                      alt="logo"
                    />
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-6 p-3 flex flex-col gap-3">
                  <Link
                    href="/solutions"
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-2 text-base font-medium hover:bg-slate-100"
                  >
                    {tNav("solutions")}
                  </Link>
                  <Link
                    href="/smartpackages"
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-2 text-base font-medium hover:bg-slate-100"
                  >
                    {tNav("services")}
                  </Link>
                  <Link
                    href="/resources"
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-2 text-base font-medium hover:bg-slate-100"
                  >
                    {tNav("resources")}
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-2 text-base font-medium hover:bg-slate-100"
                  >
                    {tNav("contact")}
                  </Link>
                  <Link
                    href="#"
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-2 text-base font-medium hover:bg-slate-100"
                  >
                    {tNav("portal")}
                  </Link>

                  <Button
                    className="mt-2 bg-[#FF7A00] hover:bg-orange-500 text-white font-semibold h-10"
                    onClick={() => setOpen(false)}
                  >
                    {tNav("cta")}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
