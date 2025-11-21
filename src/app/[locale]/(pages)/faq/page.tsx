import Navbar from '@/components/Navbar'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Wrapper from '../Wrapper';
import { Sparkles, ArrowRight } from "lucide-react";
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from 'next-intl';

type QA = {
    id: string;
    q: string;
    a: React.ReactNode;
};

const faqIds = ["item-1", "item-2", "item-3", "item-4", "item-5"];


export default function Faq() {
    const t = useTranslations("faq");
    const h = useTranslations("ctaHero");

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
                            {t("title")}
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
                    data-aos-delay="80"
                >
                    <div
                        className="text-center"
                        data-aos="fade-up"
                        data-aos-delay="120"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ea580c]">
                            {t("title")}
                        </h2>
                        <p className="mx-auto mt-2 md:mt-3 md:text-xl font-medium max-w-2xl text-[#374151]">
                            {t("subtitle")}
                        </p>
                    </div>

                    <section
                        className="bg-white py-10 sm:py-14"
                        data-aos="fade-up"
                        data-aos-delay="160"
                    >
                        <div className="mx-auto max-w-6xl sm:px-4 md:px-6 lg:px-8">
                            <Accordion
                                type="single"
                                collapsible
                                defaultValue="item-1"
                                className="grid gap-4 md:gap-6 md:grid-cols-2"
                            >
                                {faqIds.map((id, idx) => (
                                    <AccordionItem
                                        key={id}
                                        value={id}
                                        className="group relative rounded-2xl bg-white shadow-[0_18px_40px_rgba(2,6,23,0.06)] ring-1 ring-black/5"
                                        data-aos="fade-up"
                                        data-aos-delay={200 + idx * 40}
                                    >
                                        <AccordionTrigger
                                            className="flex w-full md:items-center items-start justify-start gap-4 p-6 text-left hover:no-underline [&>svg]:hidden"
                                        >
                                            <span className="grid shrink-0 h-9 w-9 place-items-center rounded-md border border-slate-200 text-slate-700 shadow-sm group">
                                                <Plus className="h-5 w-5 group-data-[state=open]:hidden" />
                                                <Minus className="hidden h-5 w-5 group-data-[state=open]:block" />
                                            </span>

                                            <span className="text-[17px] font-semibold leading-6 text-slate-900">
                                                {t(`items.${id}.question`)}
                                            </span>
                                        </AccordionTrigger>

                                        <AccordionContent className="px-6 pb-6 pt-0 text-slate-600">
                                            <div className="flex flex-col gap-3 text-balance">
                                                <p>{t(`items.${id}.answer`)}</p>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </section>
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
