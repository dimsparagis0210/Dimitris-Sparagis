import {motion} from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Footer = () => {

    const nextPageHandler = () => {
        window.scrollTo({top: window.innerHeight, behavior: "smooth"});
    }
    return (
        <footer className={`p-3 flex text-[whitesmoke] border w-full`}>
            <motion.button
                animate={{scale: [1, 1.3, 1]}}
                transition={{repeat: Infinity, duration: 1}}
                onClick={nextPageHandler}
            >
                <ArrowDownwardIcon
                    fontSize="large"
                    className="icon rounded-[100%] w-[80px] h-[80px] [transition:all_0.5s]
                                    hover:bg-white hover:text-black hover:[cursor:none]"
                />
            </motion.button>
        </footer>
    );
}