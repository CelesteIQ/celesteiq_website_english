import React from 'react'
import Wrapper from '../Wrapper'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { ArrowRight, Brain, ChartLine, Check, CircleCheckBig, Eye, FolderCog, HeadphoneOff, Headphones, Settings, Shield, Sparkles } from 'lucide-react'
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


export default function Smartaudits() {
    const orange = "#E65300";
    const s = useTranslations("smartAudits");

    return (
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
                            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white"
                            data-aos="fade-up"
                            data-aos-delay="220"
                        >
                            {s("heroTitle")}
                        </h1>
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
                className="py-12 sm:py-16"
                data-aos="fade-up"
            >
                <div
                    className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
                    data-aos="fade-up"
                    data-aos-delay="80"
                >
                    <div className="text-center">
                        <div
                            className="flex items-center justify-center"
                            data-aos="zoom-in"
                            data-aos-delay="120"
                        >
                            <Brain className="h-20 w-20 mb-5 text-[#FF7A00]" />
                        </div>

                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ea580c]"
                            data-aos="fade-up"
                            data-aos-delay="160"
                        >
                            {s("sectionTitle")}
                        </h2>

                        <p
                            className="mx-auto mt-2 md:mt-3 md:text-xl font-medium max-w-2xl text-[#374151]"
                            data-aos="fade-up"
                            data-aos-delay="190"
                        >
                            {s("sectionSubtitle")}
                        </p>

                        <p
                            className="mx-auto mt-2 md:mt-3 max-w-2xl text-[#374151]"
                            data-aos="fade-up"
                            data-aos-delay="220"
                        >
                            {s("sectionBody")}
                        </p>

                        <div
                            className="flex items-center justify-center mt-10"
                            data-aos="zoom-in"
                            data-aos-delay="260"
                        >
                            <Link href="/smartpackages">
                                <Button
                                    className="py-6 bg-[#FF7A00] rounded-full text-white hover:bg-orange-600"
                                    size={"lg"}
                                >
                                    {s("sectionCta")}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>



            <section
                className="relative overflow-hidden"
                aria-labelledby="iwa-heading"
                data-aos="fade-up"
            >
                {/* Background */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50/70 to-white" />

                <div
                    className="mx-auto grid max-w-6xl grid-cols-1 gap-10 items-start px-4 py-12 md:gap-12 md:py-16 lg:grid-cols-2 lg:py-20"
                    data-aos="fade-up"
                    data-aos-delay="80"
                >
                    {/* Left column */}
                    <div data-aos="fade-up" data-aos-delay="120">
                        <h2
                            id="iwa-heading"
                            className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl"
                        >
                            {s("iwaTitle")}
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg font-semibold text-[#E65300]">
                            {s("iwaSubtitle")}
                        </p>
                        <p className="mt-4 max-w-2xl font-medium leading-relaxed text-[#374151]">
                            {s("iwaBody")}
                        </p>

                        <div className="mt-8 grid grid-cols-1 gap-8">
                            {/* What do we evaluate? */}
                            <div data-aos="fade-up" data-aos-delay="160">
                                <h3 className="text-base font-semibold text-slate-900">
                                    {s("iwaWhatWeEvaluateTitle")}
                                </h3>
                                <ul className="mt-3 space-y-3">
                                    <li className="flex gap-2 leading-relaxed text-sm text-slate-700 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#2563EB] w-4" />
                                        <span>{s("iwaEvaluatePoints.1")}</span>
                                    </li>
                                    <li className="flex gap-2 leading-relaxed text-sm text-slate-700 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#2563EB] w-4" />
                                        <span>{s("iwaEvaluatePoints.2")}</span>
                                    </li>
                                    <li className="flex gap-2 leading-relaxed text-sm text-slate-700 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#2563EB] w-4" />
                                        <span>{s("iwaEvaluatePoints.3")}</span>
                                    </li>
                                    <li className="flex gap-2 leading-relaxed text-sm text-slate-700 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#2563EB] w-4" />
                                        <span>{s("iwaEvaluatePoints.4")}</span>
                                    </li>
                                    <li className="flex gap-2 leading-relaxed text-sm text-slate-700 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#2563EB] w-4" />
                                        <span>{s("iwaEvaluatePoints.5")}</span>
                                    </li>
                                    <li className="flex gap-2 leading-relaxed text-sm text-slate-700 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#2563EB] w-4" />
                                        <span>{s("iwaEvaluatePoints.6")}</span>
                                    </li>
                                </ul>
                            </div>

                            {/* What do you receive? */}
                            <div data-aos="fade-up" data-aos-delay="190">
                                <h3 className="text-base font-semibold text-slate-900">
                                    {s("iwaWhatYouReceiveTitle")}
                                </h3>
                                <ul className="mt-3 space-y-3">
                                    <li className="flex gap-2 leading-relaxed text-sm text-slate-700 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#2563EB] w-4" />
                                        <span>{s("iwaReceivePoints.1")}</span>
                                    </li>
                                    <li className="flex gap-2 leading-relaxed text-sm text-slate-700 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#2563EB] w-4" />
                                        <span>{s("iwaReceivePoints.2")}</span>
                                    </li>
                                    <li className="flex gap-2 leading-relaxed text-sm text-slate-700 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#2563EB] w-4" />
                                        <span>{s("iwaReceivePoints.3")}</span>
                                    </li>
                                    <li className="flex gap-2 leading-relaxed text-sm text-slate-700 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#2563EB] w-4" />
                                        <span>{s("iwaReceivePoints.4")}</span>
                                    </li>
                                    <li className="flex gap-2 leading-relaxed text-sm text-slate-700 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#2563EB] w-4" />
                                        <span>{s("iwaReceivePoints.5")}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div
                            className="mt-8"
                            data-aos="zoom-in"
                            data-aos-delay="220"
                        >
                            <Link href="/contact">
                                <Button
                                    type="button"
                                    className="h-11 rounded-full bg-[#E65300] px-6 text-white hover:bg-[#d14900]"
                                >
                                    {s("iwaCta")}{" "}
                                    <span className="md:inline hidden">Audit</span>
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right column */}
                    <Card
                        className="overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-[#DBEAFE] to-[#CFFAFE] shadow-[0_20px_60px_rgba(2,84,196,0.12)]"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <CardContent className="p-6 md:p-8">
                            <div
                                className="flex items-center justify-center gap-4 text-[#2563EB]"
                                data-aos="zoom-in"
                                data-aos-delay="230"
                            >
                                <Users className="h-14 w-14" />
                                <span className="text-5xl font-semibold text-[#2563EB]">+</span>
                                <Brain className="h-14 w-14 text-[#0891B2]" />
                            </div>

                            <div className="mx-auto mt-6 grid max-w-md grid-cols-1 gap-4 md:max-w-none md:grid-cols-2">
                                <div
                                    className="rounded-xl border border-sky-100 bg-white px-6 py-4 text-center shadow-[0_6px_20px_rgba(2,84,196,0.08)]"
                                    data-aos="fade-up"
                                    data-aos-delay="250"
                                >
                                    <div className="text-xl text-[#2563EB]">Teams</div>
                                    <div className="mt-1 text-xs text-slate-500">
                                        {s("iwaCardOptimized")}
                                    </div>
                                </div>
                                <div
                                    className="rounded-xl border border-sky-100 bg-white px-6 py-4 text-center shadow-[0_6px_20px_rgba(2,84,196,0.08)]"
                                    data-aos="fade-up"
                                    data-aos-delay="270"
                                >
                                    <div className="text-xl text-[#2563EB]">SharePoint</div>
                                    <div className="mt-1 text-xs text-slate-500">
                                        {s("iwaCardOptimized")}
                                    </div>
                                </div>
                                <div
                                    className="rounded-xl border border-sky-100 bg-white px-6 py-4 text-center shadow-[0_6px_20px_rgba(2,84,196,0.08)]"
                                    data-aos="fade-up"
                                    data-aos-delay="290"
                                >
                                    <div className="text-xl text-[#2563EB]">OneDrive</div>
                                    <div className="mt-1 text-xs text-slate-500">
                                        {s("iwaCardOptimized")}
                                    </div>
                                </div>
                                <div
                                    className="rounded-xl border border-sky-100 bg-white px-6 py-4 text-center shadow-[0_6px_20px_rgba(2,84,196,0.08)]"
                                    data-aos="fade-up"
                                    data-aos-delay="310"
                                >
                                    <div className="text-xl text-[#2563EB]">Copilot</div>
                                    <div className="mt-1 text-xs text-slate-500">
                                        {s("iwaCardOptimized")}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>



            <section
                className="relative overflow-hidden"
                aria-labelledby="isa-heading"
                data-aos="fade-up"
            >
                {/* Background */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50/80 to-white" />

                <div
                    className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 md:gap-12 md:py-16 lg:grid-cols-2 lg:py-20"
                    data-aos="fade-up"
                    data-aos-delay="80"
                >
                    {/* Left graphic */}
                    <div
                        className="order-2 hidden items-center justify-center lg:order-1 lg:flex"
                        data-aos="zoom-in"
                        data-aos-delay="140"
                    >
                        <div className="flex h-72 w-72 items-center justify-center rounded-full border-[6px] border-[#60A5FA] bg-white/40 shadow-[inset_0_0_40px_rgba(2,84,196,0.08)]">
                            <Shield className="h-40 w-40 text-[#FB923C]" strokeWidth={2.5} />
                        </div>
                    </div>

                    {/* Right content */}
                    <div
                        className="order-1 lg:order-2"
                        data-aos="fade-up"
                        data-aos-delay="120"
                    >
                        <h2
                            id="isa-heading"
                            className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
                        >
                            {s("isaTitle")}
                        </h2>
                        <p className="mt-3 text-[17px] font-semibold text-[#FDBA74]">
                            {s("isaSubtitle")}
                        </p>
                        <p className="mt-4 max-w-2xl text-slate-700">
                            {s("isaBody")}
                        </p>

                        <div className="mt-8 grid grid-cols-1 gap-8">
                            <div
                                data-aos="fade-up"
                                data-aos-delay="160"
                            >
                                <h3 className="text-xl text-black">
                                    {s("isaAnalyzeTitle")}
                                </h3>
                                <ul className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                                    <li className="flex gap-3 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#FB923C] w-4" />
                                        {s("isaAnalyzePoints.1")}
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#FB923C] w-4" />
                                        {s("isaAnalyzePoints.2")}
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#FB923C] w-4" />
                                        {s("isaAnalyzePoints.3")}
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#FB923C] w-4" />
                                        {s("isaAnalyzePoints.4")}
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#FB923C] w-4" />
                                        {s("isaAnalyzePoints.5")}
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#FB923C] w-4" />
                                        {s("isaAnalyzePoints.6")}
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#FB923C] w-4" />
                                        {s("isaAnalyzePoints.7")}
                                    </li>
                                </ul>
                            </div>

                            <div
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <h3 className="text-xl text-black">
                                    {s("isaReceiveTitle")}
                                </h3>
                                <ul className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                                    <li className="flex gap-3 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#2563EB] w-4" />
                                        {s("isaReceivePoints.1")}
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#2563EB] w-4" />
                                        {s("isaReceivePoints.2")}
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#2563EB] w-4" />
                                        {s("isaReceivePoints.3")}
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#2563EB] w-4" />
                                        {s("isaReceivePoints.4")}
                                    </li>
                                    <li className="flex gap-3 items-center">
                                        <CircleCheckBig className="h-4 shrink-0 text-[#2563EB] w-4" />
                                        {s("isaReceivePoints.5")}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div
                            className="mt-8"
                            data-aos="zoom-in"
                            data-aos-delay="240"
                        >
                            <Link href="/contact">
                                <Button
                                    type="button"
                                    className="rounded-full bg-[#E65300] p-6 text-white hover:bg-[#d14900]"
                                >
                                    {s("isaCta")}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            <section
                className="relative overflow-hidden mb-16"
                aria-labelledby="why-audit-heading"
                data-aos="fade-up"
            >
                <div
                    className="mx-auto max-w-6xl px-4 py-16 md:py-20 text-center"
                    data-aos="fade-up"
                    data-aos-delay="80"
                >
                    {/* Heading */}
                    <h2
                        id="why-audit-heading"
                        className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl"
                        data-aos="fade-up"
                        data-aos-delay="120"
                    >
                        {s("whyTitle")}
                    </h2>
                    <p
                        className="mt-3 text-gray-500 md:text-lg"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        {s("whySubtitle")}
                    </p>

                    {/* Feature Cards */}
                    <div
                        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                        data-aos="fade-up"
                        data-aos-delay="180"
                    >
                        {/* Card 1 */}
                        <div
                            className="rounded-2xl bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)] text-left transition-transform hover:-translate-y-1"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#ea580c] text-white">
                                <Eye />
                            </div>
                            <h3 className="font-medium text-lg text-gray-900">
                                {s("whyCards.1.title")}
                            </h3>
                            <p className="mt-2 text-[#4B5563]">
                                {s("whyCards.1.description")}
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div
                            className="rounded-2xl bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)] text-left transition-transform hover:-translate-y-1"
                            data-aos="fade-up"
                            data-aos-delay="230"
                        >
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#ea580c] text-white">
                                <ChartLine />
                            </div>
                            <h3 className="font-medium text-lg text-gray-900">
                                {s("whyCards.2.title")}
                            </h3>
                            <p className="mt-2 text-[#4B5563]">
                                {s("whyCards.2.description")}
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div
                            className="rounded-2xl bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)] text-left transition-transform hover:-translate-y-1"
                            data-aos="fade-up"
                            data-aos-delay="260"
                        >
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#ea580c] text-white">
                                <CheckCircle2 />
                            </div>
                            <h3 className="font-medium text-lg text-gray-900">
                                {s("whyCards.3.title")}
                            </h3>
                            <p className="mt-2 text-[#4B5563]">
                                {s("whyCards.3.description")}
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div
                            className="rounded-2xl bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)] text-left transition-transform hover:-translate-y-1"
                            data-aos="fade-up"
                            data-aos-delay="290"
                        >
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#ea580c] text-white">
                                <Headphones />
                            </div>
                            <h3 className="font-medium text-lg text-gray-900">
                                {s("whyCards.4.title")}
                            </h3>
                            <p className="mt-2 text-[#4B5563]">
                                {s("whyCards.4.description")}
                            </p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div
                        className="mt-10 flex justify-center"
                        data-aos="zoom-in"
                        data-aos-delay="330"
                    >
                        <Link href="/contact">
                            <Button
                                className="rounded-full bg-[#EA580C] p-6 text-white font-semibold hover:bg-[#d94f09] shadow-md"
                                type="button"
                            >
                                {s("whyCtaMain")}{" "}
                                <span className="md:inline hidden">
                                    {" "}
                                    {s("whyCtaTail")}
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

        </Wrapper>
    )
}