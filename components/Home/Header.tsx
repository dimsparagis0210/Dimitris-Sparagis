import {motion, useAnimation, useInView} from "framer-motion";
import {useEffect, useRef} from "react";
import {AnimationContainer} from "@/components/Home/AnimationContainer";

export default function Header() {
    const ref = useRef(null);

    const isInView = useInView(ref);
    const controls = useAnimation();


    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView]);

    return (
        <header ref={ref} className={`flex items-center relative flex-row-reverse`}>
            <motion.h1
                variants={{
                    hidden: {opacity: 0, x: 100},
                    visible: {opacity:1, x :0}
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: 0.25}}
                className={`textColorPrimary text-[14em] lg:text-[14em] md:text-[12em] sm:text-[5em]`}
            >
                Dimitris
            </motion.h1>
            <AnimationContainer delay={0}/>
        </header>
    );
}