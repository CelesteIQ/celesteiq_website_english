import React from 'react'
import Navbar from '@/components/Navbar'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Lock, MessageSquare, Shield, Users } from "lucide-react";
import { Brain, Layers } from "lucide-react";
import { CheckCircle2, Info } from "lucide-react";
import { ShieldCheck, Activity, AlertTriangle, Database } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Zap, TrendingUp, Box, Users2 } from "lucide-react";
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import Wrapper from '../Wrapper';

export default function SmartPackages() {

    const s = useTranslations("smartpackages");


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
                        className="relative rounded-b-[56px] px-4 py-12 sm:py-16 md:py-20"
                        data-aos="fade-up"
                        data-aos-delay="180"
                    >
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white"
                            data-aos="fade-up"
                            data-aos-delay="220"
                        >
                            <span className="block">{s("hero.line1")}</span>
                            <span className="block text-[#FF7A00]">{s("hero.line2")}</span>
                            <span className="block">{s("hero.line3")}</span>
                        </h1>
                        <p
                            className="mx-auto mt-4 max-w-2xl font-semibold text-xl text-white"
                            data-aos="fade-up"
                            data-aos-delay="260"
                        >
                            {s("hero.subtitle")}
                        </p>
                    </div>
                </div>

                <div
                    className="pointer-events-none absolute inset-x-0 bottom-[-1px]"
                    data-aos="fade-up"
                    data-aos-delay="300"
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
                className=""
                data-aos="fade-up"
            >
                <div
                    className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12"
                    data-aos="fade-up"
                    data-aos-delay="80"
                >
                    <p
                        className="mx-auto max-w-3xl text-center text-2xl text-black"
                        data-aos="fade-up"
                        data-aos-delay="120"
                    >
                        {s("cta.text")}
                    </p>

                    <div
                        className="mt-5 flex flex-wrap items-center justify-center gap-3"
                        data-aos="fade-up"
                        data-aos-delay="160"
                    >
                        <Button
                            asChild
                            size={"lg"}
                            className="py-6 bg-[#FF7A00] md:w-auto w-full px-5 text-white hover:bg-[#ea580c]"
                        >
                            <Link href="#pack">{s("cta.primary")}</Link>
                        </Button>
                        <Button
                            variant="outline"
                            asChild
                            size={"lg"}
                            className="py-6 border-[#FF7A00] md:w-auto w-full text-[#ea580c] hover:bg-orange-50"
                        >
                            <Link href="/contact" className="inline-flex items-center gap-2">
                                <MessageSquare className="h-4 w-4" />
                                <span>{s("cta.secondary")}</span>
                            </Link>
                        </Button>
                    </div>

                    <div
                        className="mt-6 md:mt-10 rounded-3xl max-w-3xl mx-auto bg-white p-5 py-14 shadow-[0_24px_60px_rgba(2,6,23,0.12)] ring-1 ring-black/5"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                            <div
                                className="flex flex-col items-center gap-3"
                                data-aos="fade-up"
                                data-aos-delay="220"
                            >
                                <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-md bg-orange-100">
                                    <Image
                                        src="/pkg-ai.png"
                                        alt={s("cta.stack.ai")}
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 object-cover"
                                    />
                                </div>
                                <span className="text-sm font-medium text-slate-700">
                                    {s("cta.stack.ai")}
                                </span>
                            </div>

                            <div
                                className="flex flex-col items-center gap-3"
                                data-aos="fade-up"
                                data-aos-delay="240"
                            >
                                <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-md bg-orange-100">
                                    <Image
                                        src="/pkg-m365.png"
                                        alt={s("cta.stack.m365")}
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 object-cover"
                                    />
                                </div>
                                <span className="text-sm font-medium text-slate-700">
                                    {s("cta.stack.m365")}
                                </span>
                            </div>

                            <div
                                className="flex flex-col items-center gap-3"
                                data-aos="fade-up"
                                data-aos-delay="260"
                            >
                                <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-md bg-orange-100">
                                    <Image
                                        src="/pkg-azure.png"
                                        alt={s("cta.stack.azure")}
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 object-cover"
                                    />
                                </div>
                                <span className="text-sm font-medium text-slate-700">
                                    {s("cta.stack.azure")}
                                </span>
                            </div>

                            <div
                                className="flex flex-col items-center gap-3"
                                data-aos="fade-up"
                                data-aos-delay="280"
                            >
                                <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-md bg-orange-100">
                                    <Image
                                        src="/pkg-power.png"
                                        alt={s("cta.stack.power")}
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 object-cover"
                                    />
                                </div>
                                <span className="text-sm font-medium text-slate-700">
                                    {s("cta.stack.power")}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section
                className=""
                data-aos="fade-up"
            >
                <div
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20"
                    data-aos="fade-up"
                    data-aos-delay="80"
                >
                    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                        {/* Left column */}
                        <div
                            className="max-w-2xl"
                            data-aos="fade-up"
                            data-aos-delay="120"
                        >
                            <h2 className="text-3xl sm:text-5xl font-medium leading-[1.05] tracking-tight text-slate-900">
                                <span className="block">{s("intro.titleLine1")}</span>
                                <span className="block">{s("intro.titleLine2")}</span>
                                <span className="block text-[#FF7A00]">{s("intro.titleLine3")}</span>
                            </h2>
                            <p className="mt-4 text-slate-600">
                                {s("intro.body1")}
                            </p>
                            <p className="mt-5 font-medium text-lg text-slate-900">
                                {s("intro.body2")}
                            </p>

                            <div className="mt-6 space-y-4">
                                <div
                                    className="flex items-center gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="160"
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#FFD8B4] text-[#ea580c]">
                                        <Zap className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <p className="font-medium text-slate-900">
                                            {s("intro.bullets.speedTitle")}
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            {s("intro.bullets.speedDesc")}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="flex items-center gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="190"
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#FFD8B4] text-[#ea580c]">
                                        <Brain className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <p className="font-medium text-slate-900">
                                            {s("intro.bullets.aiTitle")}
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            {s("intro.bullets.aiDesc")}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="flex items-center gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="220"
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#FFD8B4] text-[#ea580c]">
                                        <Layers className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <p className="font-medium text-slate-900">
                                            {s("intro.bullets.evolutionTitle")}
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            {s("intro.bullets.evolutionDesc")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right column */}
                        <div
                            className="rounded-3xl bg-[#FBEADA] p-5 sm:p-6 md:p-7 ring-1 ring-orange-100 shadow-sm"
                            data-aos="fade-up"
                            data-aos-delay="180"
                        >
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div
                                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <div className="flex items-start flex-col gap-3">
                                        <span className="grid h-9 w-9 place-items-center rounded-md bg-[#f3b08c] text-sm font-semibold text-white">
                                            Az
                                        </span>
                                        <div>
                                            <p className="text-slate-900">{s("intro.cards.azureTitle")}</p>
                                            <p className="text-xs text-slate-500">
                                                {s("intro.cards.azureSubtitle")}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
                                    data-aos="fade-up"
                                    data-aos-delay="220"
                                >
                                    <div className="flex items-start flex-col gap-3">
                                        <span className="grid h-9 w-9 place-items-center rounded-md bg-[#f3b08c] text-sm font-semibold text-white">
                                            M
                                        </span>
                                        <div>
                                            <p className="text-slate-900">{s("intro.cards.m365Title")}</p>
                                            <p className="text-xs text-slate-500">
                                                {s("intro.cards.m365Subtitle")}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
                                    data-aos="fade-up"
                                    data-aos-delay="240"
                                >
                                    <div className="flex items-start flex-col gap-3">
                                        <span className="grid h-9 w-9 place-items-center rounded-md bg-[#f3b08c] text-sm font-semibold text-white">
                                            P
                                        </span>
                                        <div>
                                            <p className="text-slate-900">{s("intro.cards.powerTitle")}</p>
                                            <p className="text-xs text-slate-500">
                                                {s("intro.cards.powerSubtitle")}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
                                    data-aos="fade-up"
                                    data-aos-delay="260"
                                >
                                    <div className="flex items-start flex-col gap-3">
                                        <span className="grid h-9 w-9 place-items-center rounded-md bg-[#f3b08c] text-sm font-semibold text-white">
                                            <Brain className="h-4 w-4" />
                                        </span>
                                        <div>
                                            <p className="text-slate-900">
                                                {s("intro.cards.copilotTitle")}
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                {s("intro.cards.copilotSubtitle")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="mt-5 rounded-xl bg-[#fdf7f0] p-4 ring-1 ring-black/5"
                                data-aos="fade-up"
                                data-aos-delay="280"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <span className="flex justify-center items-center">
                                        <span className="-ml-2 flex h-6 w-6 items-center justify-center border border-[#fdf7f0] rounded-full bg-[#ed8c58] text-[11px] font-semibold text-white">
                                            1
                                        </span>
                                        <span className="-ml-2 flex h-6 w-6 items-center justify-center border border-[#fdf7f0] rounded-full bg-[#ed8c58] text-[11px] font-semibold text-white">
                                            2
                                        </span>
                                        <span className="-ml-2 flex h-6 w-6 items-center justify-center border border-[#fdf7f0] rounded-full bg-[#ed8c58] text-[11px] font-semibold text-white">
                                            3
                                        </span>
                                        <span className="-ml-2 flex h-6 w-6 items-center justify-center border border-[#fdf7f0] rounded-full bg-[#ed8c58] text-[11px] font-semibold text-white">
                                            4
                                        </span>
                                    </span>
                                    <span className="text-sm text-slate-700">
                                        {s("intro.cards.ecosystem")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id='pack'
                className="bg-gradient-to-b from-slate-50 to-white py-12 md:py-16"
                data-aos="fade-up"
            >
                <div
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                    data-aos="fade-up"
                    data-aos-delay="60"
                >
                    <div
                        className="rounded-[28px] bg-white md:p-8 p-4 shadow-[0_24px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5"
                        data-aos="fade-up"
                        data-aos-delay="120"
                    >
                        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                            {/* Image column */}
                            <div
                                className="order-2 md:order-1"
                                data-aos="zoom-in"
                                data-aos-delay="180"
                            >
                                <Image
                                    src="/it-pack-dashboard.png"
                                    alt={s("pack1.title")}
                                    width={760}
                                    height={520}
                                    className="h-auto w-full object-cover"
                                />
                            </div>

                            {/* Content column */}
                            <div
                                className="order-1 md:order-2"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-[11px] font-semibold text-[#ea580c]">
                                    {s("pack1.badge")}
                                </div>

                                <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                                    {s("pack1.title")}
                                </h2>

                                <p className="text-3xl sm:text-4xl font-semibold leading-snug text-[#FF7A00]">
                                    {s("pack1.highlightLine1")}
                                    <br className="hidden sm:block" /> {s("pack1.highlightLine2")}
                                </p>

                                <p className="mt-3 max-w-xl text-slate-600">
                                    {s("pack1.description")}
                                </p>

                                <ul className="mt-5 space-y-3 text-slate-700">
                                    <li
                                        className="flex items-start gap-3"
                                        data-aos="fade-up"
                                        data-aos-delay="230"
                                    >
                                        <div className="p-1 rounded-full bg-[#ffedd5]">
                                            <CheckCircle2 className="h-4 w-4 text-[#ff7a00]" />
                                        </div>
                                        {s("pack1.bullets.1")}
                                    </li>
                                    <li
                                        className="flex items-start gap-3"
                                        data-aos="fade-up"
                                        data-aos-delay="250"
                                    >
                                        <div className="p-1 rounded-full bg-[#ffedd5]">
                                            <CheckCircle2 className="h-4 w-4 text-[#ff7a00]" />
                                        </div>
                                        {s("pack1.bullets.2")}
                                    </li>
                                    <li
                                        className="flex items-start gap-3"
                                        data-aos="fade-up"
                                        data-aos-delay="270"
                                    >
                                        <div className="p-1 rounded-full bg-[#ffedd5]">
                                            <CheckCircle2 className="h-4 w-4 text-[#ff7a00]" />
                                        </div>
                                        {s("pack1.bullets.3")}
                                    </li>
                                    <li
                                        className="flex items-start gap-3"
                                        data-aos="fade-up"
                                        data-aos-delay="290"
                                    >
                                        <div className="p-1 rounded-full bg-[#ffedd5]">
                                            <CheckCircle2 className="h-4 w-4 text-[#ff7a00]" />
                                        </div>
                                        {s("pack1.bullets.4")}
                                    </li>
                                </ul>

                                <div
                                    className="mt-6"
                                    data-aos="zoom-in"
                                    data-aos-delay="310"
                                >
                                    <Button className="h-11 w-full rounded-lg bg-[#FF7A00] text-white sm:px-6">
                                        {s("pack1.ctaMain")}{" "}
                                        {s("pack1.ctaTail") && (
                                            <span className="md:inline hidden">
                                                {" "}
                                                {s("pack1.ctaTail")}
                                            </span>
                                        )}
                                    </Button>
                                </div>

                                <div
                                    className="mt-4 rounded-xl bg-[#eff6ff] p-4 text-[#1E3A8A] ring-1 ring-sky-100"
                                    data-aos="fade-up"
                                    data-aos-delay="340"
                                >
                                    <div className="flex items-start gap-3">
                                        <p className="text-sm">
                                            {s("pack1.note")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section
                className="relative overflow-hidden"
                data-aos="fade-up"
            >
                <div
                    className="absolute inset-0 -z-10 opacity-[0.35]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
                        backgroundSize: "48px 48px, 48px 48px",
                        backgroundPosition: "-24px -24px",
                    }}
                />

                <div
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20"
                    data-aos="fade-up"
                    data-aos-delay="60"
                >
                    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                        <div
                            className="order-2 md:order-1"
                            data-aos="zoom-in"
                            data-aos-delay="120"
                        >
                            <Image
                                src="/power-pack-dashboard.png"
                                alt={s("pack2.title")}
                                width={920}
                                height={600}
                                className="h-auto w-full object-cover"
                                priority
                            />
                        </div>

                        <div
                            className="order-1 md:order-2"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >
                            <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-[11px] font-semibold text-[#ea580c]">
                                {s("pack2.badge")}
                            </div>
                            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                                {s("pack2.title")}
                            </h2>
                            <p className="mt-1 text-2xl sm:text-4xl font-semibold leading-snug text-[#FF7A00]">
                                {s("pack2.highlight")}
                            </p>
                            <p className="mt-3 max-w-xl text-slate-600">
                                {s("pack2.description")}
                            </p>

                            <ul className="mt-5 space-y-3 text-slate-700">
                                <li
                                    className="flex items-start gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="190"
                                >
                                    <div className="p-1 rounded-full bg-[#ffedd5]">
                                        <CheckCircle2 className="h-4 w-4 text-[#ff7a00]" />
                                    </div>
                                    <span>{s("pack2.bullets.1")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="210"
                                >
                                    <div className="p-1 rounded-full bg-[#ffedd5]">
                                        <CheckCircle2 className="h-4 w-4 text-[#ff7a00]" />
                                    </div>
                                    <span>{s("pack2.bullets.2")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="230"
                                >
                                    <div className="p-1 rounded-full bg-[#ffedd5]">
                                        <CheckCircle2 className="h-4 w-4 text-[#ff7a00]" />
                                    </div>
                                    <span>{s("pack2.bullets.3")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="250"
                                >
                                    <div className="p-1 rounded-full bg-[#ffedd5]">
                                        <CheckCircle2 className="h-4 w-4 text-[#ff7a00]" />
                                    </div>
                                    <span>{s("pack2.bullets.4")}</span>
                                </li>
                            </ul>

                            <div
                                className="mt-5 rounded-xl border border-orange-300 bg-orange-50 p-4 sm:p-5"
                                data-aos="fade-up"
                                data-aos-delay="280"
                            >
                                <p className="text-center text-lg text-slate-800">
                                    {s("pack2.note")}
                                </p>
                            </div>

                            <div
                                className="mt-5"
                                data-aos="zoom-in"
                                data-aos-delay="310"
                            >
                                <Link href="/contact">
                                    <Button
                                        size={"lg"}
                                        className="py-6 md:w-auto w-full rounded-lg bg-[#FF7A00] px-6 text-white hover:bg-[#ea580c]"
                                    >
                                        {s("pack2.cta")}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section
                className="bg-gradient-to-r from-[#f2f8ff] to-white py-12 md:py-16"
                data-aos="fade-up"
            >
                <div
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                    data-aos="fade-up"
                    data-aos-delay="60"
                >
                    <div
                        className="overflow-hidden rounded-[28px] bg-white shadow-[0_24px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Left content column */}
                            <div
                                className="p-6 sm:p-8 md:p-10"
                                data-aos="fade-up"
                                data-aos-delay="140"
                            >
                                <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-[11px] font-semibold text-[#ea580c]">
                                    {s("pack3.badge")}
                                </span>
                                <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                                    {s("pack3.title")}
                                </h2>
                                <p className="mt-1 text-2xl sm:text-4xl font-semibold leading-snug text-[#FF7A00]">
                                    {s("pack3.highlightLine1")}
                                    <br className="hidden sm:block" /> {s("pack3.highlightLine2")}
                                </p>
                                <p className="mt-3 max-w-xl text-slate-600">
                                    {s("pack3.description")}
                                </p>

                                <ul className="mt-6 space-y-3 text-slate-700">
                                    <li
                                        className="flex items-start gap-3"
                                        data-aos="fade-up"
                                        data-aos-delay="170"
                                    >
                                        <div className="p-1 rounded-full bg-[#ffedd5]">
                                            <CheckCircle2 className="h-4 w-4 text-[#ff7a00]" />
                                        </div>
                                        <span>{s("pack3.bullets.1")}</span>
                                    </li>
                                    <li
                                        className="flex items-start gap-3"
                                        data-aos="fade-up"
                                        data-aos-delay="190"
                                    >
                                        <div className="p-1 rounded-full bg-[#ffedd5]">
                                            <CheckCircle2 className="h-4 w-4 text-[#ff7a00]" />
                                        </div>
                                        <span>{s("pack3.bullets.2")}</span>
                                    </li>
                                    <li
                                        className="flex items-start gap-3"
                                        data-aos="fade-up"
                                        data-aos-delay="210"
                                    >
                                        <div className="p-1 rounded-full bg-[#ffedd5]">
                                            <CheckCircle2 className="h-4 w-4 text-[#ff7a00]" />
                                        </div>
                                        <span>{s("pack3.bullets.3")}</span>
                                    </li>
                                    <li
                                        className="flex items-start gap-3"
                                        data-aos="fade-up"
                                        data-aos-delay="230"
                                    >
                                        <div className="p-1 rounded-full bg-[#ffedd5]">
                                            <CheckCircle2 className="h-4 w-4 text-[#ff7a00]" />
                                        </div>
                                        <span>{s("pack3.bullets.4")}</span>
                                    </li>
                                </ul>

                                <div
                                    className="mt-6 rounded-xl bg-[#eff7ff] p-4 text-slate-700 ring-2 ring-[#bae6fd]"
                                    data-aos="fade-up"
                                    data-aos-delay="250"
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="mt-0.5 text-[#FF7A00]">
                                            <Sparkles className="h-5 w-5" />
                                        </span>
                                        <p className="text-sm">{s("pack3.quote")}</p>
                                    </div>
                                </div>

                                <div
                                    className="mt-5"
                                    data-aos="zoom-in"
                                    data-aos-delay="280"
                                >
                                    <Button
                                        size={"lg"}
                                        className="py-6 w-full rounded-lg bg-[#FF7A00] text-white hover:bg-[#ea580c] sm:px-6"
                                    >
                                        {s("pack3.cta")}
                                    </Button>
                                </div>
                            </div>

                            {/* Right visual column */}
                            <div
                                className="relative bg-[#eff7ff] p-6 sm:p-8 md:p-10 md:border-l md:border-slate-200/70"
                                data-aos="fade-up"
                                data-aos-delay="160"
                            >
                                <div className="mx-auto space-y-5">
                                    {/* Teams card */}
                                    <div
                                        className="rounded-2xl bg-white p-4 shadow-[0_18px_40px_rgba(2,6,23,0.06)] ring-1 ring-black/5"
                                        data-aos="fade-up"
                                        data-aos-delay="190"
                                    >
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FF7A00] text-white text-sm font-semibold">
                                                    <MessageSquare className="h-4 w-4" />
                                                </span>
                                                <div>
                                                    <p className="text-slate-900">
                                                        {s("pack3.cards.teamsTitle")}
                                                    </p>
                                                    <p className="text-xs text-slate-500">
                                                        {s("pack3.cards.teamsSubtitle")}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mt-3 rounded-lg bg-[#f0f9ff] p-3 text-sm">
                                                {s("pack3.cards.teamsBody")}
                                                <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                                                    <span className="inline-flex -space-x-2 overflow-hidden rounded-full">
                                                        <Image
                                                            src="/user1.png"
                                                            alt="User"
                                                            width={100}
                                                            height={100}
                                                            className="h-6 w-6"
                                                        />
                                                        <Image
                                                            src="/user2.png"
                                                            alt="User"
                                                            width={100}
                                                            height={100}
                                                            className="h-6 w-6"
                                                        />
                                                        <Image
                                                            src="/user3.png"
                                                            alt="User"
                                                            width={100}
                                                            height={100}
                                                            className="h-6 w-6"
                                                        />
                                                    </span>
                                                    {/* "+5 participants" stays partially dynamic */}
                                                    +5 {s("pack3.cards.teamsParticipantsSuffix")}
                                                </div>
                                            </div>
                                            <div className="mt-3 flex items-center gap-1 text-xs text-slate-600">
                                                <Users size={14} />
                                                {s("pack3.cards.teamsFooter")}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Copilot card */}
                                    <div
                                        className="rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] p-4 text-white shadow-[0_18px_40px_rgba(2,6,23,0.12)]"
                                        data-aos="fade-up"
                                        data-aos-delay="220"
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="grid h-12 w-12 place-items-center rounded-md bg-[#8a4c36] text-white text-sm font-semibold">
                                                <Brain className="h-6 w-6" />
                                            </span>
                                            <div>
                                                <p className="font-medium">
                                                    {s("pack3.cards.copilotTitle")}
                                                </p>
                                                <p className="text-xs text-[#FF7A00]">
                                                    {s("pack3.cards.copilotSubtitle")}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-3 rounded-lg border border-white/20 bg-white/5 p-3 text-sm">
                                            <p className="text-white/90">
                                                {s("pack3.cards.copilotPrompt")}
                                            </p>
                                            <ul className="mt-2 space-y-2 text-white/80">
                                                <li className="flex items-center gap-2">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-[#ea580c]" />
                                                    {s("pack3.cards.copilotActions.1")}
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-[#ea580c]" />
                                                    {s("pack3.cards.copilotActions.2")}
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-[#ea580c]" />
                                                    {s("pack3.cards.copilotActions.3")}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mt-3 flex items-center gap-2 text-xs text-white/80">
                                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                            {s("pack3.cards.copilotStatus")}
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div
                                        className="grid grid-cols-3 gap-4"
                                        data-aos="fade-up"
                                        data-aos-delay="250"
                                    >
                                        <div className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5">
                                            <p className="text-2xl text-slate-900">95%</p>
                                            <p className="text-xs text-slate-500">
                                                {s("pack3.cards.statEfficiencyLabel")}
                                            </p>
                                        </div>
                                        <div className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5">
                                            <p className="text-2xl text-slate-900">3.2h</p>
                                            <p className="text-xs text-slate-500">
                                                {s("pack3.cards.statSavedLabel")}
                                            </p>
                                        </div>
                                        <div className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5">
                                            <p className="text-2xl text-slate-900">100%</p>
                                            <p className="text-xs text-slate-500">
                                                {s("pack3.cards.statAdoptionLabel")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <section
                className="relative overflow-hidden"
                data-aos="fade-up"
            >
                <div
                    className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_75%_20%,#1e4bbf33,transparent_60%),radial-gradient(900px_500px_at_70%_60%,#0ea5e933,transparent_60%)]"
                    data-aos="fade-up"
                    data-aos-delay="40"
                />
                <div
                    className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0b1e3b] via-[#0a2250] to-[#0b203f]"
                    data-aos="fade-up"
                    data-aos-delay="60"
                />

                <div
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-32 text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="grid grid-cols-1 items-start md:gap-10 gap-20 md:grid-cols-2">
                        {/* Left content */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="140"
                        >
                            <span className="inline-flex items-center rounded-full bg-[#ffedd5] px-3 py-1 text-[11px] font-semibold text-[#ea580c] ring-1 ring-orange-300/30">
                                {s("pack4.badge")}
                            </span>
                            <h2 className="mt-4 text-3xl sm:text-4xl leading-tight">
                                {s("pack4.title")}
                            </h2>
                            <p className="mt-1 text-2xl sm:text-4xl leading-snug text-orange-400">
                                {s("pack4.highlightLine1")}
                                <br className="hidden sm:block" /> {s("pack4.highlightLine2")}
                            </p>
                            <p className="mt-3 max-w-xl text-white/85">
                                {s("pack4.description")}
                            </p>

                            <ul className="mt-6 space-y-3 text-white/90">
                                <li
                                    className="flex items-start gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="170"
                                >
                                    <div className="p-1 rounded-full bg-[#ffedd5]">
                                        <CheckCircle2 className="h-4 w-4 text-[#ff7a00]" />
                                    </div>
                                    <span>{s("pack4.bullets.1")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="190"
                                >
                                    <div className="p-1 rounded-full bg-[#ffedd5]">
                                        <CheckCircle2 className="h-4 w-4 text-[#ff7a00]" />
                                    </div>
                                    <span>{s("pack4.bullets.2")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="210"
                                >
                                    <div className="p-1 rounded-full bg-[#ffedd5]">
                                        <CheckCircle2 className="h-4 w-4 text-[#ff7a00]" />
                                    </div>
                                    <span>{s("pack4.bullets.3")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="230"
                                >
                                    <div className="p-1 rounded-full bg-[#ffedd5]">
                                        <CheckCircle2 className="h-4 w-4 text-[#ff7a00]" />
                                    </div>
                                    <span>{s("pack4.bullets.4")}</span>
                                </li>
                            </ul>

                            <div
                                className="mt-6 rounded-xl bg-[#2257a5] p-4 ring-2 ring-[#346abb]"
                                data-aos="fade-up"
                                data-aos-delay="250"
                            >
                                <p className="text-sm sm:text-base text-white/90">
                                    {s("pack4.note")}
                                </p>
                            </div>

                            <div
                                className="mt-5"
                                data-aos="zoom-in"
                                data-aos-delay="280"
                            >
                                <Link href="/contact">
                                    <Button className="h-11 w-full md:w-auto rounded-lg bg-[#FF7A00] px-6 py-6 text-white hover:bg-[#ea580c]">
                                        {s("pack4.cta")}
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right visuals */}
                        <div
                            className="relative"
                            data-aos="fade-up"
                            data-aos-delay="160"
                        >
                            <div
                                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <div className="relative grid h-28 w-28 place-items-center rounded-full bg-gradient-to-b from-[#2563EB] to-[#0891B2] shadow-2xl ring-1 ring-white/20">
                                    <Shield className="h-14 w-14 text-white" />
                                    <span className="absolute right-3 -top-1 grid h-5 w-5 place-items-center rounded-full bg-emerald-400 text-[10px] font-bold text-white ring-2 ring-[#0a2250]">
                                        ✓
                                    </span>
                                </div>
                            </div>

                            <div
                                className="relative mt-24 space-y-4"
                                data-aos="fade-up"
                                data-aos-delay="230"
                            >
                                {/* Threat Detection */}
                                <div className="rounded-xl bg-[#1E293B80] p-4 ring-1 ring-white/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-2 text-white/90">
                                        <Eye className="h-4 w-4 text-emerald-400" />
                                        <span>{s("pack4.cards.threatDetectionTitle")}</span>
                                        <span className="ml-auto text-emerald-400">
                                            {s("pack4.cards.threatDetectionStatus")}
                                        </span>
                                    </div>
                                    <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                                        <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300" />
                                    </div>
                                    <div className="mt-1 text-right text-[11px] text-white/60">
                                        {s("pack4.cards.threatDetectionPercent")}
                                    </div>
                                </div>

                                {/* AI Threat Analysis */}
                                <div className="rounded-xl bg-[#1E293B80] p-4 ring-1 ring-amber-300/30 backdrop-blur-sm">
                                    <div className="flex items-center gap-2 text-white/90">
                                        <AlertTriangle className="h-4 w-4 text-amber-300" />
                                        <span>{s("pack4.cards.aiThreatTitle")}</span>
                                        <span className="ml-auto text-amber-300">
                                            {s("pack4.cards.aiThreatLevel")}
                                        </span>
                                    </div>
                                    <p className="mt-2 text-xs text-white/75">
                                        {s("pack4.cards.aiThreatDescription")}
                                    </p>
                                    <p className="text-[11px] text-white/60">
                                        {s("pack4.cards.aiThreatMeta")}
                                    </p>
                                </div>

                                {/* Security Policies */}
                                <div className="rounded-xl bg-[#1E293B80] p-4 ring-1 ring-white/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-2 text-white/90">
                                        <Lock className="h-4 w-4 text-sky-300" />
                                        <span>{s("pack4.cards.policiesTitle")}</span>
                                    </div>
                                    <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                                        <div className="rounded-lg bg.white/5 bg-white/5 p-3">
                                            <p className="text-lg font-semibold">247</p>
                                            <p className="text-[11px] text-white/70">
                                                {s("pack4.cards.policiesRules")}
                                            </p>
                                        </div>
                                        <div className="rounded-lg bg-white/5 p-3">
                                            <p className="text-lg font-semibold">0</p>
                                            <p className="text-[11px] text-white/70">
                                                {s("pack4.cards.policiesBreaches")}
                                            </p>
                                        </div>
                                        <div className="rounded-lg bg-white/5 p-3">
                                            <p className="text-lg font-semibold">24/7</p>
                                            <p className="text-[11px] text.white/70 text-white/70">
                                                {s("pack4.cards.policiesMonitor")}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Automated Response */}
                                <div className="rounded-xl bg-gradient-to-r from-[#2563EB] to-[#0891B2] p-4 ring-1 ring-white/20">
                                    <div className="flex items-center gap-4 text-white">
                                        <span className="grid h-12 w-12 place-items-center rounded-md bg-white/20">
                                            <Zap className="h-6 w-6" />
                                        </span>
                                        <div>
                                            <span>{s("pack4.cards.autoResponseTitle")}</span>
                                            <span className="text-white/90 block">
                                                {s("pack4.cards.autoResponseSubtitle")}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="bg-white py-12 sm:py-16"
                data-aos="fade-up"
            >
                <div
                    className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
                    data-aos="fade-up"
                    data-aos-delay="80"
                >
                    <div
                        className="text-center"
                        data-aos="fade-up"
                        data-aos-delay="120"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                            {s("whyPackages.titleLine1")}
                            <br className="block sm:hidden" />
                            <span className="ml-2 text-[#FF7A00] block mt-2 md:mt-3">
                                {s("whyPackages.titleHighlight")}
                            </span>
                        </h2>
                        <p className="mt-3 font-semibold text-slate-600">
                            {s("whyPackages.subtitle")}
                        </p>
                    </div>

                    <div
                        className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        <div
                            className="rounded-2xl bg-white p-5 shadow-[0_20px_45px_rgba(2,6,23,0.08)] ring-1 ring-yellow-200"
                            data-aos="fade-up"
                            data-aos-delay="180"
                        >
                            <div className="flex flex-col gap-3">
                                <span className="grid h-10 w-10 place-items-center rounded-md bg-yellow-50 text-yellow-600">
                                    <Zap className="h-5 w-5" />
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-900">
                                        {s("whyPackages.cards.1.title")}
                                    </p>
                                    <p className="text-sm text-slate-500">
                                        {s("whyPackages.cards.1.desc")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="rounded-2xl bg-white p-5 shadow-[0_20px_45px_rgba(2,6,23,0.08)] ring-1 ring-emerald-200"
                            data-aos="fade-up"
                            data-aos-delay="210"
                        >
                            <div className="flex flex-col gap-3">
                                <span className="grid h-10 w-10 place-items-center rounded-md bg-emerald-50 text-emerald-600">
                                    <TrendingUp className="h-5 w-5" />
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-900">
                                        {s("whyPackages.cards.2.title")}
                                    </p>
                                    <p className="text-sm text-slate-500">
                                        {s("whyPackages.cards.2.desc")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="rounded-2xl bg-white p-5 shadow-[0_20px_45px_rgba(2,6,23,0.08)] ring-1 ring-sky-200"
                            data-aos="fade-up"
                            data-aos-delay="240"
                        >
                            <div className="flex flex-col gap-3">
                                <span className="grid h-10 w-10 place-items-center rounded-md bg-sky-50 text-sky-600">
                                    <Box className="h-5 w-5" />
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-900">
                                        {s("whyPackages.cards.3.title")}
                                    </p>
                                    <p className="text-sm text-slate-500">
                                        {s("whyPackages.cards.3.desc")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="rounded-2xl bg-white p-5 shadow-[0_20px_45px_rgba(2,6,23,0.08)] ring-1 ring-purple-200"
                            data-aos="fade-up"
                            data-aos-delay="270"
                        >
                            <div className="flex flex-col gap-3">
                                <span className="grid h-10 w-10 place-items-center rounded-md bg-purple-50 text-purple-600">
                                    <Users2 className="h-5 w-5" />
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-900">
                                        {s("whyPackages.cards.4.title")}
                                    </p>
                                    <p className="text-sm text-slate-500">
                                        {s("whyPackages.cards.4.desc")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="mx-auto mt-8 max-w-4xl rounded-2xl border-2 border-[#ea580c] bg-[#ffedd5] p-6 md:py-8 text-center"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <p className="text-xl font-medium text-slate-900">
                            {s("whyPackages.noteTitle")}
                        </p>
                        <p className="mt-1 text-[#ea580c]">
                            {s("whyPackages.noteSubtitle")}
                        </p>
                    </div>

                    <div
                        className="mt-6 flex items-center justify-center"
                        data-aos="zoom-in"
                        data-aos-delay="330"
                    >
                        <Button
                            size={"lg"}
                            className="py-6 rounded-lg bg-gradient-to-r from-[#FF7A00] to-[#ea580c] px-6 text-white hover:from-[#FF7A00] hover:to-[#FF7A00] text-wrap"
                        >
                            {s("whyPackages.ctaMain")}{" "}
                            <span className="md:inline hidden">
                                {" "}
                                {s("whyPackages.ctaExtra")}
                            </span>
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
            </section>

        </Wrapper>
    )
}
