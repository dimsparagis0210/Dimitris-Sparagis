import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import Image from "next/image";

export const Logo = () => {
    const controls = useAnimation();
    useEffect(() => {
        controls.start("visible");
    }, []);

    return (
        <>
            <motion.div
                className={`flex flex-[1] items-center justify-center`}
                variants={{
                    hidden: {opacity: 0, y: 100},
                    visible: {opacity:1, y :0}
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: 0.5}}
            >
                <section className={`textColorPrimary text-9xl`}>
                    <div className={`m-0 p-0`}>
                        <Image
                            width="500"
                            height="500"
                            src="/4.png"
                            alt="Logo"
                            className={`p-0 m-0`}
                        />
                    </div>
                </section>
            </motion.div>
            {/*<AnimationContainer2 delay={0.4}/>*/}
        </>
    );
}