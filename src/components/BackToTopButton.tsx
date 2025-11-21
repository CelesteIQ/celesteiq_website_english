"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackToTopButton() {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        if (typeof window === "undefined") return;

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-20 md:right-6 right-5 z-40 sm:bottom-20">
            <Button
                type="button"
                onClick={scrollToTop}
                className="
          h-11 w-11 rounded-full bg-[#FF7A00] p-0 text-white shadow-[0_18px_40px_rgba(2,6,23,0.25)]
          hover:bg-[#ea580c] 
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300
        "
                aria-label="Back to top"
            >
                <ArrowUp className="h-5 w-5" />
            </Button>
        </div>
    );
}
