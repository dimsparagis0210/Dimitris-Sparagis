import { Logo } from "./Logo";
import { Navigation } from "@/components/Home/Navigation";
import { MainContentSectionPrimary} from "@/components/Home/MainContentSectionPrimary";
import { Footer } from "./Footer";
import { Circle } from "../Layout/Circle";
import { Shadow } from "../Layout/Shadow";
import Header from "./Header";

export const Home = () => {
    return (
        <>
            <div className={`min-h-screen`}>
                <Header />
                <MainContentSectionPrimary />
                <Footer />
            </div>
        </>
    );
}