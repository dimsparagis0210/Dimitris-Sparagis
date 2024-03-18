'use client';

import {Home} from "@/components/Home/Home";
import localFont from "next/font/local";
const myFont = localFont({
    src: './fonts/CabinetGrotesk-Regular.woff2',
});

export default function MyApp() {

    return (
        <div className={`${myFont.className}`}>
            <Home />
        </div>
    )
}

