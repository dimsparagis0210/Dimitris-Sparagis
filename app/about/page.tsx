'use client';

import Cursor from "@/components/Layout/Cursor";
import localFont from "next/font/local";
import {useState} from "react";
import {ArrowUpward} from "@mui/icons-material";

const myFont = localFont({
    src: '../fonts/CabinetGrotesk-Regular.woff2',
});
import Image from "next/image";
import { Scrollbar } from "@/components/About/Scrollbar";
import {Header} from "@/components/About/Header";
import {MainContent} from "@/components/About/MainContent";

export default function AboutPage() {
    return (
        <div className={`${myFont.className}`}>
            <Cursor/>
            <div className={`min-h-screen flex flex-col`}>
                <Header />
                <MainContent />
                <footer className={`flex p-[50px] border`}>
                    <p className={`textColorPrimary text-3xl`}>
                        Footer
                    </p>
                </footer>
            </div>
        </div>
    );
}