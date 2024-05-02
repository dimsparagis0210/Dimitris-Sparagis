import Magnetic from "@/components/Layout/Magnetic";
import {gsap} from "gsap";
import {NavListElement} from "@/components/Home/NavListElement";
import {Circle} from "@/components/Layout/Circle";
import {ArrowUpward} from "@mui/icons-material";
import {Scroll} from "@/components/Layout/Scroll";
import {useArrowHoverAnimation} from "@/hooks/useArrowHoverAnimation";
import {useContactTextHoverAnimation} from "@/hooks/useContactTextHoverAnimation";
import {useRef} from "react";
import HoverAudio from "../Audio/HoverAudio";
import {AnimatePresence, motion, MotionValue, useScroll, useSpring} from "framer-motion";

export const Home = (props:{scrollY:MotionValue<number>}) => {
    const {
        ref1,
        ref2,
        buttonRef
    } = useArrowHoverAnimation();

    const {
        contactRef1,
        contactRef2,
        contactButtonRef
    } = useContactTextHoverAnimation();

    const navRef = useRef(null);
    const surNameRef = useRef(null);
    const nameRef = useRef(null);

    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress);

    const cvHandler = async () => {
        const timeline = gsap.timeline();
        timeline.to(ref1.current, {rotate: 45, duration: 0.5, ease: 'power4.inOut'});
        timeline.to(ref2.current, {rotate: 45, duration: 0.5, ease: 'power4.inOut'}, '<');
        timeline.to(ref1.current, {rotate: 0, duration: 0.5, ease: 'power4.inOut'}, '>');
        timeline.to(ref2.current, {rotate: 0, duration: 0.5, ease: 'power4.inOut'}, '<');
        timeline.to(ref2.current, {rotate: 45, x: 100, y:-100, duration: 0.5, ease: 'power4.inOut'}, '<');

        if (await timeline) {
            window.open('/resume.pdf', '_blank');
        }
        timeline.to(ref2.current, {rotate:0 ,x: 0, y:-32, duration: 0.5, ease: 'power4.inOut'}, '<');
        timeline.to(ref1.current, {rotate:0, x: 0, y:0, duration: 0.5, ease: 'power4.inOut'}, '<');
    }

    return (
        <div
            className={`pageContainer relative bg-myWhite min-h-screen flex flex-col gap-[10rem] scroll-mt-10`}
            id={'home'}
        >
            <header className={`flex 3xs:justify-between`}>
                <Magnetic>
                    <div className={`aspect-square w-[7rem] absolute`}>
                        <img src="/blackLogo.png" alt=""/>
                    </div>
                </Magnetic>
                <ul className={`hidden sm:visible bg-black text-myWhite sm:flex items-center mx-auto
                                px-[10%] py-5 gap-5 rounded-xl my-1 shadow-lg`
                }
                    ref={navRef}
                    onMouseEnter={() => {
                        gsap.to(navRef.current, {
                            scale: 1.1,
                            duration: 0.5,
                            ease: 'power4.inOut',
                            paddingLeft: '5%',
                            paddingRight: '5%',
                        })
                    }}
                    onMouseLeave={() => {
                        gsap.to(navRef.current, {
                            scale: 1,
                            duration: 0.5,
                            ease: 'power4.inOut',
                            paddingLeft: '10%',
                            paddingRight: '10%',
                        })
                    }}
                >
                    <NavListElement content={'About'}/>
                    <NavListElement content={'Education'}/>
                    <NavListElement content={'Services'}/>
                    <li className={`bg-myWhite rounded-full text-black p-3`} ref={contactButtonRef}>
                        <button className={`flex rotate-0 overflow-hidden border-white`}>
                            <HoverAudio>
                                <p
                                    ref={contactRef1}
                                >
                                    Contact
                                </p>
                            </HoverAudio>

                            <p
                                ref={contactRef2}
                                className={`absolute translate-x-[-4rem]`}
                            >
                                Contact
                            </p>
                        </button>
                    </li>
                </ul>
            </header>
            <main className={`flex font-bold justify-center`}>
                <section
                    className={`flex flex-col h-fit text-center z-[2] py-[8rem] text-4xl 3xs:text-5xl xs:text-7xl md:text-9xl hover:cursor-default`}
                    onMouseEnter={() => {
                        gsap.to(nameRef.current, {scale: 1.1, duration: 0.5, ease: 'power4.inOut'})
                    }
                    }
                    onMouseLeave={() => {
                        gsap.to(nameRef.current, {scale: 1, duration: 0.5, ease: 'power4.inOut'})
                    }}
                    ref={nameRef}
                >
                    <p>DIMITRIS</p>
                    <p>SPARAGIS</p>
                    <motion.div
                        className={`bg-black h-1 rounded-[10px]`}
                        style={{scaleX}}
                    />
                </section>
                <div className={`absolute z-[1]`}>
                    <Circle/>
                </div>
            </main>
            <section className={`flex justify-center items-center gap-2 text-xl`}>
                <AnimatePresence mode={'wait'}>

                    <button className={`rounded-full bg-white aspect-square w-[5rem] h-[5rem]
                 flex justify-center items-center`}
                       ref={buttonRef}
                       onMouseEnter={() => {
                           gsap.to(buttonRef.current, {
                               backgroundColor: 'black',
                               color: 'white',
                               border: 'solid #D9D9D9 2px',
                               duration: 0.5,
                               ease: 'sine.inOut'
                           })
                       }}
                       onMouseLeave={() => {
                           gsap.to(buttonRef.current, {
                               backgroundColor: 'white',
                               color: 'black',
                               border: 'none',
                               duration: 0.5,
                               ease: 'power4.inOut'
                           })
                       }}
                       onClick={cvHandler}
                    >
                        <div className={`rotate-45 flex overflow-hidden relative`}>
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
                </AnimatePresence>
                <p className={`md:text-2xl`}>Download or view CV</p>
            </section>
            <footer className={`absolute bottom-2`}>
                <Scroll/>
            </footer>
        </div>
    );
}