import {motion} from "framer-motion";
import styles from '../../app/page.module.scss';
import gsap from "gsap";
import useMousePosition from "../../hooks/useMousePosition";
import {useEffect, useRef, useState} from "react";

export const AboutMask= (props:{handleSize:any}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const {x, y} = useMousePosition();
    let size;

    props.handleSize(40);


    const ballsRef = useRef(null);
    return (
        <div className={`pageContainer md:min-h-screen bg-myWhite`}>
            <main className={`flex flex-col gap-10 text-xl md:text-3xl lg:text-5xl xl:text-7xl`}>
                <section className={`flex p-10 justify-around`}>
                    <p className={`text-myGray`} onMouseEnter={props.handleSize(200)}
                       onMouseLeave={() => {
                           props.handleSize(40);
                       }}>
                        .01
                    </p>
                    <div className={'flex flex-col gap-10 w-[50%]'}>
                        <section>
                            <p onMouseEnter={props.handleSize(400)} onMouseLeave={props.handleSize(40)}>
                                I'm Dim13s, a software engineer and designer that AI can't touch.
                                My creativity and problem-solving skills keep me ahead of the curve.
                            </p>
                        </section>
                        <div className={`overflow-hidden shadow-2xl rounded-2xl self-end`}
                             onMouseEnter={() => {
                                 gsap.to(ballsRef.current, {
                                     scale: 1.1,
                                     boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.5)',
                                     duration: 0.5,
                                 })
                             }}
                             onMouseLeave={() => {
                                 gsap.to(ballsRef.current, {
                                     scale: 1,
                                     boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
                                     duration: 0.5,
                                 })
                             }}
                             ref={ballsRef}
                        >
                            <img src="/balls-sm.jpg" alt="Balls"/>
                        </div>
                        <footer
                            className={`self-end text-xl lg:text-3xl bg-gradient-to-r from-black to-[#C6B9B9] text-transparent bg-clip-text`}>
                            <p>It's all about creating exceptional digital experiences"</p>
                        </footer>
                    </div>
                </section>
            </main>
        </div>
    );
}