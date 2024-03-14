import Image from "next/image";
import {Scrollbar} from "@/components/About/Scrollbar";
import { SkillsCarousel } from "./SkillsCarousel";
import { DesignElement } from "./DesignElement";

export const MainContent = (props:{size:number}) => {
    return (
        <main className={`flex flex-[${props.size}]`}>
            <div className={`flex flex-col`}>
                <section className={`flex border w-[100%]`}>
                    <p className={`textColorPrimary text-7xl p-8`}>
                        I'm Dimitris, a passionate 20-year-old software engineer and designer hailing
                        from the beautiful landscapes of Greece.
                    </p>
                </section>
                <SkillsCarousel/>
                <section className={`flex flex-1 border pl-[300px] items-center`}>
                    <DesignElement />
                </section>
            </div>
            <Scrollbar/>
        </main>
    );
}