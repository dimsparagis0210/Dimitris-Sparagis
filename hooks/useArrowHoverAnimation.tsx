'use client';

import {useEffect, useRef} from "react";
import gsap from "gsap";

export const useArrowHoverAnimation = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleMouseEnter = () => {
            gsap.to([ref1.current], {
                duration: 0.3,
                translateY: -32,
                ease: 'cubic.inOut',
            });
            gsap.to([ref2.current], {
                duration: 0.3,
                translateY: 0,
                ease: 'cubic.inOut',
            });
        };

        const handleMouseLeave = () => {
            gsap.to([ref1.current, ref2.current], {
                duration: 0.3,
                translateY: 0,
                ease: 'cubic.inOut',
            });
            gsap.to([ref2.current], {
                duration: 0.3,
                translateY: 32,
                ease: 'cubic.inOut',
            });
        };

        if (buttonRef.current) {
            // @ts-ignore
            buttonRef.current.addEventListener('mouseenter', handleMouseEnter);
            // @ts-ignore
            buttonRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            // Cleanup function to remove event listeners
            if (buttonRef.current) {
                // @ts-ignore
                buttonRef.current.removeEventListener('mouseenter', handleMouseEnter);
                // @ts-ignore
                buttonRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);
    return { ref1 , ref2 , buttonRef };
}