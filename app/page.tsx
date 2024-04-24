'use client'

import {Home} from "@/components/Home/Home";
import {About} from "@/components/About/About";
import ReactLenis from "@studio-freight/react-lenis";
import styles from "@/app/page.module.scss";

export default function MyApp() {

    return (
        <>
            <ReactLenis root>
                <Home/>
                <About/>
            </ReactLenis>
        </>
    )
}
