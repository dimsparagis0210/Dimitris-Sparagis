import Cursor from "@/components/Layout/Cursor";
import {Header} from "@/components/About/Header";
import {MainContent} from "@/components/About/MainContent";

export default function About() {
    return (
        <div>
            <Cursor/>
            <div className={`min-h-screen flex flex-col`}>
                <Header size={0.5}/>
                <MainContent size={2}/>
                <footer className={`border flex flex-[1]`}>
                    <p className={`textColorPrimary text-3xl`}>
                        Footer
                    </p>
                </footer>
            </div>
        </div>
    );
}