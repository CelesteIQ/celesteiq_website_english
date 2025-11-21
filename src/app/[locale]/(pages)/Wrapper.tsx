"use client"
import Footer from '@/components/Footer';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ChatWidget from '@/components/ChatWidget';
import BackToTopButton from '@/components/BackToTopButton';

interface Props {
    children: React.ReactNode;
}

export default function Wrapper(props: Props) {

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease-out",
            once: true, // animate only once
        });
    }, []);

    return (
        <div>
            {props.children}
            <Footer />
            <ChatWidget />
            <BackToTopButton />
        </div>
    )
}
