'use client';

import {motion, useAnimation} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import useMousePosition from "@/hooks/useMousePosition";
import {display} from "@mui/system";

export default function Cursor() {
    const [cursorStyles, setCursorStyles] = useState('relative rounded-full bg-white w-[30px] h-[30px]');
    const {x, y} = useMousePosition();
    const ref = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        controls.start("after");
    }, []);

    return (
        <motion.div
            ref={ref}
            className={cursorStyles}
            variants={{
                start:{top:"100",left:"200",position:"absolute", display:"none"},
                after:{position:"absolute", display:"block"}
            }}
            initial="start"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.25}}
            style={{
                x: `${x}px`,
                y: `${y}px`,
                transition: "all 0.15s"

            }}
        />
    );
}