'use client';

import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";

export const MainContentSectionPrimary = (props: {side:string, mainContent:string}) => {
    const textColor: string = 'text-[whitesmoke]';
    const controls = useAnimation();

    useEffect(() => {
        controls.start("visible");
    }, []);

    return (
        <motion.div
            variants={{
                hidden: {opacity: 0, x: 100},
                visible: {opacity:1, x :0}
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.5}}
        >
            <hr className={`mr-1 bg-blue-950`}/>
            <section className={`flex flex-row flex-1 p-[20px]`}>
                <div className={`flex flex-1`}>
                    <p className={`${textColor}`}>
                        {props.side}
                    </p>
                </div>
                <div className={`flex flex-[1.5]`}>
                    <p className={`${textColor} text-6xl `}>
                        {props.mainContent}
                    </p>
                </div>
            </section>
        </motion.div>
    );
}