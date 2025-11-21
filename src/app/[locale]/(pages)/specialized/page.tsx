import React from 'react'
import Wrapper from '../Wrapper'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, FolderCog, Settings, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { Separator } from "@/components/ui/separator";
import {
    GraduationCap,
    ClipboardList,
    Mail,
    ServerCog,
    CheckCircle2,
    FileCog,
} from "lucide-react";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

import { Award, Bot, Users, TrendingUp } from "lucide-react";
import Link from 'next/link'
import { useTranslations } from 'next-intl'



export default function Specialized() {

    const s = useTranslations("specialized");
    const w = useTranslations("whyCelesteIQ");

    const features = [
        {
            icon: Award,
            title: w("features.microsoftExperts.title"),
            desc: w("features.microsoftExperts.desc"),
        },
        {
            icon: Bot,
            title: w("features.aiMonitoring.title"),
            desc: w("features.aiMonitoring.desc"),
        },
        {
            icon: Users,
            title: w("features.humanSupport.title"),
            desc: w("features.humanSupport.desc"),
        },
        {
            icon: TrendingUp,
            title: w("features.flexibleScalable.title"),
            desc: w("features.flexibleScalable.desc"),
        },
    ] as const;

    return (
        <Wrapper>

            <section
                className="relative overflow-hidden bg-[#99d9f1]"
            >
                <div
                    className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center"
                    data-aos="fade-up"
                    data-aos-delay="80"
                >
                    <Navbar />

                    <div
                        className="relative rounded-b-[56px] px-4 py-12 sm:py-16 md:py-20 max-w-3xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="140"
                    >
                        <h1
                            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            {s("specializedHero.title")}
                        </h1>
                    </div>
                </div>

                <div
                    className="pointer-events-none absolute inset-x-0 bottom-[-1px]"
                    data-aos="fade-up"
                    data-aos-delay="260"
                >
                    <svg
                        viewBox="0 0 1440 180"
                        className="h-[90px] w-full sm:h-[110px] md:h-[140px]"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,45 C300,180 1140,180 1440,45 L1440,180 L0,180 Z"
                            fill="#ffffff"
                        />
                    </svg>
                </div>
            </section>



            <section
                className="py-12 sm:py-16"
                data-aos="fade-up"
            >
                <div
                    className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
                    data-aos="fade-up"
                    data-aos-delay="60"
                >
                    <div
                        className="text-center"
                        data-aos="fade-up"
                        data-aos-delay="120"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ea580c]">
                            {s("specializedIntro.title")}
                        </h2>
                        <p className="mx-auto mt-2 md:mt-3 md:text-xl font-medium max-w-2xl text-[#374151]">
                            {s("specializedIntro.subtitle")}
                        </p>
                        <div
                            className="flex items-center justify-center mt-10"
                            data-aos="zoom-in"
                            data-aos-delay="180"
                        >
                            <Link href="/smartpackages">
                                <Button
                                    className="py-6 bg-[#FF7A00] rounded-full text-white hover:bg-orange-600"
                                    size={"lg"}
                                >
                                    {s("specializedIntro.cta")}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div
                        className="grid md:mt-16 mt-8 md:grid-cols-2 md:gap-8 gap-4 grid-cols-1"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {/* 1. Training Programs */}
                        <Card
                            className="overflow-hidden rounded-2xl py-0 border bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
                            data-aos="fade-up"
                            data-aos-delay="220"
                        >
                            <div className="rounded-t-2xl p-5 bg-[#EEF4FF]">
                                <div className="border inline-flex p-2.5 rounded-lg text-[#2563EB] border-[#2563EB]/20">
                                    <GraduationCap className="h-7 w-7" />
                                </div>
                                <h2 className="text-xl font-bold mt-6">
                                    {s("specializedCards.training.badge")}
                                </h2>
                                <h3 className="mt-1 text-lg text-[#2563EB] font-semibold">
                                    {s("specializedCards.training.title")}
                                </h3>
                            </div>
                            <CardContent className="p-6">
                                <p className="mt-4 text-sm text-muted-foreground">
                                    {s("specializedCards.training.body")}
                                </p>

                                <ul className="mt-4 space-y-3 text-sm">
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#1E63E9]" />
                                        <span>{s("specializedCards.training.item1")}</span>
                                    </li>
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#1E63E9]" />
                                        <span>{s("specializedCards.training.item2")}</span>
                                    </li>
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#1E63E9]" />
                                        <span>{s("specializedCards.training.item3")}</span>
                                    </li>
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#1E63E9]" />
                                        <span>{s("specializedCards.training.item4")}</span>
                                    </li>
                                </ul>

                                <Separator className="my-5" />

                                <div>
                                    <p className="text-sm font-semibold">
                                        {s("specializedCards.training.whyTitle")}
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {s("specializedCards.training.whyBody")}
                                    </p>
                                </div>

                                <div
                                    className="mt-5"
                                    data-aos="zoom-in"
                                    data-aos-delay="260"
                                >
                                    <Button
                                        className="px-6 md:w-auto w-full"
                                        style={{ backgroundColor: "#1E63E9", color: "#fff" }}
                                    >
                                        <span className="inline md:hidden">
                                            {s("specializedCards.training.btnShort")}
                                        </span>
                                        <span className="hidden md:inline">
                                            {s("specializedCards.training.btnLong")}
                                        </span>
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* 2. Document Migration */}
                        <Card
                            className="overflow-hidden rounded-2xl py-0 border bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
                            data-aos="fade-up"
                            data-aos-delay="240"
                        >
                            <div
                                className="rounded-t-2xl p-5"
                                style={{ backgroundColor: "#E8F6ED" }}
                            >
                                <div className="border inline-flex p-2.5 rounded-lg text-[#0EA873] border-[#0EA873]/20">
                                    <FolderCog className="h-7 w-7" />
                                </div>
                                <h2 className="text-xl font-bold mt-6">
                                    {s("specializedCards.docsMigration.badge")}
                                </h2>
                                <h3
                                    className="mt-1 text-lg font-semibold"
                                    style={{ color: "#0EA873" }}
                                >
                                    {s("specializedCards.docsMigration.title")}
                                </h3>
                            </div>

                            <CardContent className="p-6">
                                <p className="mt-4 text-sm text-muted-foreground">
                                    {s("specializedCards.docsMigration.body")}
                                </p>

                                <ul className="mt-4 space-y-3 text-sm">
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0EA873]" />
                                        <span>{s("specializedCards.docsMigration.item1")}</span>
                                    </li>
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0EA873]" />
                                        <span>{s("specializedCards.docsMigration.item2")}</span>
                                    </li>
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0EA873]" />
                                        <span>{s("specializedCards.docsMigration.item3")}</span>
                                    </li>
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0EA873]" />
                                        <span>{s("specializedCards.docsMigration.item4")}</span>
                                    </li>
                                </ul>

                                <Separator className="my-5" />

                                <div>
                                    <p className="text-sm font-semibold">
                                        {s("specializedCards.docsMigration.whyTitle")}
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {s("specializedCards.docsMigration.whyBody")}
                                    </p>
                                </div>

                                <div
                                    className="mt-5"
                                    data-aos="zoom-in"
                                    data-aos-delay="280"
                                >
                                    <Button
                                        className="px-6 md:w-auto w-full"
                                        style={{ backgroundColor: "#0EA873", color: "#fff" }}
                                    >
                                        <span className="inline md:hidden">
                                            {s("specializedCards.docsMigration.btnShort")}
                                        </span>
                                        <span className="hidden md:inline">
                                            {s("specializedCards.docsMigration.btnLong")}
                                        </span>
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* 3. Email Migration */}
                        <Card
                            className="overflow-hidden rounded-2xl py-0 border bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
                            data-aos="fade-up"
                            data-aos-delay="260"
                        >
                            <div
                                className="rounded-t-2xl p-5"
                                style={{ backgroundColor: "#E8F6F9" }}
                            >
                                <div className="border inline-flex p-2.5 rounded-lg text-[#0891B2] border-[#0891B2]/20">
                                    <Mail className="h-7 w-7" />
                                </div>
                                <h2 className="text-xl font-bold mt-6">
                                    {s("specializedCards.emailMigration.badge")}
                                </h2>
                                <h3
                                    className="mt-1 text-lg font-semibold"
                                    style={{ color: "#0891B2" }}
                                >
                                    {s("specializedCards.emailMigration.title")}
                                </h3>
                            </div>

                            <CardContent className="p-6">
                                <p className="mt-4 text-sm text-muted-foreground">
                                    {s("specializedCards.emailMigration.body")}
                                </p>

                                <ul className="mt-4 space-y-3 text-sm">
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0891B2]" />
                                        <span>{s("specializedCards.emailMigration.item1")}</span>
                                    </li>
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0891B2]" />
                                        <span>{s("specializedCards.emailMigration.item2")}</span>
                                    </li>
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0891B2]" />
                                        <span>{s("specializedCards.emailMigration.item3")}</span>
                                    </li>
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0891B2]" />
                                        <span>{s("specializedCards.emailMigration.item4")}</span>
                                    </li>
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#0891B2]" />
                                        <span>{s("specializedCards.emailMigration.item5")}</span>
                                    </li>
                                </ul>

                                <Separator className="my-5" />

                                <div>
                                    <p className="text-sm font-semibold">
                                        {s("specializedCards.emailMigration.whyTitle")}
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {s("specializedCards.emailMigration.whyBody")}
                                    </p>
                                </div>

                                <div
                                    className="mt-5"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                >
                                    <Button
                                        className="px-6 md:w-auto w-full"
                                        style={{ backgroundColor: "#0891B2", color: "#fff" }}
                                    >
                                        <span className="inline md:hidden">
                                            {s("specializedCards.emailMigration.btnShort")}
                                        </span>
                                        <span className="hidden md:inline">
                                            {s("specializedCards.emailMigration.btnLong")}
                                        </span>
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* 4. Managed IT & Cloud */}
                        <Card
                            className="overflow-hidden rounded-2xl py-0 border bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
                            data-aos="fade-up"
                            data-aos-delay="280"
                        >
                            <div
                                className="rounded-t-2xl p-5"
                                style={{ backgroundColor: "#FFF3EA" }}
                            >
                                <div className="border inline-flex p-2.5 rounded-lg text-[#EA580C] border-[#EA580C]/20">
                                    <Settings className="h-7 w-7" />
                                </div>
                                <h2 className="text-xl font-bold mt-6">
                                    {s("specializedCards.managedIt.badge")}
                                </h2>
                                <h3
                                    className="mt-1 text-lg font-semibold"
                                    style={{ color: "#EA580C" }}
                                >
                                    {s("specializedCards.managedIt.title")}
                                </h3>
                            </div>

                            <CardContent className="p-6">
                                <p className="mt-4 text-sm text-muted-foreground">
                                    {s("specializedCards.managedIt.body")}
                                </p>

                                <ul className="mt-4 space-y-3 text-sm">
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#EA580C]" />
                                        <span>{s("specializedCards.managedIt.item1")}</span>
                                    </li>
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#EA580C]" />
                                        <span>{s("specializedCards.managedIt.item2")}</span>
                                    </li>
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#EA580C]" />
                                        <span>{s("specializedCards.managedIt.item3")}</span>
                                    </li>
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#EA580C]" />
                                        <span>{s("specializedCards.managedIt.item4")}</span>
                                    </li>
                                    <li className="flex gap-3 leading-relaxed">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#EA580C]" />
                                        <span>{s("specializedCards.managedIt.item5")}</span>
                                    </li>
                                </ul>

                                <Separator className="my-5" />

                                <div>
                                    <p className="text-sm font-semibold">
                                        {s("specializedCards.managedIt.whyTitle")}
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {s("specializedCards.managedIt.whyBody")}
                                    </p>
                                </div>

                                <div
                                    className="mt-5"
                                    data-aos="zoom-in"
                                    data-aos-delay="320"
                                >
                                    <Button
                                        className="px-6 md:w-auto w-full"
                                        style={{ backgroundColor: "#EA580C", color: "#fff" }}
                                    >
                                        <span className="inline md:hidden">
                                            {s("specializedCards.managedIt.btnShort")}
                                        </span>
                                        <span className="hidden md:inline">
                                            {s("specializedCards.managedIt.btnLong")}
                                        </span>
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>


            <section
                className="relative overflow-hidden mb-5"
                aria-labelledby="why-celesteiq-heading"
                data-aos="fade-up"
            >
                {/* Background gradient */}
                <div
                    className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FF7A18] via-[#FF6A00] to-[#FF3E00]"
                    data-aos="fade-up"
                    data-aos-delay="60"
                />
                {/* Subtle radial glow */}
                <div
                    className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background:radial-gradient(60%_50%_at_50%_20%,_#ffffff66_0%,_transparent_60%)]"
                    data-aos="fade-up"
                    data-aos-delay="100"
                />

                <div
                    className="mx-auto max-w-6xl px-4 py-16 md:py-20 lg:py-24 text-white"
                    data-aos="fade-up"
                    data-aos-delay="140"
                >
                    <h2
                        id="why-celesteiq-heading"
                        className="text-center text-3xl font-bold tracking-tight md:text-4xl"
                        data-aos="fade-up"
                        data-aos-delay="180"
                    >
                        {w("title")}
                    </h2>
                    <p
                        className="mt-2 text-center md:text-lg md:mt-3 font-medium"
                        data-aos="fade-up"
                        data-aos-delay="210"
                    >
                        {w("subtitle")}
                    </p>

                    {/* Feature cards */}
                    <div
                        className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-4"
                        data-aos="fade-up"
                        data-aos-delay="240"
                    >
                        {features.map(({ icon: Icon, title, desc }, idx) => (
                            <Card
                                key={title}
                                className="rounded-2xl border-white/20 bg-white/10 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] BG-[#f5792a] transition-transform hover:-translate-y-0.5"
                                data-aos="fade-up"
                                data-aos-delay={260 + idx * 40}
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start flex-col gap-4">
                                        <Icon className="h-9 w-9" />
                                        <div>
                                            <h3 className="font-bold leading-tight">{title}</h3>
                                            <p className="mt-2 text-sm text-white/80">{desc}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Quote */}
                    <p
                        className="mx-auto mt-10 max-w-4xl text-center italic font-light md:mt-12 md:text-2xl"
                        data-aos="fade-up"
                        data-aos-delay="320"
                    >
                        {w("quote")}
                    </p>

                    {/* CTA */}
                    <div
                        className="mt-6 flex justify-center md:mt-8"
                        data-aos="zoom-in"
                        data-aos-delay="360"
                    >
                        <Link href="/contact">
                            <Button
                                className="p-6 rounded-lg bg-white px-5 text-black font-semibold hover:bg-white/90"
                                type="button"
                            >
                                {w("cta")}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>



        </Wrapper>
    )
}