'use client';

import { Roboto } from 'next/font/google'
import { MainContentSection } from "@/components/Layout/MainContentSection";
import { useState } from "react";

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export default function MyApp() {
    // States
    const [isClicked, setIsClicked] = useState(false);

    // Styles
    const border: string = 'border-[4px] border-[solid] border-[white]';
    const textColor: string = 'text-[whitesmoke]';
    const activeBorder = isClicked ? `${border} border-[4px] border-[solid] border-[white]` : ' ';

    //Reducers
    const handleIsClicked = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className={`${roboto.className} flex flex-col min-h-screen`}>
            <header
                className={`${activeBorder} flex items-center  flex-row-reverse`}>
                <h1 className={`${textColor} text-[14em] lg:text-[14em] md:text-[12em] sm:text-[5em]`}>Dimitris</h1>
                <button
                    className= {`
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
                <div className={`${activeBorder} flex flex-[1]`}>
                    <section className={`${textColor}`}>
                        Logo
                    </section>
                </div>
                <div className={`${activeBorder} flex flex-[2] flex-col`}>
                    <MainContentSection
                        isBorder={isClicked}
                        side="Hi there"
                        mainContent="It's all about creating exceptional digital experiences"
                    />
                    <MainContentSection
                        isBorder={isClicked}
                        side="Based in Athens, Greece"
                        mainContent="©️2024"
                    />
                </div>
            </main>
            <footer className={`${activeBorder} flex text-[whitesmoke] w-full p-2`}>
                Icon
            </footer>
        </div>
    )
}

