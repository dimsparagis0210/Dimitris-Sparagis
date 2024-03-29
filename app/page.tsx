'use client';

import {Home} from "@/components/Home/Home";
import localFont from "next/font/local";
import About from "@/components/About/About";
import { Skills } from "@/components/Skills/Skills";
const myFont = localFont({
    src: './fonts/CabinetGrotesk-Regular.woff2',
});

export default function MyApp() {

    return (
        <div className={`${myFont.className}`}>
            <Home />
            <About />
            <Skills />
        </div>
    )
}

