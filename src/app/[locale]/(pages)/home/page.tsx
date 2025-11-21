"use client"
import React, { FormEvent, useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Bot, CircleCheckBig, Clock, MessageSquare, Sparkles, Users } from "lucide-react";
import Navbar from '@/components/Navbar';
import { TrendingUp, Zap } from "lucide-react";
import { Check } from "lucide-react";
import { Search } from "lucide-react";
import { Puzzle, Lightbulb, Lock } from "lucide-react";
import SuccessStoriesCarousel from '@/components/SuccessStoriesCarousel';
import { Calendar } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import Footer from '@/components/Footer';
import { Cog } from "lucide-react";
import InfiniteScroll from '@/components/InfiniteScroll';
import Wrapper from '../Wrapper';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import { Spinner } from '@/components/ui/spinner';

type NodeItem = { key: string; color: string };

const nodes: NodeItem[] = [
    { key: "purchasing", color: "#7FBA00" },
    { key: "customerService", color: "#00A4EF" },
    { key: "finance", color: "#F25022" },
    { key: "accounting", color: "#FFB900" },
    { key: "hr", color: "#7FBA00" },
    { key: "legal", color: "#00A4EF" },
    { key: "operations", color: "#F25022" },
    { key: "supplyChain", color: "#FFB900" },
];

const sources = [
    "/focus4.png",
    "/focus5.png",
    "/focus6.png",
    "/focus7.png",
    "/focus1.png",
    "/focus2.png",
    "/focus3.png",
];

type BlogApi = {
    _id: string
    category: string
    title: string
    summary: string
    image: string
    buttonText: string
    createdAt: string
    slug?: string
}

