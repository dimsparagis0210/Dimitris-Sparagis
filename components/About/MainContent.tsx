import Image from "next/image";
import {Scrollbar} from "@/components/About/Scrollbar";
import { SkillsCarousel } from "./SkillsCarousel";

export const MainContent = () => {
    return (
        <main className={`flex`}>
            <div className={`flex flex-col`}>
                <section className={`flex border w-[100%]`}>
                    <p className={`textColorPrimary text-7xl p-8`}>
                        I'm Dimitris, a passionate 20-year-old software engineer and designer hailing
                        from the beautiful landscapes of Greece.
                    </p>
                </section>
                <SkillsCarousel />
                <section className={`flex p-[100px] border`}></section>
            </div>
            <Scrollbar/>
        </main>
    );
}