import { MainContentSectionPrimary} from "@/components/Home/MainContentSectionPrimary";
import { Footer } from "./Footer";
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