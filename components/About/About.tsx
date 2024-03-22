import {Navigation} from "@/components/About/Navigation";
import Header from "@/components/About/Header";
import { MainContent } from "./MainContent";
import { Scroll } from "./Scroll";
import { MultipleCirclesElement } from "../Layout/MultipleCirclesElement";

export default function About() {
    return (
        <div>
            <div className={`min-h-screen relative`}>
                <Header />
                <MainContent />
                <MultipleCirclesElement />
                <Scroll />
            </div>
        </div>
    );
}