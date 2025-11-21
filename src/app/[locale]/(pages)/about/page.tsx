import React from 'react'
import Navbar from '@/components/Navbar'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Wrapper from '../Wrapper';
import { useTranslations } from 'next-intl';

export default function About() {
    const h = useTranslations("ctaHero");
    const t = useTranslations("about");


    return (
        <>
            <Wrapper>


                <section
                    className="relative overflow-hidden bg-[#99d9f1]"
                >
                    <div
                        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <Navbar />

                        <div
                            className="relative rounded-b-[56px] px-4 py-12 sm:py-16 md:py-20 max-w-3xl mx-auto"
                            data-aos="fade-up"
                            data-aos-delay="180"
                        >
                            <h1
                                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white"
                                data-aos="fade-up"
                                data-aos-delay="220"
                            >
                                {t("title")}
                            </h1>

                            <Link href="/contact">
                                <Button
                                    className="bg-[#FF7A00] py-6 hover:bg-[#ea580c] text-white font-semibold mt-6"
                                    size={"lg"}
                                    data-aos="zoom-in"
                                    data-aos-delay="260"
                                >
                                    {t("cta")}
                                    <ArrowRight />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div
                        className="pointer-events-none absolute inset-x-0 bottom-[-1px]"
                        data-aos="fade-up"
                        data-aos-delay="320"
                    >
                        <svg
                            viewBox="0 0 1440 180"
                            className="h-[90px] w-full sm:h-[110px] md:h-[140px]"
                            preserveAspectRatio="none"
                        >
                            <path d="M0,45 C300,180 1140,180 1440,45 L1440,180 L0,180 Z" fill="#ffffff" />
                        </svg>
                    </div>
                </section>


                <section
                    className="mx-auto max-w-6xl px-4 py-12 md:py-16 lg:py-20"
                    data-aos="fade-up"
                >
                    <div
                        className="grid gap-10 lg:grid-cols-2 lg:gap-14"
                        data-aos="fade-up"
                        data-aos-delay="80"
                    >
                        {/* Left column */}
                        <div data-aos="fade-up" data-aos-delay="140">
                            <p className="text-sm font-semibold tracking-[0.2em] text-[#E65300]">
                                {t("sectionTag")}
                            </p>
                            <h1 className="mt-3 md:text-4xl font-semibold leading-tight text-[#0F0F0F] text-3xl">
                                {t("sectionHeading")}
                            </h1>

                            <div
                                className="mt-8 overflow-hidden rounded-xl ring-1 ring-black/5"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <Image
                                    src={"/about-us-hero.jpg"}
                                    alt={"image"}
                                    width={940}
                                    height={720}
                                    className="h-auto w-full object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right column */}
                        <div
                            className="max-w-prose text-lg text-[#000000]"
                            data-aos="fade-up"
                            data-aos-delay="220"
                        >
                            <p>{t("p1")}</p>
                            <p className="mt-5">{t("p2")}</p>
                            <p className="mt-5">{t("p3")}</p>
                            <p className="mt-5">{t("p4")}</p>
                            <p className="mt-5">{t("p5")}</p>
                            <p className="mt-5">{t("p6")}</p>
                        </div>
                    </div>
                </section>



                <section
                    className="mx-auto max-w-6xl px-4 py-16 md:py-20"
                    data-aos="fade-up"
                >
                    <div
                        className="text-center"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                            {t("valuesTitle")}
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl font-medium text-slate-600 md:text-base">
                            {t("valuesSubtitle")}
                        </p>
                    </div>

                    <div
                        className="mt-14 grid grid-cols-1 gap-x-20 gap-y-16 md:grid-cols-2"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        {/* Collaboration */}
                        <div
                            className="text-center"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div
                                className="mx-auto h-14 w-14"
                                data-aos="zoom-in"
                                data-aos-delay="220"
                            >
                                <Image
                                    src="/values-collaboration.png"
                                    alt="Collaboration"
                                    width={56}
                                    height={56}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <h3 className="mt-5 text-xl text-slate-800">
                                {t("values.collaboration.title")}
                            </h3>
                            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                                {t("values.collaboration.description")}
                            </p>
                        </div>

                        {/* Transparency */}
                        <div
                            className="text-center"
                            data-aos="fade-up"
                            data-aos-delay="250"
                        >
                            <div
                                className="mx-auto h-14 w-14"
                                data-aos="zoom-in"
                                data-aos-delay="270"
                            >
                                <Image
                                    src="/values-transparency.png"
                                    alt="Transparency"
                                    width={56}
                                    height={56}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <h3 className="mt-5 text-xl text-slate-800">
                                {t("values.transparency.title")}
                            </h3>
                            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                                {t("values.transparency.description")}
                            </p>
                        </div>

                        {/* Trust */}
                        <div
                            className="text-center"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div
                                className="mx-auto h-14 w-14"
                                data-aos="zoom-in"
                                data-aos-delay="320"
                            >
                                <Image
                                    src="/values-trust.png"
                                    alt="Trust"
                                    width={56}
                                    height={56}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <h3 className="mt-5 text-xl text-slate-800">
                                {t("values.trust.title")}
                            </h3>
                            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                                {t("values.trust.description")}
                            </p>
                        </div>

                        {/* Integrity */}
                        <div
                            className="text-center"
                            data-aos="fade-up"
                            data-aos-delay="350"
                        >
                            <div
                                className="mx-auto h-14 w-14"
                                data-aos="zoom-in"
                                data-aos-delay="370"
                            >
                                <Image
                                    src="/values-integrity.png"
                                    alt="Integrity"
                                    width={56}
                                    height={56}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <h3 className="mt-5 text-xl text-slate-800">
                                {t("values.integrity.title")}
                            </h3>
                            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                                {t("values.integrity.description")}
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    className="relative"
                    data-aos="fade-up"
                >
                    <div
                        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pt-10 md:grid-cols-2 md:gap-6 md:pt-16"
                        data-aos="fade-up"
                        data-aos-delay="80"
                    >
                        <div data-aos="fade-up" data-aos-delay="140">
                            <p className="text-sm font-semibold tracking-[0.22em] text-[#E65300]">
                                {t("teamTag")}
                            </p>
                            <h2 className="mt-3 md:text-4xl text-3xl font-semibold text-[#183B56]">
                                {t("teamTitle")}
                            </h2>
                            <p className="mt-5 max-w-xl text-lg text-slate-600">
                                {t("teamDescription")}
                            </p>
                            <Link href="/contact">
                                <button
                                    className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-[#1E63E9] px-5 py-3 text-sm font-semibold text-[#1E63E9] shadow-sm transition-colors hover:bg-[#1E63E9]/5"
                                    data-aos="zoom-in"
                                    data-aos-delay="200"
                                >
                                    {t("teamCta")} <ArrowRight className="h-4 w-4" />
                                </button>
                            </Link>
                        </div>

                        <div
                            className="relative w-full"
                            data-aos="zoom-in"
                            data-aos-delay="220"
                        >
                            <Image
                                src="/team-hero.png"
                                alt="Team member"
                                width={500}
                                height={500}
                                className="w-full"
                            />
                        </div>
                    </div>
                </section>


             

            </Wrapper>
        </>
    )
}
