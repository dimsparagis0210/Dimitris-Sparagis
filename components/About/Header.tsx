import {ArrowUpward, ArrowUpwardRounded} from "@mui/icons-material";
import {motion} from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Header = (props:{size:number}) => {
    const navItemStyle = `textColorPrimary w-[100%] h-[100%] bg-white rounded-full`;

    //Handlers
    const prevPageHandler = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    return (
        <header className={`flex items-center flex-[${props.size}] justify-between border`}>
            <div className={`flex flex-col items-center border`}>
                <motion.button
                    animate={{scale: [1, 1.3, 1]}}
                    transition={{repeat: Infinity, duration: 1}}
                    onClick={prevPageHandler}
                >
                    <ArrowUpwardRounded
                        fontSize="large"
                        className="icon rounded-[100%] w-[5rem] h-[5rem] text-white [transition:all_0.5s]
                                    hover:bg-white hover:text-black hover:[cursor:none]"
                    />
                    <p className={`textColorPrimary`}>
                        Go up
                    </p>
                </motion.button>

            </div>
            <div className={`flex flex-col gap-2 w-[40px] h-[30px]`}>
            <div className={navItemStyle}/>
                <div className={navItemStyle}/>
                <div className={navItemStyle}/>
            </div>
        </header>
    );
}