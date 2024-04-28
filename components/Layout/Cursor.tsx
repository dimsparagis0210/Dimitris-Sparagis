import gsap from "gsap";
import AnimatedCursor from "react-animated-cursor";
import {useRef} from "react";
import { motion } from "framer-motion";

export const Cursor = () => {

    const cursorRef = useRef(null);

    return (
        <motion.div
            className={`z-30 bg-my`}
            ref={cursorRef}
        >
            <AnimatedCursor
                color={'0,0,0'}
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={1.7}
                outerAlpha={0}
                outerStyle={{
                    mixBlendMode: 'exclusion'
                }}
            />
        </motion.div>
    )
}