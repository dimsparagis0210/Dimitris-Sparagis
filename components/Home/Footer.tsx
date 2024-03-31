import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {useRef} from "react";

export const Footer = () => {
    const footerRef = useRef(null);
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
        <footer className={`absolute bottom-0 w-full flex 3xs:text-[15px] sm:text-lg 3xl:text-3xl`} ref={footerRef}>
            <main className={`flex items-center gap-2`}>
                <section className={`flex flex-col relative bottom-10 items-center gap-5 2xl:gap-7`}>
                    <p className={`textColorPrimary rotate-[-90deg]`} ref={scrollTextRef}>Scroll</p>
                    <div className={`overflow-y-hidden`}>
                        <div className={`bg-white h-[60px] w-[3px] 2xl:h-[100px]`} ref={scrollLineRef}/>
                    </div>
                </section>
                <button className={`bg-white absolute right-10 bottom-20 text-2xl font-bold px-8 py-8 rounded-full`}>
                    CV
                </button>
            </main>
            <section className={`absolute bottom-5 right-2 textColorPrimary`}>
                <p>Based in Athens, Greece</p>
            </section>
        </footer>

    );
}