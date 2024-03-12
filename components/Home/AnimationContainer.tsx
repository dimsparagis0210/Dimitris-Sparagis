import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";

export const AnimationContainer = (props:{delay:number}) => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start("visible");
    }, []);
    return (
        <motion.div
            variants={{
                hidden:{left:0},
                visible:{left:"100%"},
            }}
            initial="hidden"
            animate={controls}
            transition={{duration: 0.5, ease:"easeIn", delay:props.delay}}
            style={{
                width:"100%",
                height:"100%",
                borderTopLeftRadius:"50px",
                borderBottomLeftRadius:"50px",
                background:"whitesmoke",
                position:"absolute",
                zIndex:20,
            }}
        />
    );
}