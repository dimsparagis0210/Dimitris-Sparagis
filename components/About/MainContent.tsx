import Image from "next/image";
import {Scroll} from "@/components/About/Scroll";
import { SkillsCarousel } from "./SkillsCarousel";
import { DesignElement } from "./DesignElement";
import { Circle } from "../Layout/Circle";

export const MainContent = () => {
    return (
        <main className={'relative mx-5 mt-[100px]'}>
            <section className={`bg-beige p-10 rounded-t-3xl rounded-bl-3xl text-2xl bg-gradient-to-b from-beige to-[#676456]
                                 md:text-3xl md:ml-10 md:py-[60px]
                                    lg:text-4xl lg:ml-20 lg:py-[70px]
                                    xl:text-5xl xl:ml-20 xl:py-[80px]
                                    2xl:text-6xl 2xl:ml-20 2xl:py-[80px] 2xl:mr-[600px]
                                    3xl:text-7xl 3xl:ml-20 3xl:py-[130px] 3xl:px-[180px] 3xl:rounded-t-[100px] 3xl:rounded-bl-[100px]
                                    3xl:mr-[300px]
                                `}
            >
                <p className={`bg-gradient-to-b from-[#676456] to-black text-transparent bg-clip-text`}>I'm Dimitris, a passionate 20-year-old software engineer and designer hailing from the beautiful landscapes of Greece.</p>
            </section>
            <section className={`absolute top-[10rem] z-[-1]`}>
                <Circle />
            </section>
        </main>
    );
}