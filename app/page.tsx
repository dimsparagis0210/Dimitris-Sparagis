'use client';

import {Roboto} from 'next/font/google'
import {MainContentSection} from "@/components/Layout/MainContentSection";
import {MainContentSectionSecondary} from "@/components/Layout/MainContentSectionSecondary";
import {useState, useEffect} from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {motion} from 'framer-motion';
import useMousePosition from "@/hooks/useMousePosition";
// @ts-ignore
import useMouseLeave from "@/hooks/useMouseLeave";

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export default function MyApp() {
    // States
    const [isClicked, setIsClicked] = useState(false);
    const [pageRender, setPageRender] = useState(false);

    // Cursor
    const {x, y} = useMousePosition();
    // @ts-ignore
    const {mouseOnScreen} = useMouseLeave();
    // Styles
    const border: string = 'border-[4px] border-[solid] border-[white]';
    const textColor: string = 'text-[whitesmoke]';
    const activeBorder = isClicked ? `${border} border-[4px] border-[solid] border-[white]` : ' ';
    const [cursorStyles, setCursorStyles] = useState('fixed rounded-full bg-white w-[30px] h-[30px] block');

    //Reducers
    const handleIsClicked = () => {
        setIsClicked(!isClicked);
    };

    //OnPageRender
    useEffect(() => {
        setPageRender(true);
    }, []);

    return (
        <>
            <motion.div
                className={cursorStyles}
                style={{
                    x: `${x}px`,
                    y: `${y}px`,
                    transition: "all 0.15s"
                }}
            >

            </motion.div>
            <div className={`${roboto.className} flex flex-col min-h-screen`}>
                <header
                    className={`${activeBorder} flex items-center  flex-row-reverse`}>
                    <h1 className={`${textColor} text-[14em] lg:text-[14em] md:text-[12em] sm:text-[5em]`}>Dimitris</h1>
                    <button
                        className={`
                            ${textColor}
                            rounded-[10px] p-2 hover:bg-white hover:text-black absolute 
                            top-3 left-3 [transition:all_0.6s]
                    `}
                        onClick={handleIsClicked}
                    >
                        Activate Borders
                    </button>
                </header>
                <main className="test">
                    <div className={`${activeBorder} flex flex-[1] items-center justify-center`}>
                        <section className={`${textColor} text-9xl`}>
                            <div
                                className={`rounded-[50%] bg-auto border-[1px] border-[solid] border-amber-50 p-[90px]`}>
                                <p>DS</p>
                            </div>
                        </section>
                    </div>
                    <div className={`${activeBorder} flex flex-[2] flex-col`}>
                        <MainContentSection
                            isBorder={isClicked}
                            side="Hi there"
                            mainContent="It's all about creating exceptional digital experiences"
                        />
                        <MainContentSectionSecondary
                            isBorder={isClicked}
                            side="Based in Athens, Greece"
                            mainContent="©️2024"
                        />
                    </div>
                </main>
                <footer className={`${activeBorder} flex text-[whitesmoke] w-full p-2`}>
                    <motion.button
                        animate={{scale: [1, 1.20, 1]}}
                        transition={{duration: 0.5, repeat: Infinity, repeatType: "loop"}}
                        className={`[cursor:none] hover:[cursor-none]`}
                    >
                        <ArrowDownwardIcon
                            fontSize="large"
                            className="icon rounded-[100%] w-[80px] h-[80px] [transition:all_0.5s]
                                hover:bg-white hover:text-black hover:[cursor:none]"
                        />
                    </motion.button>
                </footer>
            </div>
        </>

    )
}

