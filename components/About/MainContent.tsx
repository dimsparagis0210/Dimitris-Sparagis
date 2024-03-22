import Image from "next/image";
import {Scroll} from "@/components/About/Scroll";
import { SkillsCarousel } from "./SkillsCarousel";
import { DesignElement } from "./DesignElement";
import { Circle } from "../Layout/Circle";

export const MainContent = () => {
    return (
        <main className={'relative mx-5 mt-[100px]'}>
            <section className={` bg-beige p-10 rounded-t-3xl rounded-bl-3xl text-2xl bg-gradient-to-b from-beige to-[#676456]`}>
                <p className={`bg-gradient-to-b from-[#676456] to-black text-transparent bg-clip-text`}>I'm Dimitris, a passionate 20-year-old software engineer and designer hailing from the beautiful landscapes of Greece.</p>
            </section>
            <section className={`absolute top-[10rem] z-[-1]`}>
                <Circle />
            </section>
        </main>
    );
}