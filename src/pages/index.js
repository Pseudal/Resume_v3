'use client';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Aos from "aos";
import "aos/dist/aos.css";
import SmallView from "./components/Home_Mobile/_SmallView";
import DesktopView from "./components/home/_DesktopView";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [isDesktop, setDesktop] = useState(false);
    const [isTablet, setTablet] = useState(false);
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        // Initialize the states based on the window size
        const updateMedia = () => {
            setDesktop(window.innerWidth > 1650 );
            setTablet(window.innerWidth > 1024 && window.innerWidth < 1650);
            setMobile(window.innerWidth > 0 && window.innerWidth < 1024);
        };

        // Update the states when the window size changes
        window.addEventListener("resize", updateMedia);

        // Call updateMedia once on component mount to initialize the states
        updateMedia();

        // Remove the event listener on component unmount
        return () => window.removeEventListener("resize", updateMedia);
    }, []);

    return (
        <>
            {isMobile && <SmallView />}
            {isTablet && <SmallView />}
            {isDesktop && <DesktopView />}
        </>
    );
}
