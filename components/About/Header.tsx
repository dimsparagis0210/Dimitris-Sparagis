import {Logo} from "@/components/Home/Logo";
import {Navigation} from "@/components/About/Navigation";

export default function Header() {

    return (
        <header className={`flex justify-between mt-0 w-full`}>
            <Navigation />
        </header>
    );
}