import React from 'react'
import Navbar from '@/components/Navbar'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Wrapper from '../Wrapper';
import { BookOpen, HelpCircle, FileText } from "lucide-react";
import { Search, Compass, Workflow, GraduationCap, BarChart3 } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Resources() {

    const r = useTranslations("resources");
    const p = useTranslations("process");

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
                                {r("heroTitle")}
                            </h1>
                            <p
                                className="mx-auto mt-4 max-w-2xl font-semibold text-xl text-white"
                                data-aos="fade-up"
                                data-aos-delay="260"
                            >
                                {r("heroSubtitle")}
                            </p>
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
                        <div
                            className="text-center"
                            data-aos="fade-up"
                            data-aos-delay="120"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ea580c]">
                                {r("sectionTitle")}
                            </h2>
                            <p className="mx-auto mt-2 md:mt-3 md:text-xl font-medium max-w-2xl text-[#2A2D2D]">
                                {r("sectionSubtitle")}
                            </p>
                        </div>

                        <div
                            className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 md:mt-14 mt-6"
                            data-aos="fade-up"
                            data-aos-delay="160"
                        >
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                                {/* Blog */}
                                <article
                                    className="rounded-2xl bg-white p-6 shadow-[0_22px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <div
                                        className="grid h-14 w-14 place-items-center rounded-md bg-[#ea580c] text-white"
                                        data-aos="zoom-in"
                                        data-aos-delay="220"
                                    >
                                        <BookOpen className="h-7 w-7" />
                                    </div>
                                    <h3 className="mt-8 text-3xl font-semibold tracking-tight text-slate-900">
                                        {r("cards.blog.title")}
                                    </h3>
                                    <p className="mt-3 text-lg text-slate-600">
                                        {r("cards.blog.description")}
                                    </p>
                                    <div className="mt-6 inline-block w-full">
                                        <div className="relative">
                                            <div className="pointer-events-none blur-md absolute inset-x-0 -bottom-1 h-2 rounded-full bg-sky-300" />
                                            <Link href="/blog">
                                                <Button className="w-full relative rounded-full bg-[#ea580c] px-6 text-white py-6 hover:bg-[#FF7A00]">
                                                    {r("cards.blog.button")}
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </article>

                                {/* FAQ */}
                                <article
                                    className="rounded-2xl bg-white p-6 shadow-[0_22px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5"
                                    data-aos="fade-up"
                                    data-aos-delay="230"
                                >
                                    <div
                                        className="grid h-14 w-14 place-items-center rounded-md bg-[#ea580c] text-white"
                                        data-aos="zoom-in"
                                        data-aos-delay="250"
                                    >
                                        <HelpCircle className="h-7 w-7" />
                                    </div>
                                    <h3 className="mt-8 text-3xl font-semibold tracking-tight text-slate-900">
                                        {r("cards.faq.title")}
                                    </h3>
                                    <p className="mt-3 text-lg text-slate-600">
                                        {r("cards.faq.description")}
                                        <span className="xl:block hideen select-none">&nbsp;</span>
                                    </p>
                                    <div className="mt-6 inline-block w-full">
                                        <div className="relative">
                                            <div className="pointer-events-none blur-md absolute inset-x-0 -bottom-1 h-2 rounded-full bg-sky-300" />
                                            <Link href="/faq">
                                                <Button className="relative w-full rounded-full bg-[#ea580c] px-6 text-white py-6 hover:bg-[#FF7A00]">
                                                    {r("cards.faq.button")}
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </article>

                                {/* Legal Notices */}
                                <article
                                    className="rounded-2xl bg-white p-6 shadow-[0_22px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5"
                                    data-aos="fade-up"
                                    data-aos-delay="260"
                                >
                                    <div
                                        className="grid h-14 w-14 place-items-center rounded-md bg-[#ea580c] text-white"
                                        data-aos="zoom-in"
                                        data-aos-delay="280"
                                    >
                                        <FileText className="h-7 w-7" />
                                    </div>
                                    <h3 className="mt-8 text-3xl font-semibold tracking-tight text-slate-900">
                                        {r("cards.legal.title")}
                                    </h3>
                                    <p className="mt-3 text-lg text-slate-600">
                                        {r("cards.legal.description")}
                                        <span className="xl:block hideen select-none">&nbsp;</span>
                                        <span className="xl:block hideen select-none">&nbsp;</span>
                                    </p>
                                    <div className="mt-6 inline-block w-full">
                                        <div className="relative">
                                            <div className="pointer-events-none blur-md absolute inset-x-0 -bottom-1 h-2 rounded-full bg-sky-300" />
                                            <Link href="/legalnotices">
                                                <Button className="relative w-full rounded-full bg-[#ea580c] px-6 text-white py-6 hover:bg-[#FF7A00]">
                                                    {r("cards.legal.button")}
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
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
                        <div
                            className="text-center"
                            data-aos="fade-up"
                            data-aos-delay="120"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ea580c]">
                                {p("title")}
                            </h2>
                            <p className="mx-auto mt-2 md:mt-3 md:text-xl font-medium max-w-2xl text-[#2A2D2D]">
                                {p("subtitle")}
                            </p>
                        </div>

                        <div
                            className="relative mx-auto max-w-5xl md:mt-14 mt-6 px-4 sm:px-6 lg:px-8"
                            data-aos="fade-up"
                            data-aos-delay="160"
                        >
                            <div className="pointer-events-none absolute inset-y-0 hidden w-1 bg-slate-200 md:left-16 -z-10 md:block" />

                            {/* STEP 1 */}
                            <div
                                className="mt-0 grid gap-4 md:grid-cols-[64px_minmax(0,1fr)] md:items-start"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="hidden md:flex md:justify-center">
                                    <div className="grid h-14 w-14 place-items-center rounded-full bg-sky-200 text-2xl font-bold text-sky-900 ring-2 ring-white shadow-sm">
                                        1
                                    </div>
                                </div>
                                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start gap-4">
                                        <span
                                            className="grid h-10 w-10 place-items-center rounded-md bg-[#FF7A00] text-white"
                                            data-aos="zoom-in"
                                            data-aos-delay="220"
                                        >
                                            <Search className="h-5 w-5" />
                                        </span>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <p className="text-xl font-semibold text-slate-900">
                                                    {p("steps.1.title")}
                                                </p>
                                            </div>
                                            <p className="mt-2 leading-6 text-[#2A2D2D]">
                                                {p("steps.1.description")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* STEP 2 */}
                            <div
                                className="mt-6 grid gap-4 md:grid-cols-[64px_minmax(0,1fr)] md:items-start"
                                data-aos="fade-up"
                                data-aos-delay="230"
                            >
                                <div className="hidden md:flex md:justify-center">
                                    <div className="grid h-14 w-14 place-items-center rounded-full bg-sky-200 text-2xl font-bold text-sky-900 ring-2 ring-white shadow-sm">
                                        2
                                    </div>
                                </div>
                                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start gap-4">
                                        <span
                                            className="grid h-10 w-10 place-items-center rounded-md bg-[#FF7A00] text-white"
                                            data-aos="zoom-in"
                                            data-aos-delay="250"
                                        >
                                            <Compass className="h-5 w-5" />
                                        </span>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <p className="text-xl font-semibold text-slate-900">
                                                    {p("steps.2.title")}
                                                </p>
                                            </div>
                                            <p className="mt-2 leading-6 text-[#2A2D2D]">
                                                {p("steps.2.description")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* STEP 3 */}
                            <div
                                className="mt-6 grid gap-4 md:grid-cols-[64px_minmax(0,1fr)] md:items-start"
                                data-aos="fade-up"
                                data-aos-delay="260"
                            >
                                <div className="hidden md:flex md:justify-center">
                                    <div className="grid h-14 w-14 place-items-center rounded-full bg-sky-200 text-2xl font-bold text-sky-900 ring-2 ring-white shadow-sm">
                                        3
                                    </div>
                                </div>
                                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start gap-4">
                                        <span
                                            className="grid h-10 w-10 place-items-center rounded-md bg-[#FF7A00] text-white"
                                            data-aos="zoom-in"
                                            data-aos-delay="280"
                                        >
                                            <Workflow className="h-5 w-5" />
                                        </span>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <p className="text-xl font-semibold text-slate-900">
                                                    {p("steps.3.title")}
                                                </p>
                                            </div>
                                            <p className="mt-2 leading-6 text-[#2A2D2D]">
                                                {p("steps.3.description")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* STEP 4 */}
                            <div
                                className="mt-6 grid gap-4 md:grid-cols-[64px_minmax(0,1fr)] md:items-start"
                                data-aos="fade-up"
                                data-aos-delay="290"
                            >
                                <div className="hidden md:flex md:justify-center">
                                    <div className="grid h-14 w-14 place-items-center rounded-full bg-sky-200 text-2xl font-bold text-sky-900 ring-2 ring-white shadow-sm">
                                        4
                                    </div>
                                </div>
                                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start gap-4">
                                        <span
                                            className="grid h-10 w-10 place-items-center rounded-md bg-[#FF7A00] text-white"
                                            data-aos="zoom-in"
                                            data-aos-delay="310"
                                        >
                                            <GraduationCap className="h-5 w-5" />
                                        </span>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <p className="text-xl font-semibold text-slate-900">
                                                    {p("steps.4.title")}
                                                </p>
                                            </div>
                                            <p className="mt-2 leading-6 text-[#2A2D2D]">
                                                {p("steps.4.description")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* STEP 5 */}
                            <div
                                className="mt-6 grid gap-4 md:grid-cols-[64px_minmax(0,1fr)] md:items-start"
                                data-aos="fade-up"
                                data-aos-delay="320"
                            >
                                <div className="hidden md:flex md:justify-center">
                                    <div className="grid h-14 w-14 place-items-center rounded-full bg-sky-200 text-2xl font-bold text-sky-900 ring-2 ring-white shadow-sm">
                                        5
                                    </div>
                                </div>
                                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                                    <div className="flex items-start gap-4">
                                        <span
                                            className="grid h-10 w-10 place-items-center rounded-md bg-[#FF7A00] text-white"
                                            data-aos="zoom-in"
                                            data-aos-delay="340"
                                        >
                                            <BarChart3 className="h-5 w-5" />
                                        </span>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <p className="text-xl font-semibold text-slate-900">
                                                    {p("steps.5.title")}
                                                </p>
                                            </div>
                                            <p className="mt-2 leading-6 text-[#2A2D2D]">
                                                {p("steps.5.description")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




            </Wrapper>
        </>
    )
}
