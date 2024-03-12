'use client';

import {motion, useAnimation} from "framer-motion";
import React, {useEffect} from "react";

export const MainContentSectionSecondary = (props: {side:string, mainContent:string}) => {
    const border: string = 'border-[4px] border-[solid] border-[white]';
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
                <div className={`flex flex-[1.5] justify-end mr-[200px] text-2xl`}>
                    <p className={`${textColor}`}>
                        {props.mainContent}
                    </p>
                </div>
            </section>
        </motion.div>
    );
}