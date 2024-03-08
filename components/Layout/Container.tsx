import styles from '../../app/page.module.css';
import { motion } from "framer-motion";
import useMousePosition from "../../hooks/useMousePosition";
export default function Container() {
    const {x,y} = useMousePosition();
    return(
        <motion.div
            className={styles.cursor}
            animate={{
                WebkitMaskPosition:`${x}px ${y}px`
            }}
        >

        </motion.div>
    );
}
