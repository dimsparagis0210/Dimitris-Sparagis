'use client';

import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

export const Scroll = () => {
    const scrollTextRef = useRef(null);
    const scrollLineRef = useRef(null);

    //Footer Animation
    useGSAP(() => {
        const timeline = gsap.timeline();
        timeline.fromTo([scrollLineRef.current], {
            opacity: 1,
            y: 0,
        }, {
            opacity: 0,
            y: 200,
            repeat: -1,
            repeatDelay: 1,
            duration: 0.8,
            ease: "power4.inOut",
        },);

        timeline.fromTo([scrollLineRef.current], {
            opacity: 0,
            y: -200,
            duration: 1,
            ease: "power4.inOut",
        }, {
            opacity: 1,
            duration: 0.8,
            y: 0,
            repeat: -1,
            repeatDelay: 1,
            ease: "power4.inOut",
        });
    })
    return (
        <div className={`absolute bottom-0 w-full flex text-lg lg:text-2xl`}>
            <main className={`flex items-center gap-2`}>
                <section className={`flex flex-col relative bottom-10 items-center gap-5 2xl:gap-7`}>
                    <p className={`text-black rotate-[-90deg]`}>Scroll</p>
                    <div className={`overflow-y-hidden`}>
                        <div className={`bg-black h-[80px] lg:h-[100px] w-[3px]`} ref={scrollLineRef}/>
                    </div>
                </section>
            </main>
        </div>
    );
}