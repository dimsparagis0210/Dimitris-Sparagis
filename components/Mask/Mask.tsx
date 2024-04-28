import {HomeMask} from "@/components/Home/HomeMask";
import {AboutMask} from "../About/AboutMask";
import styles from '../../app/page.module.scss';
import {motion} from "framer-motion";

export const Mask = (props: { xPos: number, yPos: number }) => {
    let size= 40;
    const handleSize = (receivedSize:number) => {
        size = receivedSize;
    }
    return (
        <motion.div className={styles.mask}
            animate={{
                WebkitMaskPosition: `${props.xPos - (size / 2)}px ${props.yPos - (size / 2)}px`,
                WebkitMaskSize: `${size}px`,
            }}
            transition={{type: "tween", ease: "backOut", duration: 0.5}}
        >
            <HomeMask/>
            <AboutMask handleSize={handleSize}/>
        </motion.div>
    );
}