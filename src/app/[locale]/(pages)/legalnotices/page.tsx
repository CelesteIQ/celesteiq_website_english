import Navbar from '@/components/Navbar'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Wrapper from '../Wrapper';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Home, Sparkles, ArrowRight, CheckCircle2, Globe } from "lucide-react";
import Image from 'next/image';
import { Building2, ShieldCheck, Cookie, FileText } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Legalnotices() {

    const t = useTranslations("legal");
    const h = useTranslations("ctaHero");

    return (
        <Wrapper>

            <section
                className="relative overflow-hidden bg-[#99d9f1]"
                data-aos="fade-up"
            >
                <div
                    className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <Navbar />

                    <div
                        className="relative rounded-b-[56px] px-4 py-12 sm:py-16 md:py-20 max-w-3xl mx-auto"
                        data-aos-delay="180"
                    >
                        <h1
                            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white"
                            data-aos="fade-up"
                            data-aos-delay="220"
                        >
                            {t("heroTitle")}
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
                            {t("sectionTitle")}
                        </h2>
                        <p className="mx-auto mt-2 md:mt-3 md:text-xl font-medium max-w-2xl text-[#374151]">
                            {t("sectionSubtitle")}
                            <span className="block">
                                {t("sectionSubtitleLinkLabel")}&nbsp;
                                <a
                                    href="https://air-cloud.fr/es/notas-legales/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline hover:text-blue-700"
                                >
                                    https://air-cloud.fr/es/notas-legales/
                                </a>
                            </span>
                        </p>
                    </div>

                    <div
                        className="bg-white py-10 sm:py-14"
                        data-aos="fade-up"
                        data-aos-delay="160"
                    >
                        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {/* Site Owner */}
                                <article
                                    className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <div className="flex items-start gap-4 flex-col">
                                        <span className="grid h-12 w-12 place-items-center rounded-md bg-[#FF7A00] text-white">
                                            <Globe className="h-6 w-6" />
                                        </span>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-slate-900">
                                                {t("siteOwner.title")}
                                            </h3>
                                            <dl className="mt-4 space-y-2 text-[15px] text-slate-700">
                                                <div className="grid grid-cols-[120px_1fr] gap-2">
                                                    <dt className="font-semibold text-slate-900">
                                                        {t("siteOwner.companyLabel")}
                                                    </dt>
                                                    <dd>{t("siteOwner.company")}</dd>
                                                </div>
                                                <div className="grid grid-cols-[120px_1fr] gap-2">
                                                    <dt className="font-semibold text-slate-900">
                                                        {t("siteOwner.legalNameLabel")}
                                                    </dt>
                                                    <dd>{t("siteOwner.legalName")}</dd>
                                                </div>
                                                <div className="grid grid-cols-[120px_1fr] gap-2">
                                                    <dt className="font-semibold text-slate-900">
                                                        {t("siteOwner.businessTypeLabel")}
                                                    </dt>
                                                    <dd>{t("siteOwner.businessType")}</dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </article>

                                {/* Data Protection */}
                                <article
                                    className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
                                    data-aos="fade-up"
                                    data-aos-delay="230"
                                >
                                    <div className="flex items-start gap-4 flex-col">
                                        <span className="grid h-12 w-12 place-items-center rounded-md bg-[#FF7A00] text-white">
                                            <ShieldCheck className="h-6 w-6" />
                                        </span>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-slate-900">
                                                {t("dataProtection.title")}
                                            </h3>
                                            <div className="mt-3 space-y-3 text-[15px] leading-6 text-slate-700">
                                                <p>{t("dataProtection.p1")}</p>
                                                <p>{t("dataProtection.p2")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                {/* Intellectual Property */}
                                <article
                                    className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
                                    data-aos="fade-up"
                                    data-aos-delay="260"
                                >
                                    <div className="flex items-start gap-4 flex-col">
                                        <span className="grid h-12 w-12 place-items-center rounded-md bg-[#FF7A00] text-white">
                                            <FileText className="h-6 w-6" />
                                        </span>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-slate-900">
                                                {t("intellectualProperty.title")}
                                            </h3>
                                            <div className="mt-3 space-y-3 text-[15px] leading-6 text-slate-700">
                                                <p>{t("intellectualProperty.p1")}</p>
                                                <p>{t("intellectualProperty.p2")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                {/* Cookie Policy */}
                                <article
                                    className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
                                    data-aos="fade-up"
                                    data-aos-delay="290"
                                >
                                    <div className="flex items-start gap-4 flex-col">
                                        <span className="grid h-12 w-12 place-items-center rounded-md bg-[#FF7A00] text-white">
                                            <Cookie className="h-6 w-6" />
                                        </span>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-slate-900">
                                                {t("cookiePolicy.title")}
                                            </h3>
                                            <div className="mt-3 space-y-3 text-[15px] leading-6 text-slate-700">
                                                <p>{t("cookiePolicy.p1")}</p>
                                                <p>{t("cookiePolicy.p2")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                {/* Contact */}
                                <article
                                    className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:col-span-2"
                                    data-aos="fade-up"
                                    data-aos-delay="320"
                                >
                                    <div className="flex items-start gap-4 flex-col">
                                        <span className="grid h-12 w-12 place-items-center rounded-md bg-[#FF7A00] text-white">
                                            <Building2 className="h-6 w-6" />
                                        </span>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-slate-900">
                                                {t("contactSection.title")}
                                            </h3>
                                            <p className="mt-3 text-[15px] leading-6 text-slate-700">
                                                {t("contactSection.body")}
                                                <a
                                                    href="mailto:legal@celesteiq.com"
                                                    className="ml-1 font-medium text-blue-500 hover:underline"
                                                >
                                                    {t("contactSection.emailLabel")}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section
                className="relative overflow-hidden mb-5 md:mt-16 mt-10"
                data-aos="fade-up"
            >
                <Image
                    src={"/orangeBg.png"}
                    alt="Background"
                    fill
                    className="absolute inset-0 -z-10 object-cover"
                    data-aos="zoom-in"
                    data-aos-delay="50"
                />

                <div
                    className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div
                        className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold backdrop-blur"
                        data-aos="zoom-in"
                        data-aos-delay="150"
                    >
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>{h("badge")}</span>
                    </div>

                    <h2
                        className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {h("titleLine1")}
                        <br />
                        {h("titleLine2")}
                    </h2>

                    <p
                        className="mx-auto mt-3 max-w-3xl text-sm sm:text-base text-white/90"
                        data-aos="fade-up"
                        data-aos-delay="240"
                    >
                        {h("subtitle")}
                    </p>

                    <div
                        className="mt-7 flex flex-wrap items-center justify-center gap-3"
                        data-aos="fade-up"
                        data-aos-delay="280"
                    >
                        <Link href="/contact">
                            <Button
                                size={"lg"}
                                className="rounded-lg md:w-auto w-full bg-white px-5 py-6 text-[#FF7A00] hover:bg-orange-50"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                {h("primaryButton")} <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>

                        <Link href="/contact">
                            <Button
                                size={"lg"}
                                variant="outline"
                                className="rounded-lg md:w-auto w-full py-6 bg-transparent hover:bg-white border-white text-white hover:text-[#FF7A00]"
                                data-aos="zoom-in"
                                data-aos-delay="330"
                            >
                                {h("secondaryButton")}
                            </Button>
                        </Link>
                    </div>

                    <p
                        className="mt-5 text-xs text-white/80"
                        data-aos="fade-up"
                        data-aos-delay="360"
                    >
                        {h("note")}
                    </p>
                </div>
            </section>




        </Wrapper>
    )
}
