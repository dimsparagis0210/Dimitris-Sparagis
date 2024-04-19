'use client';

import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

export const Scroll = () => {
    const scrollTextRef = useRef(null);
    const scrollLineRef = useRef(null);

    //Scroll Animation
    useGSAP(() => {
        gsap.fromTo(scrollTextRef.current, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: "power4.inOut",
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.inOut",
        });

    });

    //Footer Animation
    useGSAP(() => {
        const timeline = gsap.timeline();

        timeline.fromTo([scrollLineRef.current], {
            opacity: 1,
            y: 0,
        }, {
            opacity: 0,
            y: 200,
            repeatDelay:2,
            repeat:-1,
            duration: 1,
            ease: "power4.inOut",
        }, );

        timeline.fromTo([scrollLineRef.current], {
            opacity: 0,
            y: -200,
            delay:1,
            duration: 1,
            ease: "power4.inOut",
        }, {
            opacity: 1,
            y: 0,
            repeatDelay:2,
            repeat:-1,
            ease: "power4.inOut",
        });
    })
    return (
        <div className={`absolute bottom-0 w-full flex 3xs:text-sm sm:text-lg 3xl:text-3xl`}>
            <main className={`flex items-center gap-2`}>
                <section className={`flex flex-col relative bottom-10 items-center gap-5 2xl:gap-7`}>
                    <p className={`text-black rotate-[-90deg]`} ref={scrollTextRef}>Scroll</p>
                    <div className={`overflow-y-hidden`}>
                        <div className={`bg-black h-[60px] w-[3px] 2xl:h-[100px]`} ref={scrollLineRef}/>
                    </div>
                </section>
            </main>
        </div>
    );
}