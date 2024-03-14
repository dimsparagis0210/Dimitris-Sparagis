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

export default function AboutPage() {
    const [navClicked, setNavClicked] = useState(true);
    const navItemStyle = `textColorPrimary w-[100%] h-[100%] bg-white rounded-full`;

    return (
        <div className={`${myFont.className}`}>
            <Cursor/>
            <div className={`min-h-screen flex flex-col`}>
                <header className={`flex items-center justify-between border`}>
                    <div className={`flex flex-col items-center border`}>
                        <ArrowUpward
                            fontSize="medium"
                            className="icon textColorPrimary rounded-[100%] w-[5rem] h-[5rem] [transition:all_0.5s]
                                    hover:bg-white hover:text-black hover:[cursor:none]"
                        />
                        <p className={`textColorPrimary`}>
                            Go up
                        </p>
                    </div>
                    <div className={`flex flex-col gap-2 w-[40px] h-[30px]`}>
                        <div className={navItemStyle}/>
                        <div className={navItemStyle}/>
                        <div className={navItemStyle}/>
                    </div>
                </header>
                <main className={`flex`}>
                    <div className={`flex flex-col`}>
                        <section className={`flex border w-[100%]`}>
                            <p className={`textColorPrimary text-7xl p-8`}>
                                I'm Dimitris, a passionate 20-year-old software engineer and designer hailing
                                from the beautiful landscapes of Greece.
                            </p>
                        </section>
                        <section className={`flex justify-center border px-[100px] pt-[100px]`}>
                            <div className={`flex flex-row items-center justify-center gap-[100px] px-5 border`}>
                                <Image
                                    src="/logos_react.png"
                                    width={100}
                                    height={100}
                                    alt="React Logo"
                                />
                                <Image
                                    src="/devicon_tailwindcss.png"
                                    width={100}
                                    height={100}
                                    alt="Tailwind Logo"
                                />
                                <Image
                                    src="/logos_nextjs.png"
                                    width={100}
                                    height={`50`}
                                    alt="Next.js Logo"
                                />
                                <Image
                                    src="/devicon-plain_java-wordmark.png"
                                    width={100}
                                    height={`50`}
                                    alt="Java Logo"
                                />
                            </div>
                        </section>
                        <section className={`flex p-[100px] border`}></section>
                    </div>
                    <Scrollbar />
                </main>
                <footer className={`flex p-[50px] border`}>
                    <p className={`textColorPrimary text-3xl`}>
                        Footer
                    </p>
                </footer>
            </div>
        </div>
    );
}