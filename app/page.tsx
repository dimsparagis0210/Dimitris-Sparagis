'use client';

import {Scroll} from '@/components/Layout/Scroll';
import './globals.css';
import {Circle} from "@/components/Layout/Circle";
import {ArrowUpward} from "@mui/icons-material";
import {useTextHoverAnimation} from "@/hooks/useTextHoverAnimation";

export default function MyApp() {
    const { ref1, ref2, buttonRef } = useTextHoverAnimation();

    return (
        <div className={`bg-myWhite min-h-screen flex flex-col gap-[10rem]`}>
            <header className={`flex`}>
                <div className={`aspect-square w-[100px] absolute`}>
                    <img src="/blackLogo.png" alt=""/>
                </div>
                <ul className={`bg-black text-myWhite flex items-center mx-auto
                                px-10 py-5 gap-5 rounded-xl my-1`
                }>
                    <li className={``}>
                        <a href="">Home</a>
                    </li>
                    <li className={``}>
                        <a href="#">About</a>
                    </li>
                    <li className={``}>
                        <a href="#">Education</a>
                    </li>
                    <li className={``}>
                        <a href="#">Services</a>
                    </li>
                    <li className={`bg-myWhite rounded-lg text-black p-3`}>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </header>
            <main className={`flex font-bold justify-center`}>
                <section className={`flex flex-col text-center z-[2] py-[8rem] text-9xl`}>
                    <p>DIMITRIS</p>
                    <p>SPARAGIS</p>
                </section>
                <div className={`absolute z-[1]`}>
                    <Circle/>
                </div>
            </main>
            <section className={`flex justify-center items-center gap-2 text-xl`}>
                <button className={`rounded-full bg-white aspect-square w-[5rem]
                 flex justify-center items-center`}
                        ref={buttonRef}
                >
                        <div className={`rotate-45 flex overflow-hidden`}>
                            <ArrowUpward
                                fontSize={`large`}
                                ref={ref1}
                            />
                            <ArrowUpward
                                ref={ref2}
                                fontSize={`large`}
                                className={`absolute translate-y-8`}
                            />
                        </div>
                </button>
                <p>Download or view CV</p>
            </section>
            <footer>
                <Scroll/>
                <span className={'absolute bottom-2 right-5'}>
                    <p>Based in Athens, Greece</p>
                </span>
            </footer>
        </div>
    );
}

