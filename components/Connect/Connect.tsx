import { Header } from "./Header";
import {MainContent} from "./MainContent";
import { Scroll } from "./Scroll";
import {Return} from "@/components/Connect/Return";
import {Footer} from "@/components/Connect/Footer";

export const Connect = () => {
    return (
        <div className={`bg-beige h-screen relative`}>
            <Header />
            <MainContent />
            <Scroll />
            <Return />
            <Footer />
        </div>
    );
}