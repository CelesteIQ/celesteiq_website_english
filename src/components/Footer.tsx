"use client";

import * as React from "react";
import { Linkedin, Twitter, Facebook, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
    const t = useTranslations("footer");

    return (
        <footer className="bg-[#111827] text-slate-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                    {/* Brand + Description + Social */}
                    <div className="space-y-4">
                        <Link href="/">
                            <Image
                                src="/weblogo.svg"
                                width={100}
                                height={100}
                                className="w-auto h-12"
                                alt="logo"
                            />
                        </Link>
                        <p className="max-w-xs text-sm text-[#9CA3AF] mt-6">
                            {t("description")}
                        </p>
                        <div className="flex items-center gap-2">
                            <Link
                                href="#"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                            >
                                <Linkedin className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                            >
                                <Twitter className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                            >
                                <Facebook className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="xl:pl-10">
                        <h4 className="text-white font-semibold">
                            {t("company.title")}
                        </h4>
                        <ul className="mt-4 space-y-3 text-[#9CA3AF]">
                            <li>
                                <Link href="/about" className="hover:text-white">
                                    {t("company.about")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white">
                                    {t("company.contact")}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    {t("company.support")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white font-semibold">
                            {t("resources.title")}
                        </h4>
                        <ul className="mt-4 space-y-3 text-[#9CA3AF]">
                            <li>
                                <Link href="/faq" className="hover:text-white">
                                    {t("resources.faq")}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    {t("resources.privacy")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/legalnotices" className="hover:text-white">
                                    {t("resources.terms")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold">
                            {t("contact.title")}
                        </h4>
                        <ul className="mt-4 space-y-3 text-[#9CA3AF]">
                            <li className="flex items-start gap-3">
                                <Phone className="mt-0.5 h-4 w-4 text-[#FF7A00]" />
                                <Link
                                    href="tel:+33142389811"
                                    className="hover:text-white transition-colors"
                                >
                                    +33 1 42 38 98 11
                                </Link>
                            </li>

                            <li className="flex items-start gap-3">
                                <Mail className="mt-0.5 h-4 w-4 text-[#FF7A00]" />
                                <Link
                                    href="mailto:hello@celesteiq.com"
                                    className="hover:text-white transition-colors"
                                >
                                    hello@celesteiq.com
                                </Link>
                            </li>

                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 text-[#FF7A00]" />
                                <span className="whitespace-pre-line">
                                    {t("contact.address")}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 md:text-start text-center border-t border-white/10 pt-6">
                    <p className="text-sm font-semibold text-[#FF7A00]">
                        {t("bottom.tagline")}
                    </p>

                    <div className="mt-2 flex flex-col gap-2 text-xs text-[#9CA3AF] sm:flex-row sm:items-center sm:justify-between">
                        <p>{t("bottom.copyright")}</p>
                        <div className="flex items-center md:justify-start justify-center text-[#9CA3AF] gap-6">
                            <Link href="#" className="hover:text-white">
                                {t("bottom.privacyPolicy")}
                            </Link>
                            <Link href="/legalnotices" className="hover:text-white">
                                {t("bottom.terms")}
                            </Link>
                            <Link href="#" className="hover:text-white">
                                {t("bottom.cookiePolicy")}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
