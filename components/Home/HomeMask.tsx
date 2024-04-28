import Magnetic from "@/components/Layout/Magnetic";
import {gsap} from "gsap";
import {NavListElement} from "@/components/Home/NavListElement";
import {Circle} from "@/components/Layout/Circle";
import {ArrowUpward} from "@mui/icons-material";
import {Scroll} from "@/components/Layout/Scroll";
import {useArrowHoverAnimation} from "@/hooks/useArrowHoverAnimation";
import {useContactTextHoverAnimation} from "@/hooks/useContactTextHoverAnimation";
import {useRef} from "react";

export const HomeMask = () => {
    return (
        <div className={`pageContainer bg-myWhite min-h-screen flex flex-col gap-[10rem]`}>
            <header className={`flex 3xs:justify-between`}>
                <Magnetic>
                    <div className={`aspect-square w-[7rem] absolute`}>
                        <img src="/blackLogo.png" alt=""/>
                    </div>
                </Magnetic>
                <ul className={`hidden sm:visible bg-black text-myWhite sm:flex sm:items-center mx-auto
                                px-10 py-5 gap-5 rounded-xl my-1 `}
                >
                    <NavListElement content={'Home'}/>
                    <NavListElement content={'About'}/>
                    <NavListElement content={'Education'}/>
                    <NavListElement content={'Services'}/>
                    <li className={`bg-myWhite rounded-full text-black p-3`}>
                        <button className={`flex rotate-0 overflow-hidden border-white`}>
                            <p>
                                Contact
                            </p>

                            <p className={`absolute translate-x-[-4rem]`}>
                                Contact
                            </p>
                        </button>
                    </li>
                </ul>
                <div className={`p-5 pl-5 sm:hidden`}>
                    <button
                        className={`bg-[#D3D3D3] flex flex-col gap-2 aspect-square w-[6rem] items-center justify-center visible p-5 rounded-full`}>
                        <div className={`w-[2rem] h-[2px] bg-black`}/>
                        <div className={`w-[2rem] h-[2px] bg-black`}/>
                    </button>
                </div>
            </header>
            <main className={`flex font-bold justify-center`}>
                <section
                    className={`flex flex-col text-center z-[2] py-[8rem] text-4xl 3xs:text-5xl xs:text-7xl md:text-9xl`}>
                    <p>DIMITRIS</p>
                    <p>SPARAGIS</p>
                </section>
                <div className={`absolute z-[1]`}>
                    <Circle/>
                </div>
            </main>
            <section className={`flex justify-center items-center gap-2 text-xl`}>
                <button className={`rounded-full bg-white aspect-square w-[5rem]
                 flex justify-center items-center`}
                >
                    <div className={`rotate-45 flex overflow-hidden`}>
                        <ArrowUpward
                            fontSize={`large`}
                        />
                        <ArrowUpward
                            fontSize={`large`}
                            className={`absolute translate-y-8`}
                        />
                    </div>
                </button>
                <p className={`md:text-2xl`}>Download or view CV</p>
            </section>
            <footer>
                <Scroll/>
                <span className={`absolute bottom-2 right-5 text-lg lg:text-2xl`}>
                    <p>Based in Athens, Greece</p>
                </span>
            </footer>
        </div>
    );
}