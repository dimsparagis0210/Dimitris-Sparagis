import {gsap} from "gsap";
import {useRef} from "react";

export const NavListElement = (props:{ text:string, index:number }) => {

    const firstP = useRef(null);
    const secondP = useRef(null);
    const listElementHoverHandler = () => {
        const timeline = gsap.timeline();
        gsap.fromTo(firstP.current, {
            opacity:1,
            y:0,
        }, {
            opacity:0,
            y:-100,
            ease: "power4.inOut",
        });
        gsap.fromTo(secondP.current, {
            opacity:0,
            y:50,
            visibility:"hidden"
        }, {
            opacity:1,
            y:0,
            ease: "power4.inOut",
            visibility:"visible"
        });
    }
    const listElementHoverOutHandler = () => {
        gsap.fromTo(secondP.current, {
            opacity:1,
            y:0,
        }, {
            opacity:0,
            y:50,
            ease: "power4.inOut",
        });
        gsap.fromTo(firstP.current, {
            opacity:0,
            y:-100,

        }, {
            opacity:1,
            y:0,
            ease: "power4.inOut",

        });
    }
    return (
        <li className={`p-1 hover:cursor-pointer`}>
            <a>
                <span
                    className={'flex flex-col p-1 hover:cursor-pointer overflow-y-hidden'}
                    onMouseEnter={listElementHoverHandler}
                    onMouseLeave={listElementHoverOutHandler}
                >
                    <p ref={firstP}>{props.text}</p>
                    <p className={`sm:absolute`} ref={secondP}>{props.text}</p>
                </span>
            </a>
        </li>
    );
};