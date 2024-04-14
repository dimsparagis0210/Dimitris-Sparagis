import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {useRef} from "react";
import { Scroll } from "../Layout/Scroll";

export const Footer = () => {
    const footerRef = useRef(null);

    return (
        <footer className={`absolute bottom-0 w-full flex 3xs:text-[15px] sm:text-lg 3xl:text-3xl`}
                ref={footerRef}
        >
            <main className={`flex items-center gap-2`}>
                <button className={`bg-white absolute right-10 bottom-20 text-2xl font-bold px-8 py-8 rounded-full`}>
                    CV
                </button>
            </main>
            <Scroll/>
            <section className={`absolute bottom-5 right-2 textColorPrimary`}>
                <p>Based in Athens, Greece</p>
            </section>

        </footer>

    );
}