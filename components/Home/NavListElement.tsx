import {useTextHoverAnimation} from "@/hooks/useTextHoverAnimation";
import HoverAudio from "../Audio/HoverAudio";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import gsap from "gsap";

export const NavListElement = (props: { content: string }) => {

    const {ref1, ref2, buttonRef} = useTextHoverAnimation();
    return (
        <button
            className={`flex rotate-0 overflow-hidden border-white`} ref={buttonRef}
            onClick={() => {
                gsap.registerPlugin(ScrollToPlugin);
                gsap.to(window, {
                    duration: 0.5,
                    scrollTo: { y: `#${props.content.toLowerCase()}`},
                    ease: 'power2'
                })
            }}
        >
            <HoverAudio>
                <p
                    ref={ref1}
                >
                    {props.content}
                </p>
            </HoverAudio>
            <div className={`absolute`}>
                <p
                    ref={ref2}
                    className={`absolute translate-y-8`}
                >
                    {props.content}
                </p>
            </div>
        </button>
    );
}