import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import Image from "next/image";

export const Logo = () => {
    const controls = useAnimation();
    useEffect(() => {
        controls.start("visible");
    }, []);

    return (
        <div>
            <Image
                width="100"
                height="100"
                src="/4.png"
                alt="Logo"
            />
        </div>
    );
}