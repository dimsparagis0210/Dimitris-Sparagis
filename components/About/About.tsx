import Cursor from "@/components/Layout/Cursor";
import {Header} from "@/components/About/Header";
import {MainContent} from "@/components/About/MainContent";

export default function About() {
    return (
        <div>
            <Cursor/>
            <div className={`min-h-screen flex flex-col`}>
                <Header />
                <MainContent />
                <footer className={`flex p-[50px] border`}>
                    <p className={`textColorPrimary text-3xl`}>
                        Footer
                    </p>
                </footer>
            </div>
        </div>
    );
}