import {Header} from "@/components/Education/Header";
import { MainContent } from "./MainContent";
import { Scroll } from "../Layout/Scroll";

export const Education = () => {
    return (
        <div className={`bg-black h-screen relative`}>
            <Header/>
            <MainContent></MainContent>
            <Scroll />
        </div>
    );
}