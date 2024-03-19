import {Logo} from "@/components/Home/Logo";
import {Navigation} from "@/components/Home/Navigation";

export default function Header() {

    return (
        <header className={`flex justify-between w-full`}>
            <Navigation/>
            <Logo/>
        </header>
    );
}