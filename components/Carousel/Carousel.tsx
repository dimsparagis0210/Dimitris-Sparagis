import './Carousel.css';
import {Plaster} from "next/font/google";
import {motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap} from "framer-motion";
import {useRef} from "react";
import gsap from "gsap";

const plaster = Plaster({
    subsets: ["latin"],
    weight: '400',
    style: "normal",
    display: "swap",
    fallback: ["sans-serif"],
});

const text = [
    {
        title: "Software Engineer",
    },
    {
        title:"•"
    },
    {
        title: "Designer",
    },
    {
        title:"•"
    },
    {
        title: "Student",
    },
    {
        title:"•"
    },
    {
        title: "Software Engineer",
    },
    {
        title:"•"
    },
    {
        title: "Designer",
    },
    {
        title:"•"
    },
    {
        title: "Student",
    },
    {
        title:"•"
    },
]

export const Carousel = () => {
    const baseX = useMotionValue(0);
    const {scrollY} = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });
    const x = useTransform(baseX, (v) => `${wrap(0, -150, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * 5 * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }
        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });
    const textRef = useRef(null);
    return (
        <div className={`overflow-hidden font ${plaster.className} 
                        mx-[1rem] mt-[3rem] mb-[8rem] border-y border-y-black py-[2rem]
                        sm:text-3xl sm:mx-[2rem] sm:py-[3rem]
                        md:mt-[0rem]
                        lg:text-5xl lg:mx-[5rem] lg:py-[4rem] lg:mt-[3rem]
                        xl:text-7xl xl:mx-[8rem] xl:py-[5rem]
                        `}
        >
            <motion.div
                style={{x}}
                className={`flex gap-5 whitespace-nowrap`}
                ref={textRef}
            >
                {text.map((t, i) => (
                    <motion.h1
                                onMouseEnter={() => {
                                    gsap.to(textRef.current, {
                                        scale:1.1,
                                        duration: 0.5,
                                        color: "#F2F2F2",
                                        webkitTextStrokeWidth: "2px",
                                        webkitTextStrokeColor: "black",
                                    })
                                }}
                                onMouseLeave={() => {
                                    gsap.to(textRef.current, {
                                        scale:1,
                                        duration: 0.5,
                                        color: "black",
                                        webkitTextStrokeWidth: "0px",
                                        webkitTextStrokeColor: "black",
                                    })
                                }}
                    >
                        {t.title}
                    </motion.h1>
                ))}
            </motion.div>
        </div>
    )
}

