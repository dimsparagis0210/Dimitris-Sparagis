'use client';

import {Home} from "@/components/Home/Home";
import ReactLenis from "@studio-freight/react-lenis";
import {About} from "@/components/About/About";
import {Nav} from "@/components/Layout/Nav";
import {useRef, useState} from "react";
import {useScroll} from "framer-motion";
import {Education} from "@/components/Education/Education";
import { Carousel } from "@/components/Carousel/Carousel";

export default function MyApp() {

    const [isNavActive, setIsNavActive] = useState(false);
    const navScrollRef = useRef(null);


    const setIsActive = (isActive: boolean) => {
        setIsNavActive(isActive);
    }

    const {scrollYProgress} = useScroll();
    return (
        <>
            <ReactLenis root>
                <Nav />
                <Home scrollY={scrollYProgress}/>
                <About/>
                <Carousel />
                <Education />
            </ReactLenis>
        </>
    )
}
