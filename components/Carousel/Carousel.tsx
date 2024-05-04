import './Carousel.css';
import {Plaster} from "next/font/google";
import {motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap} from "framer-motion";
import {useRef} from "react";

const plaster = Plaster({
    subsets: ["latin"],
    weight: '400',
    style: "normal",
    display: "swap",
    fallback: ["sans-serif"],
});

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
    return (
        <div className={`overflow-hidden font ${plaster.className} mx-[8rem] mt-[3rem] mb-[8rem] border-y border-y-black py-[5rem]`}>
            <motion.div
                style={{x}}
                className={`flex gap-5 text-7xl whitespace-nowrap`}
            >
                <h1>Software Engineer</h1>
                <h1>•</h1>
                <h1>Designer</h1>
                <h1>•</h1>
                <h1>Student</h1>
                <h1>•</h1>
                <h1>Software Engineer</h1>
                <h1>•</h1>
                <h1>Designer</h1>
                <h1>•</h1>
                <h1>Student</h1>
                <h1>•</h1>
                <h1>Software Engineer</h1>
                <h1>•</h1>
                <h1>Designer</h1>
                <h1>•</h1>
                <h1>Student</h1>
                <h1>•</h1>
                <h1>Software Engineer</h1>
                <h1>•</h1>
                <h1>Designer</h1>
                <h1>•</h1>
                <h1>Student</h1>
                <h1>•</h1>
                <h1>Software Engineer</h1>
                <h1>•</h1>
                <h1>Designer</h1>
                <h1>•</h1>
                <h1>Student</h1>
            </motion.div>
        </div>
    )
}

