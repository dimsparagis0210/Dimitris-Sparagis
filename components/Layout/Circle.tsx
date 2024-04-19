'use client';

import {useRef} from "react";
import {gsap} from "gsap";

export const Circle = () => {
    const circleRef = useRef(null);
    const mouseEnterHandler = () => {
        gsap.to(circleRef.current, {
            scale: 1.1,
            ease: "power2.inOut",
            cursor: "pointer",
        })
    };
    const mouseLeaveHandler = () => {
        gsap.to(circleRef.current, {
            scale: 1,
            ease: "power2.inOut",
            cursor: "pointer",
        })
    };
    return (
        <div>
            <div className={`w-[250px] aspect-square bg-gradient-to-b from-[#D6D6D6] to-myWhite rounded-full z-[-1] styles
                            3xs:w-[200px]
                            2xs:w-[250px]
                            sm:w-[300px] 
                            md:w-[350px]
                            lg:w-[400px]
                            xl:w-[500px]
                            2xl:w-[500px]
                            3xl:w-[600px]
            `}
                 ref={circleRef}
                 onMouseEnter={mouseEnterHandler}
                 onMouseLeave={mouseLeaveHandler}
            />
        </div>

    );
}