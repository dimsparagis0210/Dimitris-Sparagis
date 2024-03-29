'use client';
import {Home} from "@/components/Home/Home";
import localFont from "next/font/local";
import About from "@/components/About/About";
import { Skills } from "@/components/Skills/Skills";
import {ReactLenis, useLenis} from "@studio-freight/react-lenis";
const myFont = localFont({
    src: './fonts/CabinetGrotesk-Regular.woff2',
});

export default function MyApp() {
    const lenis = useLenis(({scroll}) => {
        //code
    })
    return (
        <ReactLenis root>
            <div className={`${myFont.className}`}>
                <Home />
                <About />
                <Skills />
            </div>
        </ReactLenis>
    )
}

