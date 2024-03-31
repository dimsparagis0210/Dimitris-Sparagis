import './Navigation.css';
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import Magnetic from '../Layout/Magnetic';
import { NavListElement } from './NavListElelment';

export const Navigation = () => {
    const hoverHandler = () => {
        gsap.to(".menu-button", {
            scale:1.2,
        })
    }


    useGSAP(() => {
        gsap.fromTo('.list', {
            opacity: 0,
            x: -100,
            duration: 1,
            ease: "bounce.in",
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "bounce.inOut",
        });
    }, []);
    return (
        <div className="navigation pl-5">
            <button
                className={`menu-button flex flex-col gap-2 aspect-square items-center 
                    justify-center visible p-5 sm:invisible`}
                onMouseEnter={hoverHandler}
                onMouseLeave={() => gsap.to(".menu-button", {scale:1})}
            >
                <div className={`w-[30px] h-[2px] bg-black`}/>
                <div className={`w-[30px] h-[2px] bg-black`}/>
            </button>
            <ul className={`list invisible left-10 relative top-[-20px]
                            sm:visible
                            md:text-lg 
                            3xl:text-3xl 3xl:leading-10
                           `}
            >
                <NavListElement index={1} text={"Home"}/>
                <NavListElement index={2} text={"About"}/>
                <NavListElement index={3} text={"Skills"}/>
                <NavListElement index={4} text={"Experience"}/>
                <NavListElement index={5} text={"Contact"}/>
            </ul>
        </div>
    );
}