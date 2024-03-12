import Header from "@/components/Home/Header";
import {MainContentSectionPrimary} from "@/components/Home/MainContentSectionPrimary";
import {MainContentSectionSecondary} from "@/components/Home/MainContentSectionSecondary";
import {motion} from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {useState} from "react";
import { AnimationContainer } from "./AnimationContainer";
import {Logo} from "@/components/Home/Logo";
import {Footer} from "@/components/Home/Footer";

export const Home = () => {
    return (
        <>
            <div className={`flex flex-col min-h-screen`}>
                <Header />
                <main className="test">
                    <Logo />
                    <div className={`flex flex-[2] flex-col`}>
                        <MainContentSectionPrimary
                            side="Hi there"
                            mainContent="It's all about creating exceptional digital experiences"
                        />
                        <MainContentSectionSecondary
                            side="Based in Athens, Greece"
                            mainContent="©️2024"
                        />
                        <AnimationContainer delay={0.25}/>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}