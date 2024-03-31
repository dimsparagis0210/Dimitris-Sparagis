'use client';

import {Circle} from "@/components/Layout/Circle";
import { Shadow } from "../Layout/Shadow";
import {useGSAP} from "@gsap/react";
import {main} from "@popperjs/core";
import {gsap} from "gsap";
import {useRef} from "react";
import SplitType from "split-type";
export const MainContentSectionPrimary = () => {
    const headerRef = useRef(null);
    const contentRef = useRef(null);
    const circleRef = useRef(null);

    // @ts-ignore
    const text = new SplitType('#myHeader', { types: "words,chars" })

// Animate characters into view with a stagger effect
    useGSAP(() => {
        gsap.fromTo(text.chars, {
            opacity: 0,
            y: 120,
            duration: 0.5,
            delay:2.5,
            stagger: { amount: 0.1 },
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay:2.5,
            stagger: { amount: 0.1 },

        });
    }, []);

    // Main Content Section Primary Animation
    useGSAP(() => {
        const timeline = gsap.timeline();
        timeline.fromTo([headerRef.current, contentRef.current], {
            opacity: 0,
            y: 100,
            duration:1,
            ease: "power4.inOut",
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.inOut",
            stagger:0.1,
        });
    }, []);

    //Circle Animation
    useGSAP(() => {
        gsap.fromTo(circleRef.current, {
            opacity: 0,
            y:100,
            duration: 1,
            scale:0.1,
            ease: "power2.inOut",
        }, {
            opacity: 1,
            y:0,
            duration: 1,
            scale:1,
            ease: "power2.inOut",
        });
    });

    return (
        <main>
            <div>
                <div className={`flex flex-col ml-5 relative 
                                sm:ml-12 sm:mt-[20px] 
                                md:text-2xl
                                lg:text-3xl lg:ml-[6rem]
                                3xl:text-6xl 2xl:ml-[8rem]
                                `}
                >
                    <Shadow/>
                    <div>
                        <h1 className={`textColorPrimary text-8xl 
                                        3xs:text-7xl
                                        md:text-9xl
                                        lg:text-[150px]
                                        2xl:text-[300px]
                                        `}
                            ref={headerRef}
                            id="myHeader"
                        >
                            Dimitris
                        </h1>
                    </div>
                    <div className={`flex w-[40%] 
                                    3xs:w-[50%]
                                    sm:w-[30%]
                                    xl:w-[30%] xl:text-4xl
                                    2xl:w-[30%] 2xl:text-6xl
                                    `}
                         ref={contentRef}
                    >
                        <p className={`textColorPrimary`}>It's all about creating exceptional digital experiences</p>
                    </div>
                </div>
                <div className={`relative left-[150px] 
                                3xs:left-[100px] 3xs:top-[100px]
                                xs:left-[150px] bottom-[200px]
                                sm:left-[280px] sm:bottom-[180px]
                                md:left-[300px] md:bottom-[100px]
                                lg:left-[450px] lg:bottom-[20px]
                                xl:left-[750px] xl:bottom-[20px]
                                2xl:left-[1200px] 2xl:bottom-[120px]
                                `}
                     ref={circleRef}
                >
                    <Circle/>
                </div>
            </div>

        </main>
    );
}