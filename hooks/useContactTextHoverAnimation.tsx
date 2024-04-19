'use client';

import {useEffect, useRef} from "react";
import gsap from "gsap";

export const useContactTextHoverAnimation = () => {
    const contactRef1 = useRef(null);
    const contactRef2 = useRef(null);
    const contactButtonRef = useRef(null);

    useEffect(() => {
        const handleMouseEnter1 = () => {
            gsap.to([contactRef1.current], {
                duration: 0.3,
                translateX: 65,
                ease: 'cubic.inOut',
            });
            gsap.to([contactRef2.current], {
                duration: 0.3,
                translateX: 0,
                ease: 'cubic.inOut',
            });
        };

        const handleMouseLeave1 = () => {
            gsap.to([contactRef1.current], {
                duration: 0.3,
                translateX: 0,
                ease: 'cubic.inOut',
            });
            gsap.to([contactRef2.current], {
                duration: 0.3,
                translateX: -65,
                ease: 'cubic.inOut',
            });
        };

        if (contactButtonRef.current) {
            // @ts-ignore
            contactButtonRef.current.addEventListener('mouseenter', handleMouseEnter1);
            // @ts-ignore
            contactButtonRef.current.addEventListener('mouseleave', handleMouseLeave1);
        }

        return () => {
            // Cleanup function to remove event listeners
            if (contactButtonRef.current) {
                // @ts-ignore
                contactButtonRef.current.removeEventListener('mouseenter', handleMouseEnter1);
                // @ts-ignore
                contactButtonRef.current.removeEventListener('mouseleave', handleMouseLeave1);
            }
        };
    }, []);
    return { contactRef1 , contactRef2 , contactButtonRef };
}