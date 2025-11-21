"use client"

import React, { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Wrapper from "../Wrapper"
import { ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

type QA = {
    id: string
    q: string
    a: React.ReactNode
}


// blog type coming from your /api/blog response
type BlogType = {
    _id: string
    category: string
    title: string
    summary: string
    image: string
    buttonText: string
    createdAt: string
    slug?: string
}

export default function Blog() {
    const h = useTranslations("blog")
    const b = useTranslations("blogIntro")

    const [blogs, setBlogs] = useState<BlogType[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setIsLoading(true)
                const res = await fetch("/api/blog")
                const data = await res.json()

                if (data.success) {
                    setBlogs(data.data as BlogType[])
                } else {
                    console.error("Failed to load blogs:", data.message)
                }
            } catch (error) {
                console.error("Error loading blogs:", error)
            } finally {
                setIsLoading(false)
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

    return (
        <Wrapper>
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#99d9f1]">
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
                            {h("title")}
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

            {/* Blog list */}
            <section className="py-12 sm:py-16" data-aos="fade-up">
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
                            {b("title")}
                        </h2>
                        <p className="mx-auto mt-2 md:mt-3 md:text-xl font-medium max-w-2xl text-[#374151]">
                            {b("subtitle1")}
                        </p>
                        <p className="mx-auto mt-2 md:mt-3 md:text-xl max-w-2xl text-[#374151]">
                            {b("subtitle2")}
                        </p>
                    </div>

                    {/* Grid of blog cards */}
                    <div
                        className="grid md:mt-16 mt-8 md:grid-cols-2 md:gap-8 gap-4 grid-cols-1"
                        data-aos="fade-up"
                        data-aos-delay="160"
                    >
                        {isLoading && (
                            <div className="col-span-full text-center text-slate-500">
                                Loading articles...
                            </div>
                        )}

                        {!isLoading && blogs.length === 0 && (
                            <div className="col-span-full text-center text-slate-500">
                                No articles available yet. New content will appear here soon.
                            </div>
                        )}

                        {blogs.map((blog, index) => (
                            <div
                                key={blog._id}
                                className="overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(2,6,23,0.08)] ring-1 ring-black/5"
                                data-aos="fade-up"
                                data-aos-delay={200 + index * 30}
                            >
                                <div className="relative w-full sm:h-96">
                                    <Image
                                        src={blog.image || "/blog1.png"}
                                        alt={blog.title}
                                        width={500}
                                        height={300}
                                        className="object-cover w-full sm:h-96"
                                    />
                                    {blog.category && (
                                        <span className="absolute left-4 top-4 rounded-full bg-[#FF7A00] px-3 py-1 text-xs font-semibold text-white">
                                            {blog.category}
                                        </span>
                                    )}
                                </div>
                                <div className="p-4 sm:p-6">
                                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                                        <Calendar className="h-4 w-4" />
                                        <span>{formatDate(blog.createdAt)}</span>
                                    </div>
                                    <h3 className="mt-2 text-xl font-medium text-slate-900 line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="mt-3 text-slate-600 line-clamp-3">
                                        {blog.summary}
                                    </p>
                                    <div className="mt-5">
                                        <Button
                                            asChild
                                            className="bg-[#FF7A00] px-5 text-white hover:bg-[#FF7A00]"
                                        >
                                            {/* later you can switch this to `/blog/${blog.slug}` */}
                                            <Link href="/blog">
                                                {blog.buttonText || "Read More"}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        className="flex items-center justify-center mt-10"
                        data-aos="fade-up"
                        data-aos-delay="320"
                    >
                        <Button
                            className="py-6 bg-[#FF7A00] rounded-full text-white hover:bg-orange-600"
                            size={"lg"}
                        >
                            {b("ctablog")}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}