export default function HomePage() {

    const [play, setPlay] = useState(false)

    const handlePlay = () => {
        console.log("Play button clicked");
    };
    const step = 360 / sources.length;

    const h = useTranslations("home");
    const [blogs, setBlogs] = useState<BlogApi[]>([])
    const [isLoadingBlogs, setIsLoadingBlogs] = useState(false)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setIsLoadingBlogs(true)
                const res = await fetch("/api/blog")
                const data = await res.json()

                if (data.success) {
                    setBlogs(data.data as BlogApi[])
                } else {
                    console.error("Failed to load blogs:", data.message)
                }
            } catch (err) {
                console.error("Error loading blogs:", err)
            } finally {
                setIsLoadingBlogs(false)
            }
        }

        fetchBlogs()
    }, [])

    const formatDate = (value: string) => {
        if (!value) return ""
        const date = new Date(value)
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        })
    }

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        const formData = new FormData(form)

        formData.append(
            "access_key",
            process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string
        )

        formData.append("subject", "New AI Assistant inquiry from website")
        formData.append("from_name", "AI Assistant Contact Form")

        try {
            setIsSubmitting(true)

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            })

            const data = await res.json()

            if (!data.success) {
                console.error("Web3Forms error:", data)

                if (
                    typeof data.message === "string" &&
                    data.message.toLowerCase().includes("spam")
                ) {
                    toast.error(
                        "Your message was flagged as spam. Please try again with more natural content or contact us directly."
                    )
                } else {
                    toast.error("Failed to send message. Please try again.")
                }

                return
            }

            toast.success("Message sent successfully!")
            form.reset()
        } catch (error) {
            console.error("Web3Forms request error:", error)
            toast.error("Something went wrong. Please try again later.")
        } finally {
            setIsSubmitting(false)
        }
    }

    // pick featured + list
    const featured = blogs[0]
    const sideList = blogs.slice(1, 4)
    return (
        <Wrapper>

            <section className='relative w-full flex lg:flex-row flex-col lg:justify-center justify-end lg:items-end items-center min-h-screen'>
                <Navbar />
                <div className="absolute inset-0 -z-50">
                    <Image
                        src="/heroBg.png"
                        alt="Background"
                        fill
                        className="object-cover w-full h-full select-none"
                        priority
                    />
                </div>


                <div className="">
                    <div className="w-full lg:h-[30vw]"></div>
                    <div className="w-full max-w-[87rem] lg:text-start text-center p-5">
                        <div className="flex lg:-mb-5 items-end lg:flex-row mb-3 flex-col justify-center lg:gap-10 gap-4">
                            <h1
                                data-aos="fade-up"
                                className='font-bold mt-20 lg:mt-0 lg:text-[6.5rem] text-[2.6rem] leading-tight lg:leading-none lg:text-nowrap text-image1'
                            >
                                {h("titleLine1")}
                                <span className='lg:hidden'>
                                    {" "}{h("titleLine2Mobile")}
                                </span>
                            </h1>

                            <div data-aos-delay="200" className="relative" data-aos="fade">
                                <p className='font-semibold z-10 relative lg:max-w-[12rem] w-full'>
                                    {h("taglineTop")}
                                </p>
                                <Image
                                    src="/favicon.svg"
                                    width={100}
                                    height={100}
                                    alt="logo"
                                    className='absolute w-10 lg:-top-4 right-0'
                                />
                            </div>
                        </div>

                        <div className="flex items-end lg:flex-row flex-col-reverse justify-center lg:gap-10 gap-4 lg:-mb-7">
                            <p
                                data-aos-delay="200"
                                data-aos="fade"
                                className='font-semibold lg:block hidden lg:max-w-[14rem]  w-full'
                            >
                                {h("taglineBottom")}
                            </p>
                            <h1
                                data-aos="fade-up"
                                data-aos-delay="100"
                                className='font-bold lg:text-[6.5rem]  lg:block hidden text-4xl lg:text-nowrap text-image1'
                            >
                                {h("titleLine2Desktop1")}
                            </h1>
                        </div>

                        <h1
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className='font-bold flex items-end justify-end text-end lg:text-[6.5rem] lg:block hidden text-4xl lg:text-nowrap text-image1'
                        >
                            {h("titleLine2Desktop2")}
                        </h1>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="flex items-center justify-center mt-5"
                        >
                            <Link href="/contact">
                                <Button
                                    size={"lg"}
                                    className="bg-[#FF7A00] py-5 hover:bg-[#FF7A00] text-white font-semibold px-5 h-9 rounded-md"
                                >
                                    {h("cta")}
                                    <ArrowRight />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <Image
                    src="/lady.png"
                    width={1000}
                    height={700}
                    alt="lady"
                    className='w-full select-none lg:max-w-[50vw] -z-40 lg:absolute'
                />
            </section>

            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="flex flex-col items-center text-center" data-aos="fade-up">
                        <Image
                            src={"/microsoft.svg"}
                            width={100}
                            height={100}
                            className="mx-auto mb-8 h-10 w-auto"
                            alt="Microsoft"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        />
                        <h2
                            className="max-w-[890px] text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            {h("microsoftAi.titleMain")}
                            <span className="text-[#FF7A00]">{h("microsoftAi.titleHighlight")}</span>
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
                        <div
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div
                                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF7A00] text-white"
                                data-aos="zoom-in"
                            >
                                <Bot className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">
                                {h("microsoftAi.card1Title")}
                            </h3>
                            <p className="mt-3 text-slate-600">
                                {h("microsoftAi.card1Body")}
                            </p>
                        </div>

                        <div
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div
                                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF7A00] text-white"
                                data-aos="zoom-in"
                            >
                                <TrendingUp className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">
                                {h("microsoftAi.card2Title")}
                            </h3>
                            <p className="mt-3 text-slate-600">
                                {h("microsoftAi.card2Body")}
                            </p>
                        </div>

                        <div
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div
                                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF7A00] text-white"
                                data-aos="zoom-in"
                            >
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">
                                {h("microsoftAi.card3Title")}
                            </h3>
                            <p className="mt-3 text-slate-600">
                                {h("microsoftAi.card3Body")}
                            </p>
                        </div>
                    </div>

                    <div
                        className="mt-10 flex justify-center"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        <Link href="/contact">
                            <Button
                                size={"lg"}
                                className="bg-[#FF7A00] py-6 text-white shadow-md hover:bg-[#FF7A00]"
                            >
                                {h("microsoftAi.cta")} <ArrowRight />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="relative bg-gradient-to-b from-sky-100/70 to-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                    {/* Heading Section */}
                    <div
                        className="flex items-center justify-center text-center flex-col"
                        data-aos="fade-up"
                    >
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <span className="block">{h("aiFutureSection.titleLine1")}</span>
                            <span className="block mt-2 md:mt-4 text-[#FF7A00]">
                                {h("aiFutureSection.titleLine2")}
                            </span>
                        </h2>
                        <p
                            className="mt-4 text-[#2A2D2D] text-lg max-w-3xl"
                            data-aos="fade"
                            data-aos-delay="200"
                        >
                            {h("aiFutureSection.subtitle")}
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:mt-10 mt-6">
                        {/* Text Column */}
                        <div data-aos="fade-up" data-aos-delay="200">
                            <ul className="mt-8 space-y-5">
                                <li
                                    className="flex items-center md:gap-4 gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="250"
                                >
                                    <CircleCheckBig className="md:h-9 h-6 md:w-9 w-6 text-[#FF7A00]" />
                                    <span className="md:text-3xl text-2xl font-medium text-slate-900">
                                        {h("aiFutureSection.bullet1")}
                                    </span>
                                </li>
                                <li
                                    className="flex items-center md:gap-4 gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <CircleCheckBig className="md:h-9 h-6 md:w-9 w-6 text-[#FF7A00]" />
                                    <span className="md:text-3xl text-2xl font-medium text-slate-900">
                                        {h("aiFutureSection.bullet2")}
                                    </span>
                                </li>
                                <li
                                    className="flex items-center md:gap-4 gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="350"
                                >
                                    <CircleCheckBig className="md:h-9 h-6 md:w-9 w-6 text-[#FF7A00]" />
                                    <span className="md:text-3xl text-2xl font-medium text-slate-900">
                                        {h("aiFutureSection.bullet3")}
                                    </span>
                                </li>
                                <li
                                    className="flex items-center md:gap-4 gap-3"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    <CircleCheckBig className="md:h-9 h-6 md:w-9 w-6 text-[#FF7A00]" />
                                    <span className="md:text-3xl text-2xl font-medium text-slate-900">
                                        {h("aiFutureSection.bullet4")}
                                    </span>
                                </li>
                            </ul>

                            <div
                                className="mt-8"
                                data-aos="zoom-in"
                                data-aos-delay="500"
                            >
                                <Link href="/contact">
                                    <Button
                                        size={"lg"}
                                        className="bg-[#FF7A00] px-6 py-6 text-white shadow-md hover:bg-[#FF7A00] w-full md:w-auto"
                                    >
                                        {h("aiFutureSection.ctaMain")}
                                        <span className="md:inline hidden">
                                            {" "}
                                            {h("aiFutureSection.ctaSuffix")}
                                        </span>
                                        <ArrowRight />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div
                            className="mx-auto w-full max-w-xl"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            <div className="relative mx-auto w-full max-w-xl rounded-3xl bg-white p-3 shadow-xl ring-1 ring-black/5">
                                <div
                                    className="overflow-hidden rounded-2xl"
                                    data-aos="zoom-in"
                                    data-aos-delay="350"
                                >
                                    <Image
                                        src="/ai-team.png"
                                        alt="Team collaborating with AI tools"
                                        width={920}
                                        height={600}
                                        className="h-auto w-full object-cover"
                                        priority
                                    />
                                </div>

                                <div
                                    className="flex items-end md:p-5"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    <div className="w-full">
                                        <div className="grid grid-cols-2 gap-4 md:-mt-16 -mt-8">
                                            <div
                                                className="relative rounded-xl bg-white px-5 md:py-6 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.1)] ring-1 ring-black/5 border-l-4 border-red-500"
                                                data-aos="zoom-in"
                                                data-aos-delay="450"
                                            >
                                                <p className="md:text-3xl text-xl font-bold leading-none text-slate-900">
                                                    {h("aiFutureSection.beforeTime")}
                                                </p>
                                                <p className="mt-2 text-xs text-slate-500">
                                                    {h("aiFutureSection.beforeTimeLabel")}
                                                </p>
                                            </div>
                                            <div
                                                className="relative rounded-xl bg-white px-5 md:py-6 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.1)] ring-1 ring-black/5 border-l-4 border-green-500"
                                                data-aos="zoom-in"
                                                data-aos-delay="500"
                                            >
                                                <p className="md:text-3xl text-xl font-bold leading-none text-slate-900">
                                                    {h("aiFutureSection.afterTime")}
                                                </p>
                                                <p className="mt-2 text-xs text-slate-500">
                                                    {h("aiFutureSection.afterTimeLabel")}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-4 grid grid-cols-2 gap-4">
                                            <div
                                                className="rounded-xl bg-white px-5 md:py-6 py-4 shadow-[0_6px_18px_rgba(15,23,42,0.08)] ring-1 ring-black/5 border-l-4 border-red-500"
                                                data-aos="zoom-in"
                                                data-aos-delay="550"
                                            >
                                                <p className="md:text-3xl text-xl font-bold leading-none text-slate-900">
                                                    {h("aiFutureSection.beforeError")}
                                                </p>
                                                <p className="mt-2 text-xs text-slate-500">
                                                    {h("aiFutureSection.beforeErrorLabel")}
                                                </p>
                                            </div>
                                            <div
                                                className="rounded-xl bg-white px-5 md:py-6 py-4 shadow-[0_6px_18px_rgba(15,23,42,0.08)] ring-1 ring-black/5 border-l-4 border-green-500"
                                                data-aos="zoom-in"
                                                data-aos-delay="600"
                                            >
                                                <p className="md:text-3xl text-xl font-bold leading-none text-slate-900">
                                                    {h("aiFutureSection.afterError")}
                                                </p>
                                                <p className="mt-2 text-xs text-slate-500">
                                                    {h("aiFutureSection.afterErrorLabel")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="pointer-events-none absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2"
                                    data-aos="zoom-in"
                                    data-aos-delay="650"
                                >
                                    <div className="grid md:h-28 h-16 md:w-28 w-16 place-items-center rounded-full bg-white shadow-[0_10px_35px_rgba(15,23,42,0.12)] ring-1 ring-black/5">
                                        <Cog className="md:h-14 h-8 md:w-14 w-8 text-[#FF7A00]" />
                                    </div>
                                </div>

                                <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-3xl bg-gradient-to-b from-transparent to-sky-100/60" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="bg-gradient-to-b from-sky-50 to-white">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
                    {/* Heading */}
                    <div className="text-center" data-aos="fade-up">
                        <h2
                            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            {h("aiTeamsSection.title")}
                        </h2>
                        <p
                            className="mt-4 text-lg text-slate-600"
                            data-aos="fade"
                            data-aos-delay="200"
                        >
                            {h("aiTeamsSection.subtitle")}
                        </p>
                    </div>

                    {/* Mobile Grid */}
                    <div
                        className="mt-10 grid grid-cols-2 gap-4 sm:hidden"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        {nodes.map((n, i) => (
                            <div
                                key={n.key}
                                className="flex h-28 items-center justify-center rounded-full text-center shadow-md"
                                style={{ backgroundColor: n.color }}
                                data-aos="zoom-in"
                                data-aos-delay={100 + i * 100}
                            >
                                <span className="px-4 text-white font-semibold">
                                    {h(`aiTeamsSection.nodes.${n.key}`)}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Circular Layout */}
                    <div
                        className="relative mx-auto hidden aspect-square w-full max-w-[860px] sm:block [--r:170px] md:[--r:220px] lg:[--r:260px]"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        {/* Center Microsoft Logo */}
                        <div
                            className="absolute left-1/2 top-1/2 z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-xl ring-1 ring-black/5 flex flex-col items-center justify-center"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <Image
                                src={"/microsoft2.svg"}
                                width={860}
                                height={860}
                                className="w-16"
                                alt="Microsoft"
                            />
                        </div>

                        {/* Circular Nodes */}
                        {nodes.map((n, i) => {
                            const angle = -90 + i * 45;
                            const transform = `rotate(${angle}deg) translate(var(--r)) rotate(${-angle}deg)`;
                            return (
                                <div
                                    key={n.key}
                                    className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg flex items-center justify-center text-center"
                                    style={{ transform, backgroundColor: n.color }}
                                    data-aos="zoom-in"
                                    data-aos-delay={500 + i * 100}
                                >
                                    <span className="px-4 text-white font-semibold leading-tight">
                                        {h(`aiTeamsSection.nodes.${n.key}`)}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>



            <section className="relative">
                {/* Background line image */}
                <Image
                    src={"/line.png"}
                    alt="line"
                    width={1000}
                    height={500}
                    className="absolute w-full select-none -z-10 bottom-20"
                    data-aos="fade"
                    data-aos-delay="100"
                />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                        {/* Left Heading Section */}
                        <div data-aos="fade-up" data-aos-delay="150">
                            <h2
                                className="text-4xl sm:text-5xl md:text-6xl font-semibold uppercase leading-[0.95] text-slate-700"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                {h("planSection.titleLine1")}
                                <br />
                                {h("planSection.titleLine2")}
                            </h2>
                            <div
                                className="mt-4 h-0.5 rounded-full w-2/3 bg-gradient-to-r from-white to-[#c3c3c3]"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            />
                            <p
                                className="mt-6 max-w-xs text-slate-600"
                                data-aos="fade"
                                data-aos-delay="400"
                            >
                                {h("planSection.subtitle")}
                            </p>
                        </div>

                        {/* Steps Section */}
                        <div className="flex flex-col gap-6">
                            {/* Step 1 */}
                            <div
                                className="relative rounded-2xl border border-slate-200 bg-white p-6 md:pl-10 md:pr-24"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div
                                    className="md:absolute md:-left-8 top-0 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FF7A00] text-white font-bold text-2xl shadow-md"
                                    data-aos="zoom-in"
                                    data-aos-delay="350"
                                >
                                    1
                                </div>
                                <h3 className="text-lg md:mt-0 mt-3 font-semibold text-slate-900">
                                    {h("planSection.step1.title")}
                                </h3>
                                <p className="mt-2 text-slate-600">
                                    {h("planSection.step1.body")}
                                </p>
                                <div
                                    className="absolute right-6 md:inline-flex hidden top-1/2 -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full bg-[#FF7A00] text-white shadow-md"
                                    data-aos="zoom-in"
                                    data-aos-delay="400"
                                >
                                    <Search className="h-6 w-6" />
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div
                                className="relative rounded-2xl border border-slate-200 bg-white p-6 md:pl-10 md:pr-24"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <div
                                    className="md:absolute md:-left-8 top-0 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FF7A00] text-white font-bold text-2xl shadow-md"
                                    data-aos="zoom-in"
                                    data-aos-delay="450"
                                >
                                    2
                                </div>
                                <h3 className="text-lg md:mt-0 mt-3 font-semibold text-slate-900">
                                    {h("planSection.step2.title")}
                                </h3>
                                <p className="mt-2 text-slate-600">
                                    {h("planSection.step2.body")}
                                </p>
                                <div
                                    className="absolute right-6 md:inline-flex hidden top-1/2 -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full bg-[#FF7A00] text-white shadow-md"
                                    data-aos="zoom-in"
                                    data-aos-delay="500"
                                >
                                    <Zap className="h-6 w-6" />
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div
                                className="relative rounded-2xl border border-slate-200 bg-white p-6 md:pl-10 md:pr-24"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <div
                                    className="md:absolute md:-left-8 top-0 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FF7A00] text-white font-bold text-2xl shadow-md"
                                    data-aos="zoom-in"
                                    data-aos-delay="550"
                                >
                                    3
                                </div>
                                <h3 className="text-lg md:mt-0 mt-3 font-semibold text-slate-900">
                                    {h("planSection.step3.title")}
                                </h3>
                                <p className="mt-2 text-slate-600">
                                    {h("planSection.step3.body")}
                                </p>
                                <div
                                    className="absolute right-6 md:inline-flex hidden top-1/2 -translate-y-1/2 h-14 w-14 items-center justify-center rounded-full bg-[#FF7A00] text-white shadow-md"
                                    data-aos="zoom-in"
                                    data-aos-delay="600"
                                >
                                    <TrendingUp className="h-6 w-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="relative bg-gradient-to-b from-sky-50 to-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
                    {/* Header Section */}
                    <div className="text-center" data-aos="fade-up">
                        <h2
                            className="text-3xl sm:text-4xl max-w-3xl mx-auto md:text-5xl font-bold tracking-tight text-slate-900"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <span>{h("focusBusinessSection.titleLine1")}</span>
                            <span className="text-[#FF7A00] mt-2 md:mt-3 block">
                                {h("focusBusinessSection.titleLine2")}
                            </span>
                        </h2>
                        <p
                            className="mx-auto mt-3 max-w-2xl md:text-2xl text-slate-600"
                            data-aos="fade"
                            data-aos-delay="200"
                        >
                            {h("focusBusinessSection.subtitle")}
                        </p>
                    </div>

                    {/* Mobile Grid */}
                    <div
                        className="mt-10 mb-6 grid grid-cols-2 gap-2 text-center sm:hidden"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div
                            className="rounded-xl bg-gradient-to-b from-[#FCE6CF] to-[#F7D5AF] p-4 text-slate-800 shadow-md"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            {h("focusBusinessSection.badges.noHardware")}
                        </div>
                        <div
                            className="rounded-xl bg-gradient-to-b from-[#E3F2D3] to-[#D1E6BE] p-4 text-slate-800 shadow-md"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            {h("focusBusinessSection.badges.humanLoop")}
                        </div>
                        <div
                            className="rounded-xl bg-gradient-to-b from-[#E5EEF9] to-[#CFDBF3] p-4 text-slate-800 shadow-md"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            {h("focusBusinessSection.badges.peaceMind")}
                        </div>
                        <div
                            className="rounded-xl bg-gradient-to-b from-[#FBE7EC] to-[#F3D2DD] p-4 text-slate-800 shadow-md"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            {h("focusBusinessSection.badges.simpleSetup")}
                        </div>
                        <div
                            className="rounded-xl bg-gradient-to-b from-[#FFF1D9] to-[#F7E0B8] p-4 text-slate-800 shadow-md"
                            data-aos="zoom-in"
                            data-aos-delay="500"
                        >
                            {h("focusBusinessSection.badges.noItTeam")}
                        </div>
                        <div
                            className="rounded-xl bg-gradient-to-b from-[#E3F3F3] to-[#CDE4E3] p-4 text-slate-800 shadow-md"
                            data-aos="zoom-in"
                            data-aos-delay="600"
                        >
                            {h("focusBusinessSection.badges.roiWeeks")}
                        </div>
                        <div
                            className="col-span-2 rounded-xl bg-gradient-to-b from-[#F2E9FB] to-[#E1D4F5] p-4 text-slate-800 shadow-md"
                            data-aos="zoom-in"
                            data-aos-delay="700"
                        >
                            {h("focusBusinessSection.badges.minItResources")}
                        </div>
                    </div>

                    {/* Desktop Circular Image Layout */}
                    <div
                        className="relative mx-auto hidden aspect-square w-full max-w-[820px] sm:block [--r:235px] md:[--r:270px]"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        {/* Center logo */}
                        <div
                            className="absolute left-1/2 top-1/2 z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1784db] shadow-2xl ring-1 ring-black/10 flex items-center justify-center"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <Image
                                src={"/weblogo.svg"}
                                className="w-full max-w-[80%]"
                                width={100}
                                height={100}
                                alt="CelesteIQ Logo"
                            />
                        </div>

                        <Image
                            src={"/focus.png"}
                            className="w-full"
                            width={600}
                            height={600}
                            alt="CelesteIQ"
                            data-aos="zoom-in"
                            data-aos-delay="500"
                        />
                    </div>

                    {/* CTA Button */}
                    <div
                        className="flex justify-center mt-10"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                    >
                        <Link href="/contact">
                            <Button
                                size={"lg"}
                                className="bg-[#FF7A00] px-6 py-6 text-white shadow-md hover:bg-[#FF7A00]"
                            >
                                {h("focusBusinessSection.cta")} <ArrowRight />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>



            <section className="relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/imagineAi.png"
                        alt="Background"
                        fill
                        priority
                        className="object-cover"
                        data-aos="fade"
                        data-aos-duration="1200"
                    />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
                    {/* Heading */}
                    <div className="text-center" data-aos="fade-up">
                        <h2
                            className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            {h("imagineAiSection.title")}
                        </h2>
                        <p
                            className="mt-2 text-slate-500"
                            data-aos="fade"
                            data-aos-delay="200"
                        >
                            {h("imagineAiSection.subtitle")}
                        </p>
                    </div>

                    {/* Image Cards */}
                    <div
                        className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div
                            className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <Image
                                src="/ai-customer-service.png"
                                alt={h("imagineAiSection.cards.customerService.alt")}
                                width={900}
                                height={560}
                                className="h-56 w-full object-cover md:h-72"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute bottom-4 left-5">
                                <p className="text-lg font-semibold text-white">
                                    {h("imagineAiSection.cards.customerService.title")}
                                </p>
                                <p className="text-white/90 text-sm">
                                    {h("imagineAiSection.cards.customerService.body")}
                                </p>
                            </div>
                        </div>

                        <div
                            className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <Image
                                src="/ai-data-analysis.png"
                                alt={h("imagineAiSection.cards.dataAnalysis.alt")}
                                width={900}
                                height={560}
                                className="h-56 w-full object-cover md:h-72"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute bottom-4 left-5">
                                <p className="text-lg font-semibold text-white">
                                    {h("imagineAiSection.cards.dataAnalysis.title")}
                                </p>
                                <p className="text-white/90 text-sm">
                                    {h("imagineAiSection.cards.dataAnalysis.body")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div
                        className="mt-6 grid grid-cols-1 mx-auto max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div
                            className="flex items-center gap-3 rounded-xl bg-white/90 p-4 shadow-md ring-1 ring-black/5 backdrop-blur"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FF7A00] text-white">
                                <MessageSquare className="h-5 w-5" />
                            </span>
                            <span className="text-slate-700 font-medium">
                                {h("imagineAiSection.features.autoResponses")}
                            </span>
                        </div>

                        <div
                            className="flex items-center gap-3 rounded-xl bg-white/90 p-4 shadow-md ring-1 ring-black/5 backdrop-blur"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FF7A00] text-white">
                                <TrendingUp className="h-5 w-5" />
                            </span>
                            <span className="text-slate-700 font-medium">
                                {h("imagineAiSection.features.salesFollowups")}
                            </span>
                        </div>

                        <div
                            className="flex items-center gap-3 rounded-xl bg-white/90 p-4 shadow-md ring-1 ring-black/5 backdrop-blur"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FF7A00] text-white">
                                <Users className="h-5 w-5" />
                            </span>
                            <span className="text-slate-700 font-medium">
                                {h("imagineAiSection.features.hrAutomated")}
                            </span>
                        </div>

                        <div
                            className="flex items-center gap-3 rounded-xl bg-white/90 p-4 shadow-md ring-1 ring-black/5 backdrop-blur"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FF7A00] text-white">
                                <Clock className="h-5 w-5" />
                            </span>
                            <span className="text-slate-700 font-medium">
                                {h("imagineAiSection.features.moreStrategyTime")}
                            </span>
                        </div>

                        <div
                            className="flex items-center gap-3 rounded-xl bg-white/90 p-4 shadow-md ring-1 ring-black/5 backdrop-blur"
                            data-aos="zoom-in"
                            data-aos-delay="500"
                        >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FF7A00] text-white">
                                <Award className="h-5 w-5" />
                            </span>
                            <span className="text-slate-700 font-medium">
                                {h("imagineAiSection.features.customerSatisfaction")}
                            </span>
                        </div>

                        <div
                            className="flex items-center gap-3 rounded-xl bg-white/90 p-4 shadow-md ring-1 ring-black/5 backdrop-blur"
                            data-aos="zoom-in"
                            data-aos-delay="600"
                        >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FF7A00] text-white">
                                <CircleCheckBig className="h-5 w-5" />
                            </span>
                            <span className="text-slate-700 font-medium">
                                {h("imagineAiSection.features.consistentQuality")}
                            </span>
                        </div>
                    </div>
                </div>
            </section>



            <section
                className="relative"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
                    {/* Heading */}
                    <div
                        className="text-center"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h2 className="text-3xl sm:text-4xl max-w-6xl mx-auto md:text-5xl font-bold tracking-tight text-slate-900">
                            <span>{h("invoiceCompareSection.titleLine1")}&nbsp;</span>
                            <span className="text-[#FF7A00]">
                                {h("invoiceCompareSection.titleHighlight")}
                            </span>
                        </h2>
                        <p
                            className="mx-auto mt-3 max-w-2xl md:text-xl text-slate-600"
                            data-aos="fade"
                            data-aos-delay="200"
                        >
                            {h("invoiceCompareSection.subtitle")}
                        </p>
                    </div>

                    <div className="md:mt-16 mt-6">
                        {/* Desktop Before / After labels */}
                        <div
                            className="grid-cols-2 gap-5 md:grid text-center mb-10 hidden"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <h2 className="text-3xl font-semibold">
                                {h("invoiceCompareSection.beforeLabel")}
                            </h2>
                            <h2 className="text-3xl font-semibold">
                                {h("invoiceCompareSection.afterLabel")}
                            </h2>
                        </div>

                        {/* Desktop combined image */}
                        <Image
                            src="/robot.png"
                            width={1000}
                            height={700}
                            className="w-full md:block hidden select-none"
                            alt={h("invoiceCompareSection.compareAlt")}
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        />

                        {/* Mobile split layout */}
                        <div
                            className="flex block md:hidden items-center flex-col gap-4"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <h2 className="text-3xl font-semibold mb-4">
                                {h("invoiceCompareSection.beforeLabel")}
                            </h2>
                            <Image
                                src="/robot1.png"
                                width={1000}
                                height={700}
                                className="w-full select-none"
                                alt={h("invoiceCompareSection.beforeAlt")}
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            />
                            <Image
                                src="/robotline.png"
                                width={1000}
                                height={700}
                                className="w-full select-none"
                                alt={h("invoiceCompareSection.dividerAlt")}
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            />
                            <h2 className="text-3xl font-semibold mb-4">
                                {h("invoiceCompareSection.afterLabel")}
                            </h2>
                            <Image
                                src="/robot2.png"
                                width={1000}
                                height={700}
                                className="w-full select-none"
                                alt={h("invoiceCompareSection.afterAlt")}
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            />
                        </div>

                        {/* Result banner */}
                        <div
                            className="mt-6 md:mt-10 rounded-2xl bg-gradient-to-r from-[#DCFCE7] to-[#DBEAFE] px-4 py-8 text-center shadow-sm ring-1 ring-emerald-100/60"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <p className="flex flex-wrap items-center justify-center gap-1 font-semibold text-lg md:text-2xl text-slate-900">
                                <span className="flex items-center gap-1">
                                    <Zap className="h-5 w-5 text-yellow-400" />
                                    <span className="font-semibold text-emerald-600">
                                        {h("invoiceCompareSection.resultLabel")}
                                    </span>
                                </span>
                                <span>{h("invoiceCompareSection.resultPart1")}</span>
                                <span className="font-semibold text-[#FF7A00]">
                                    {h("invoiceCompareSection.resultHighlight")}
                                </span>
                                <span>{h("invoiceCompareSection.resultPart2")}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            <section
                className="relative overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                {/* Background */}
                <div
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-[#E3F2FD] to-white"
                    data-aos="fade"
                    data-aos-delay="100"
                />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
                    {/* Heading */}
                    <div
                        className="text-center"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                            <span>{h("trustedPartnerSection.titleLine1")}&nbsp;</span>
                            <span className="bg-gradient-to-r mt-3 from-[#FF7A00] md:block via-[#FF7A00] to-orange-400 bg-clip-text text-transparent">
                                {h("trustedPartnerSection.titleHighlight")}
                            </span>
                        </h2>
                    </div>

                    <div className="relative mt-8">
                        <div
                            className="relative z-10 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-4 md:mt-16"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <Image
                                src="/flower.png"
                                alt={h("trustedPartnerSection.centerImageAlt")}
                                width={300}
                                height={300}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full max-w-[15rem] select-none"
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            />

                            {/* Automation */}
                            <div
                                className="rounded-2xl relative backdrop-blur-xl border p-6 md:py-10 text-center"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <h3 className="text-2xl font-semibold text-slate-800">
                                    {h("trustedPartnerSection.cards.automation.title")}
                                </h3>
                                <div className="mx-auto my-10 flex h-12 w-12 items-center justify-center rounded-md text-slate-700">
                                    <Bot className="h-12 w-12" />
                                </div>
                                <p className="text-slate-600">
                                    {h("trustedPartnerSection.cards.automation.body")}
                                </p>
                            </div>

                            {/* Intelligent Analysis */}
                            <div
                                className="rounded-2xl backdrop-blur-xl border p-6 md:py-10 text-center"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                <h3 className="text-2xl font-semibold text-slate-800">
                                    {h("trustedPartnerSection.cards.analysis.title")}
                                </h3>
                                <div className="mx-auto my-10 flex h-12 w-12 items-center justify-center rounded-md text-slate-700">
                                    <Puzzle className="h-12 w-12" />
                                </div>
                                <p className="text-slate-600">
                                    {h("trustedPartnerSection.cards.analysis.body")}
                                </p>
                            </div>

                            {/* Innovation */}
                            <div
                                className="rounded-2xl backdrop-blur-xl border p-6 md:py-10 text-center"
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            >
                                <h3 className="text-2xl font-semibold text-slate-800">
                                    {h("trustedPartnerSection.cards.innovation.title")}
                                </h3>
                                <div className="mx-auto my-10 flex h-12 w-12 items-center justify-center rounded-md text-slate-700">
                                    <Lightbulb className="h-12 w-12" />
                                </div>
                                <p className="text-slate-600">
                                    {h("trustedPartnerSection.cards.innovation.body")}
                                </p>
                            </div>

                            {/* Security */}
                            <div
                                className="rounded-2xl backdrop-blur-xl border p-6 md:py-10 text-center"
                                data-aos="zoom-in"
                                data-aos-delay="500"
                            >
                                <h3 className="text-2xl font-semibold text-slate-800">
                                    {h("trustedPartnerSection.cards.security.title")}
                                </h3>
                                <div className="mx-auto my-10 flex h-12 w-12 items-center justify-center rounded-md text-slate-700">
                                    <Lock className="h-12 w-12" />
                                </div>
                                <p className="text-slate-600">
                                    {h("trustedPartnerSection.cards.security.body")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className="mt-10">
                <InfiniteScroll />
            </div>

            <section className="bg-white py-12 sm:py-16" data-aos="fade-up">
                <div
                    className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
                    data-aos="fade-up"
                    data-aos-delay="80"
                >
                    {/* Heading */}
                    <div
                        className="text-center"
                        data-aos="fade-up"
                        data-aos-delay="120"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                            {h("videoSection.title")}
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl md:text-xl font-medium text-[#374151]">
                            {h("videoSection.subtitle")}
                        </p>
                    </div>

                    {/* Video Wrapper */}
                    <div className="mx-auto w-full max-w-5xl mt-10 p-4" data-aos="fade-up" data-aos-delay="180">
                        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                                {!play ? (
                                    <>
                                        <Image
                                            src="/videothumb.png"
                                            alt={h("videoSection.thumbnailAlt")}
                                            fill
                                            priority
                                            className="object-cover"
                                        />
                                        <button
                                            onClick={() => setPlay(true)}
                                            className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                            aria-label={h("videoSection.playAria")}
                                        >
                                            <Image
                                                src="/playBtn.png"
                                                alt={h("videoSection.playAlt")}
                                                width={200}
                                                height={200}
                                                className="w-20 select-none transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </button>
                                    </>
                                ) : (
                                    <iframe
                                        src="https://www.youtube.com/embed/X530be30ekQ?autoplay=1"
                                        allowFullScreen
                                        className="absolute left-0 top-0 h-full w-full rounded-2xl"
                                        title={h("videoSection.iframeTitle")}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="relative overflow-hidden bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    {/* Heading */}
                    <div className="relative text-center">
                        <div className="text-center">
                            <h2
                                data-aos="fade-up"
                                className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-900"
                            >
                                {h("packagesSection.title")}
                            </h2>
                            <p
                                className="mt-2 text-slate-600 font-medium"
                                data-aos="fade-up"
                            >
                                {h("packagesSection.subtitle")}
                            </p>
                        </div>
                    </div>

                    {/* Cards */}
                    <div
                        data-aos="fade-up"
                        className="relative md:mt-24 mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 items-start"
                    >
                        {/* Card 1 – IT Admin Pack */}
                        <div className="group relative">
                            {/* gradient border & glow */}
                            <div className="absolute -inset-[1px] rounded-3xl bg-[conic-gradient(at_0%_0%,#ffd6a5,transparent_30%,#fecaca_60%,transparent_70%,#bfdbfe_90%)] opacity-60 blur-[6px] transition-all duration-300 group-hover:opacity-100" />
                            <div className="relative rounded-3xl bg-white/80 p-6 sm:p-7 ring-1 ring-black/5 shadow-lg backdrop-blur supports-[backdrop-filter]:backdrop-blur-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                                <h3 className=" text-xl font-bold text-slate-900">
                                    {h("packagesSection.card1.title")}
                                </h3>
                                <p className="mt-2 text-slate-700">{h("packagesSection.card1.subtitle")}</p>

                                <ul className="mt-6 space-y-3 text-slate-700">
                                    <li className="flex items-start gap-3">
                                        <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-orange-100 ring-1 ring-orange-200">
                                            <Check className="h-4 w-4 shrink-0 text-[#FF7A00]" />
                                        </span>
                                        {h("packagesSection.card1.item1")}
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-orange-100 ring-1 ring-orange-200">
                                            <Check className="h-4 w-4 shrink-0 text-[#FF7A00]" />
                                        </span>
                                        {h("packagesSection.card1.item2")}
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-orange-100 ring-1 ring-orange-200">
                                            <Check className="h-4 w-4 shrink-0 text-[#FF7A00]" />
                                        </span>
                                        {h("packagesSection.card1.item3")}
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-orange-100 ring-1 ring-orange-200">
                                            <Check className="h-4 w-4 shrink-0 text-[#FF7A00]" />
                                        </span>
                                        {h("packagesSection.card1.item4")}
                                    </li>
                                </ul>

                                <p className="mt-6 text-sm">
                                    <span className="font-semibold text-orange-600">
                                        {h("packagesSection.idealForLabel")}
                                    </span>{" "}
                                    {h("packagesSection.card1.idealFor")}
                                </p>

                                <div className="mt-7">
                                    <Link href="/contact">
                                        <Button className="group/btn relative w-full bg-[#FF7A00] text-white py-6 shadow-sm ring-1 ring-[#FF7A00]/30 transition-all hover:bg-[#FF7A00] hover:shadow-md hover:ring-[#FF7A00]/50">
                                            <span className="relative z-10 flex items-center justify-center">
                                                {h("packagesSection.cta")} <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                                            </span>
                                            {/* Shine sweep */}
                                            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
                                                <span className="absolute -inset-y-8 -left-1/2 h-[200%] w-1/2 -rotate-12 bg-white/25 blur-md transition-transform duration-700 ease-out group-hover/btn:translate-x-[220%]" />
                                            </span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 – Featured / Power Platform */}
                        <div className="group relative md:-mt-12">
                            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-b from-orange-400/30 via-rose-400/30 to-sky-400/30 blur-2xl opacity-70 transition-all duration-300 group-hover:opacity-100" />
                            <div className="relative rounded-[2rem] bg-gradient-to-br from-[#FF7A00] via-[#FF7A00] to-rose-500 p-0.5 shadow-2xl">
                                <div className="relative rounded-[calc(2rem-2px)] bg-gradient-to-b from-[#FF7A00] via-[#FF7A00] to-rose-600 p-6 md:p-8 text-white ring-1 ring-white/15">
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -inset-1 rounded-[inherit] bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.35),transparent_60%)]"
                                    />
                                    <span className="absolute z-20 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-slate-900 shadow">
                                        {h("packagesSection.card2.badge")}
                                    </span>

                                    <h3 className="relative z-10 text-xl font-bold">
                                        {h("packagesSection.card2.title")}
                                    </h3>
                                    <p className="relative z-10 mt-2 text-white/90 font-semibold">
                                        {h("packagesSection.card2.subtitle")}
                                    </p>

                                    <ul className="relative z-10 mt-6 space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-white/15 ring-1 ring-white/30">
                                                <Check className="h-4 w-4 shrink-0 text-white" />
                                            </span>
                                            {h("packagesSection.card2.item1")}
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-white/15 ring-1 ring-white/30">
                                                <Check className="h-4 w-4 shrink-0 text-white" />
                                            </span>
                                            {h("packagesSection.card2.item2")}
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-white/15 ring-1 ring-white/30">
                                                <Check className="h-4 w-4 shrink-0 text-white" />
                                            </span>
                                            {h("packagesSection.card2.item3")}
                                        </li>
                                    </ul>

                                    <p className="relative z-10 mt-6 text-sm text-orange-50">
                                        <span className="font-semibold">{h("packagesSection.idealForLabel")}</span>{" "}
                                        {h("packagesSection.card2.idealFor")}
                                    </p>

                                    <div className="relative z-10 mt-7">
                                        <Link href="/contact">
                                            <Button
                                                variant="secondary"
                                                className="group/btn relative w-full bg:white/95 py-6 text-orange-600 shadow-sm ring-1 ring-white/40 transition-all hover:bg-white hover:shadow-lg"
                                            >
                                                <span className="relative z-10 flex items-center justify-center">
                                                    {h("packagesSection.cta")}{" "}
                                                    <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                                                </span>
                                                {/* Shine sweep */}
                                                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
                                                    <span className="absolute -inset-y-8 -left-1/2 h-[200%] w-1/2 -rotate-12 bg-white/40 blur-md transition-transform duration-700 ease-out group-hover/btn:translate-x-[220%]" />
                                                </span>
                                            </Button>
                                        </Link>
                                    </div>

                                    {/* Floating decorative dots */}
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute right-4 bottom-4 md:flex hidden gap-2 opacity-70"
                                    >
                                        <span className="h-2 w-2 rounded-full bg-white/60" />
                                        <span className="h-2 w-2 rounded-full bg:white/60" />
                                        <span className="h-2 w-2 rounded-full bg:white/60" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 – Security Pack */}
                        <div className="group relative">
                            {/* gradient border & glow */}
                            <div className="absolute -inset-[1px] rounded-3xl bg-[conic-gradient(at_100%_0%,#bfdbfe,transparent_30%,#ffd6a5_60%,transparent_70%,#fecaca_90%)] opacity-60 blur-[6px] transition-all duration-300 group-hover:opacity-100" />
                            <div className="relative rounded-3xl bg-white/80 p-6 sm:p-6 ring-1 ring-black/5 shadow-lg backdrop-blur supports-[backdrop-filter]:backdrop-blur-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                                <h3 className="text-xl font-bold text-slate-900">
                                    {h("packagesSection.card3.title")}
                                </h3>
                                <p className="mt-2 text-slate-700">{h("packagesSection.card3.subtitle")}</p>
                                <p className="mt-3 text-slate-700">{h("packagesSection.card3.body")}</p>

                                <ul className="mt-6 space-y-3 text-slate-700">
                                    <li className="flex items-start gap-3">
                                        <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-orange-100 ring-1 ring-orange-200">
                                            <Check className="h-4 w-4 shrink-0 text-[#FF7A00]" />
                                        </span>
                                        {h("packagesSection.card3.item1")}
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-orange-100 ring-1 ring-orange-200">
                                            <Check className="h-4 w-4 shrink-0 text-[#FF7A00]" />
                                        </span>
                                        {h("packagesSection.card3.item2")}
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-orange-100 ring-1 ring-orange-200">
                                            <Check className="h-4 w-4 shrink-0 text-[#FF7A00]" />
                                        </span>
                                        {h("packagesSection.card3.item3")}
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="grid place-items-center shrink-0 h-6 w-6 rounded-full bg-orange-100 ring-1 ring-orange-200">
                                            <Check className="h-4 w-4 shrink-0 text-[#FF7A00]" />
                                        </span>
                                        {h("packagesSection.card3.item4")}
                                    </li>
                                </ul>

                                <p className="mt-6 text-slate-700">{h("packagesSection.card3.footer")}</p>

                                <div className="mt-7">
                                    <Link href="/contact">
                                        <Button className="group/btn relative w-full bg-[#FF7A00] text-white py-6 shadow-sm ring-1 ring-[#FF7A00]/30 transition-all hover:bg-[#FF7A00] hover:shadow-md hover:ring-[#FF7A00]/50">
                                            <span className="relative z-10 flex items-center justify-center">
                                                {h("packagesSection.cta")} <ArrowRight className="ml-2 h-4 w-4" />
                                            </span>
                                            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
                                                <span className="absolute -inset-y-8 -left-1/2 h-[200%] w-1/2 -rotate-12 bg-white/25 blur-md transition-transform duration-700 ease-out group-hover/btn:translate-x-[220%]" />
                                            </span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/alliances-bg.png"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center text-white">
                    <div
                        className="inline-flex items-center gap-3 rounded-lg bg-white px-3 py-3 shadow-lg ring-1 ring-black/5"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="800"
                    >
                        <Image
                            src={"/microsoft.svg"}
                            width={100}
                            height={100}
                            className="h-10 w-auto"
                            alt="Microsoft"
                        />
                        <Award className="h-7 w-7 text-[#FF7A00] animate-pulse" />
                    </div>

                    <h2
                        className="mt-5 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        {h("alliancesSection.title")}
                    </h2>

                    <p
                        className="max-w-lg mt-3 mx-auto font-medium text-white/90"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                    >
                        {h("alliancesSection.body")}
                    </p>
                </div>
            </section>



            <SuccessStoriesCarousel />

            <section className="">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    {/* Heading */}
                    <div
                        className="text-center"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                            {h("blogSection.title")}
                        </h2>
                        <p className="mt-3 text-slate-600 text-lg">
                            {h("blogSection.subtitle")}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Featured post */}
                        <div
                            className="overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="800"
                        >
                            <div className="relative h-64 w-full sm:h-96">
                                <Image
                                    src={featured?.image || "/blog1.png"}
                                    alt={featured?.title || "Featured post"}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                                />
                                <span className="absolute left-4 top-4 rounded-full bg-[#FF7A00] px-3 py-1 text-xs font-semibold text-white animate-pulse">
                                    {featured?.category || h("blogSection.featured.badge")}
                                </span>
                            </div>

                            <div className="p-6 sm:p-8">
                                <div className="flex items-center gap-2 text-slate-500 text-sm">
                                    <Calendar className="h-4 w-4" />
                                    <span>
                                        {featured ? formatDate(featured.createdAt) : h("blogSection.featured.date")}
                                    </span>
                                </div>
                                <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-900">
                                    {featured?.title || h("blogSection.featured.title")}
                                </h3>
                                <p className="mt-3 text-slate-600">
                                    {featured?.summary || h("blogSection.featured.body")}
                                </p>
                                <div className="mt-5">
                                    <Button
                                        asChild
                                        className="bg-[#FF7A00] px-5 text-white hover:bg-[#FF7A00]"
                                    >
                                        <Link href={"/blog"}>
                                            {featured?.buttonText || h("blogSection.featured.cta")}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Side list */}
                        <div className="flex flex-col gap-4">
                            {/* If we have blogs from API → show them; otherwise fallback to static translations */}
                            {isLoadingBlogs && (
                                <div className="rounded-2xl p-5 bg-[#f9fafb] ring-1 ring-black/5 text-sm text-slate-500">
                                    Loading articles…
                                </div>
                            )}

                            {!isLoadingBlogs && sideList.length > 0 ? (
                                sideList.map((blog, idx) => (
                                    <div
                                        key={blog._id}
                                        className="rounded-2xl p-5 bg-[#f9fafb] ring-1 ring-black/5"
                                        data-aos="fade-up"
                                        data-aos-delay={150 + idx * 100}
                                        data-aos-duration="700"
                                    >
                                        <div className="flex items-start justify-between">
                                            <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[11px] font-semibold text-[#FF7A00]">
                                                {blog.category}
                                            </span>
                                        </div>
                                        <Link
                                            href={"/blog"}
                                            className="mt-3 block text-base font-medium text-slate-900 hover:underline"
                                        >
                                            {blog.title}
                                        </Link>
                                        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                                            <Calendar className="h-4 w-4" />
                                            {formatDate(blog.createdAt)}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <>
                                    {/* Strategy fallback */}
                                    <div
                                        className="rounded-2xl p-5 bg-[#f9fafb] ring-1 ring-black/5"
                                        data-aos="fade-up"
                                        data-aos-delay="150"
                                        data-aos-duration="700"
                                    >
                                        <div className="flex items-start justify-between">
                                            <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[11px] font-semibold text-[#FF7A00]">
                                                {h("blogSection.list.strategy.badge")}
                                            </span>
                                        </div>
                                        <Link
                                            href="/blog"
                                            className="mt-3 block text-base font-medium text-slate-900 hover:underline"
                                        >
                                            {h("blogSection.list.strategy.title")}
                                        </Link>
                                        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                                            <Calendar className="h-4 w-4" />
                                            {h("blogSection.list.strategy.date")}
                                        </div>
                                    </div>

                                    {/* Technology fallback */}
                                    <div
                                        className="rounded-2xl p-5 bg-[#f9fafb] ring-1 ring-black/5"
                                        data-aos="fade-up"
                                        data-aos-delay="250"
                                        data-aos-duration="700"
                                    >
                                        <div className="flex items-start justify-between">
                                            <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[11px] font-semibold text-[#FF7A00]">
                                                {h("blogSection.list.technology.badge")}
                                            </span>
                                        </div>
                                        <Link
                                            href="/blog"
                                            className="mt-3 block text-base font-medium text-slate-900 hover:underline"
                                        >
                                            {h("blogSection.list.technology.title")}
                                        </Link>
                                        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                                            <Calendar className="h-4 w-4" />
                                            {h("blogSection.list.technology.date")}
                                        </div>
                                    </div>

                                    {/* Case Studies fallback */}
                                    <div
                                        className="rounded-2xl p-5 bg-[#f9fafb] ring-1 ring-black/5"
                                        data-aos="fade-up"
                                        data-aos-delay="350"
                                        data-aos-duration="700"
                                    >
                                        <div className="flex items-start justify-between">
                                            <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[11px] font-semibold text-[#FF7A00]">
                                                {h("blogSection.list.caseStudies.badge")}
                                            </span>
                                        </div>
                                        <Link
                                            href="/blog"
                                            className="mt-3 block text-base font-medium text-slate-900 hover:underline"
                                        >
                                            {h("blogSection.list.caseStudies.title")}
                                        </Link>
                                        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                                            <Calendar className="h-4 w-4" />
                                            {h("blogSection.list.caseStudies.date")}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                </div>
            </section>


            <section className="relative overflow-hidden">
                <Image
                    src="/orangeBg.png"
                    alt="Background"
                    fill
                    className="absolute inset-0 -z-10 object-cover transition-transform duration-1000 ease-out scale-105 hover:scale-110"
                />

                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center text-white">
                    {/* Badge */}
                    <div
                        className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold backdrop-blur animate-pulse"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>{h("limitedOfferSection.badge")}</span>
                    </div>

                    {/* Heading */}
                    <h2
                        className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight opacity-0 translate-y-6 animate-fade-in-up"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="150"
                    >
                        {h("limitedOfferSection.titleLine1")}
                        <br />
                        {h("limitedOfferSection.titleLine2")}
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="mx-auto mt-3 max-w-3xl text-sm sm:text-base text-white/90 opacity-0 translate-y-6 animate-fade-in-up"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                    >
                        {h("limitedOfferSection.subtitle")}
                    </p>

                    {/* Buttons */}
                    <div
                        className="mt-7 flex flex-wrap items-center justify-center gap-3 opacity-0 translate-y-6 animate-fade-in-up"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="450"
                    >
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="rounded-lg md:w-auto w-full bg-white px-5 py-6 text-[#FF7A00] hover:bg-orange-50 transition-all duration-300"
                            >
                                {h("limitedOfferSection.primaryCta")}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>

                        <Link href="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-lg md:w-auto w-full py-6 bg-transparent hover:bg-white border-white text-white hover:text-[#FF7A00] transition-all duration-300"
                            >
                                {h("limitedOfferSection.secondaryCta")}
                            </Button>
                        </Link>
                    </div>

                    {/* Footnote */}
                    <p
                        className="mt-5 text-xs text-white/80 opacity-0 translate-y-6 animate-fade-in-up"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        {h("limitedOfferSection.footnote")}
                    </p>
                </div>
            </section>


            <section className="">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
                    {/* Heading */}
                    <div className="text-center">
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 opacity-0 translate-y-6 animate-fade-in-up"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            {h("aiAssistantContact.title")}
                        </h2>
                        <p
                            className="mt-3 text-[#4B5563] font-medium text-lg opacity-0 translate-y-6 animate-fade-in-up"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="150"
                        >
                            {h("aiAssistantContact.subtitle")}
                        </p>
                    </div>

                    <div className="md:mt-24 mt-28 grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* AI Assistant Card */}
                        <div
                            className="relative opacity-0 translate-y-6 animate-fade-in-up"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="absolute -top-28 left-8 z-10 h-58 w-52 overflow-hidden rounded-full transition-transform duration-700 ease-out hover:scale-105">
                                <Image
                                    src="/assistant-avatar.png"
                                    alt="AI Assistant"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="rounded-3xl bg-[#1e3e9f] p-6 sm:p-8 text-white shadow-[0_24px_60px_rgba(2,6,23,0.12)] transition-transform duration-700 hover:scale-105">
                                <h3 className="mt-24 text-2xl font-semibold">
                                    {h("aiAssistantContact.cardTitle")}
                                </h3>
                                <p className="mt-3 text-white/90">{h("aiAssistantContact.cardBody")}</p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-[#FF7A00]" />
                                        <span>{h("aiAssistantContact.bullet1")}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-[#FF7A00]" />
                                        <span>{h("aiAssistantContact.bullet2")}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-[#FF7A00]" />
                                        <span>{h("aiAssistantContact.bullet3")}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div
                            className="rounded-3xl bg-white p-6 sm:p-8 shadow-[0_24px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5 opacity-0 translate-y-6 animate-fade-in-up"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <form
                                className="space-y-5"
                                onSubmit={handleSubmit}
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                {/* Honeypot for spam protection */}
                                <input
                                    type="checkbox"
                                    name="botcheck"
                                    className="hidden"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />

                                <div className="space-y-2">
                                    <Label htmlFor="name">{h("aiAssistantContact.form.nameLabel")}</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        required
                                        placeholder={h("aiAssistantContact.form.namePlaceholder")}
                                        className="border-slate-200 py-6"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">{h("aiAssistantContact.form.emailLabel")}</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder={h("aiAssistantContact.form.emailPlaceholder")}
                                        className="border-slate-200 py-6"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="company">{h("aiAssistantContact.form.companyLabel")}</Label>
                                    <Input
                                        id="company"
                                        name="company"
                                        required
                                        placeholder={h("aiAssistantContact.form.companyPlaceholder")}
                                        className="border-slate-200 py-6"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="needs">{h("aiAssistantContact.form.needsLabel")}</Label>
                                    <Textarea
                                        id="needs"
                                        name="needs"
                                        required
                                        placeholder={h("aiAssistantContact.form.needsPlaceholder")}
                                        className="min-h-[120px] border-slate-200 py-6"
                                        rows={6}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full rounded-lg bg-[#FF7A00] text-white hover:bg-[#FF7A00] py-6 transition-transform duration-300 hover:scale-105"
                                >
                                    {isSubmitting ? <Spinner /> : h("aiAssistantContact.form.button")}
                                    <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}
