'use client';

import Cursor from "@/components/Layout/Cursor";
import {Home} from "@/components/Home/Home";
import localFont from "next/font/local";
const myFont = localFont({
    src: './fonts/CabinetGrotesk-Regular.woff2',
});

export default function MyApp() {

    return (
        <div className={`${myFont.className}`}>
            <Cursor />
            <Home />
        </div>
    )
}

