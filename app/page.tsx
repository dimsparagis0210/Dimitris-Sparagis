'use client';
import {Home} from "@/components/Home/Home";
import localFont from "next/font/local";
import About from "@/components/About/About";
import {Skills} from "@/components/Skills/Skills";
import {ReactLenis} from "@studio-freight/react-lenis";
import {Education} from "@/components/Education/Education";
import {useRef, useState} from "react";
import {gsap} from "gsap";
import { Inter } from 'next/font/google';
import {useGSAP} from "@gsap/react";
import {useTextAnimation} from "@/hooks/animations/useTextAnimation";
import SplitType from "split-type";

const myFont = localFont({
    src: './fonts/CabinetGrotesk-Regular.woff2',
});

const inter = Inter({
    subsets: ['latin'],
});

export default function MyApp() {
    // const nameRef = useRef(null);
    // const yearRef = useRef(null);
    // const containerRef = useRef(null);
    // const [isRendered, setIsRendered] = useState(false);
    //
    //
    // useGSAP(() => {
    //     const timeline = gsap.timeline({onComplete: () => setIsRendered(true)});
    //     timeline.to([nameRef.current, yearRef.current], {
    //         opacity: 1,
    //         y: 0,
    //         duration: 1,
    //         ease: "power4.inOut",
    //         stagger:0.1,
    //     });
    //     timeline.to([nameRef.current, yearRef.current, containerRef.current], {
    //         translateY: '-100%',
    //         duration: 1,
    //         borderRadius:'100px',
    //         ease: "power2.inOut",
    //         stagger:0.1,
    //     });
    //
    // }, []);

    return (
        <ReactLenis root>
            {/*{!isRendered ?*/}
            {/*    <div className={`${myFont.className} min-h-screen w-[100%] relative z-[1]`}>*/}
            {/*        <div className={`bg-white flex items-center justify-center min-h-screen `} ref={containerRef}>*/}
            {/*            <div className={`flex flex-col`}>*/}
            {/*                <h1*/}
            {/*                    ref={nameRef}*/}
            {/*                    className={`text-center opacity-0 translate-y-10 text-beige*/}
            {/*                                3xs:text-4xl name*/}
            {/*                    `}*/}
            {/*                >*/}
            {/*                    Dimitris Sparagis*/}
            {/*                </h1>*/}
            {/*                <h1*/}
            {/*                    ref={yearRef}*/}
            {/*                    className={`text-center opacity-0 translate-y-10 text-black*/}
            {/*                                3xs:text-4xl*/}
            {/*                    `}*/}
            {/*                >*/}
            {/*                    ©️2024*/}
            {/*                </h1>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    :*/}
                <div className={`${myFont.className} overflow-x-hidden overflow-y-hidden`}>
                    <Home/>
                    <About/>
                    <Skills/>
                    <Education/>
                </div>
            {/*}*/}
        </ReactLenis>
    )
}

