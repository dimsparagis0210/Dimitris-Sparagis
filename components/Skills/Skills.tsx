import {Header} from "@/components/Skills/Header";
import { MainContent } from "./MainContent";
import { Scroll } from "./Scroll";
import {SkillsCarousel} from "@/components/Skills/SkillsCarousel";

export const Skills = () => {
    return (
        <div className={`bg-white min-h-screen relative`}>
            <Header />
            <MainContent />
            <Scroll />
            <SkillsCarousel />
        </div>
    );
}