import {motion, useInView} from "framer-motion";
import {gsap} from "gsap";
import {ArrowUpward} from "@mui/icons-material";
import HoverAudio from "@/components/Audio/HoverAudio";
import {useRef} from "react";
// @ts-ignore
import {perspective} from '../Layout/Animate';
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

export const NavLink = (props: { content: string, href: string, key: number }) => {
    const titleRef = useRef(null);
    const arrowRef = useRef(null);
    const containerRef = useRef(null);

    //Arrow size
    let arrowSize = "large";
    if (screen.width >= 768) {
        arrowSize = "large";
    } else {
        arrowSize = "medium";
    }

    return (
        <motion.a
            custom={props.key}
            ref={containerRef}
            variants={perspective}
            initial={'initial'}
            animate={'enter'}
            exit={'exit'}
            className={'py-5 relative flex hover:cursor-default overflow-hidden h-full'}
            onMouseEnter={(i) => {
                gsap.to(arrowRef.current, {x: 5, duration: 0.5, ease: 'expo'})
                gsap.to(titleRef.current, {x: '60px', duration: 0.5, ease: 'expo'})
                gsap.to(containerRef.current, {
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    duration: 0.5,
                    ease: 'sine.inOut',
                })
            }}
            onMouseLeave={() => {
                gsap.to(arrowRef.current, {x: '-60px', duration: 0.5, ease: 'expo'})
                gsap.to(titleRef.current, {x: 0, duration: 0.5, ease: 'expo'})
                gsap.to(containerRef.current, {backgroundColor: 'transparent', duration: 0.5, ease: 'sine.inOut'})
            }}
            onClick={() => {
                gsap.registerPlugin(ScrollToPlugin);
                gsap.to(window, {
                    duration: 0.5,
                    scrollTo: {y: `#${props.content.toLowerCase()}`},
                    ease: 'sine.inOut'
                })}

            }
        >
                <div ref={arrowRef} className={`translate-x-[-50px] rotate-90 absolute`}>
                    <ArrowUpward fontSize={arrowSize}/>
                </div>
                <HoverAudio>
                    <div ref={titleRef} className={`cursor-default`}>
                        {props.content}
                    </div>
                </HoverAudio>
        </motion.a>

    );
}