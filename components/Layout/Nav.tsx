import {useRef, useState} from "react";
import {gsap} from "gsap";
import styles from './Burger.module.scss';
import {AnimatePresence, motion} from "framer-motion";
import {NavLink} from "@/components/Layout/NavLink";
import {Perspective} from "@/components/Layout/Animate";
import {Cursor} from "@/components/Layout/Cursor";
import {ReactRef} from "@gsap/react";

export const Nav = (props: { isActive: any, ref:ReactRef }) => {
    const navPages = [
        {
            title: "Home",
            href: "",
            i: 0
        },
        {
            title: "About",
            href: "/#about",
            i: 1
        },
        {
            title: "Education",
            href: "/education",
            i: 2
        },
        {
            title: "Services",
            href: "/services",
            i: 3
        },
        {
            title: "Contact",
            href: "/contact",
            i: 4
        },
    ];

    const [isActive, setIsActive] = useState(false);
    const navRef = useRef(null);
    const audioRef = useRef(null);

    const variants = {
        open: {
            width: '25%',
            height: '80%',
            transition: {
                duration: 0.4,
                ease: [0.76, 0, 0.24, 1],
            },
        },
        closed: {
            width: '0rem',
            height: '0rem',
            transition: {
                duration: 0.4,
                ease: [0.76, 0, 0.24, 1],
            }
        }
    }

    // const triggerYLevel = 500; // Adjust this value as needed (in pixels)
    //
    // gsap.registerPlugin(ScrollTrigger); // Ensure ScrollTrigger is registered
    //
    // gsap.to('.myButton', {
    //     scrollTrigger: {
    //         trigger: '.myButton',
    //         start: 'top top',
    //         end: 'bottom top',
    //         toggleActions: 'restart pause reverse pause',
    //         // markers: true, // Uncomment this line to see the ScrollTrigger's trigger area
    //     },
    //     opacity: 1,
    //     duration: 3,
    //     ease: 'power4.inOut'
    // });


    return (
        <div ref={navRef}>
            <audio ref={audioRef} src="/close.wav" preload="auto" />
            <div
                onClick={() => {
                    setIsActive(!isActive);
                    // @ts-ignore
                    audioRef.current.play();
                }}
                className={`${styles.button} myButton ${isActive ? 'bg-black' : 'bg-myGray'} z-20`}
                onMouseEnter={() => {
                    gsap.to('.myButton', {
                        scale: 1.1,
                        backgroundColor: 'black',
                        duration: 0.5,
                        ease: 'expo'
                    })
                }}
                onMouseLeave={() => {
                    {
                        !isActive ?
                            gsap.to('.myButton', {
                                scale: 1,
                                backgroundColor: '#D9D9D9',
                                duration: 0.5,
                                ease: 'expo'
                            })
                            :
                            gsap.to('.myButton', {
                                scale: 1,
                                duration: 0.5,
                                ease: 'expo'
                            })
                    }
                }}
            >
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </div>
            <AnimatePresence mode={'wait'}>
                {isActive &&
                    <motion.nav
                        className={`fixed right-10 top-10 w-1/4 h-[80%] rounded-xl bg-myGray backdrop-filter  bg-opacity-90 z-10`}
                        variants={variants}
                        animate={isActive ? 'open' : 'closed'}
                        initial={'closed'}
                        exit={'closed'}
                    >
                        <Cursor/>
                        <section className={`flex flex-col gap-5 p-20 top-10 relative`}>
                            <motion.header
                                className={`border-b border-b-black`}
                                variants={Perspective}
                                initial={'initial'}
                                animate={'enter'}
                                exit={'exit'}
                            >
                                Navigation
                            </motion.header>
                            <ul className={`flex flex-col text-3xl gap-5`}>
                                {
                                    navPages.map((page) => {
                                        return (
                                            <NavLink href={page.href} content={page.title} key={page.i}/>
                                    )})
                                }
                            </ul>
                        </section>
                    </motion.nav>
                }
            </AnimatePresence>
        </div>
    );
}