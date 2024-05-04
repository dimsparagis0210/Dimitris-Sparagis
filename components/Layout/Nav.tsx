import {useRef, useState} from "react";
import {gsap} from "gsap";
import styles from './Burger.module.scss';
import {AnimatePresence, motion} from "framer-motion";
import {NavLink} from "@/components/Layout/NavLink";
import {Perspective} from "@/components/Layout/Animate";
import {Cursor} from "@/components/Layout/Cursor";
import {ReactRef} from "@gsap/react";
import {original} from "immer";

export const Nav = () => {
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

    let navW, navH;

    if (window.innerWidth >= 1024) {
        navW = '25%';
        navH = '80%';
    } else if (window.innerWidth < 1024 && window.innerWidth >= 640) {
        navW = '40%';
        navH = '80%';
    } else if (window.innerWidth < 640) {
        navW = '80%';
        navH = 'auto';
    }

    const variants = {
        open: {
            width:navW,
            height:navH,
            transition: {
                duration: 0.4,
                ease: [0.76, 0, 0.24, 1],
            },
        },
        closed: {
            width: '0rem',
            height:'0rem',
            transition: {
                duration: 0.4,
                ease: [0.76, 0, 0.24, 1],
            }
        }
    }

    return (
        <div ref={navRef}>
            <audio ref={audioRef} src="/close.wav" preload="auto" />
            <div
                onClick={() => {
                    setIsActive(!isActive);
                    // @ts-ignore
                    audioRef.current.play();
                }}
                className={`${styles.button} myButton aspect-square w-[3rem] right-[0.5rem] sm:right-[1.5rem] top-[1rem] z-20
                            sm:w-[5rem] 
                            ${isActive ? 'bg-black' : 'bg-myGray'}
                `}
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
                        className={`fixed right-4 top-4 lg:w-[25%] sm:right-4 sm:w-[40%] sm:h-[80%] w-[80%] h-auto
                                    rounded-xl bg-myGray 
                                    z-10`
                        }
                        variants={variants}
                        animate={isActive ? 'open' : 'closed'}
                        initial={'closed'}
                        exit={'closed'}
                    >
                        <Cursor/>
                        <section className={`flex flex-col gap-5 p-5 sm:p-12 sm:gap-7
                                            lg:p-15 top-10 relative`
                                }
                        >
                            <motion.header
                                className={`border-b border-b-black`}
                                variants={Perspective}
                                initial={'initial'}
                                animate={'enter'}
                                exit={'exit'}
                            >
                                Navigation
                            </motion.header>
                            <ul className={`flex flex-col text-xl gap-1 pb-20
                                            md:text-3xl lg:gap-5`
                                }
                            >
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