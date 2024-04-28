// 'use client';
//
// import {useGSAP} from "@gsap/react";
// import {gsap} from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";
// import styles from './Burger.module.scss';
// import {useState} from "react";
//
// export const Burger = () => {
//     const [isActive, setIsActive] = useState(false);
//
//     // useGSAP(() => {
//     //     gsap.registerPlugin(ScrollTrigger);
//     //     gsap.to('.burger', {
//     //         scrollTrigger:{
//     //             trigger: document.documentElement,
//     //             start: '0',
//     //             end: window.innerHeight,
//     //             onLeave: () => {gsap.to('.burger', {scale: 1, duration: 0.25, ease: "power1.out"})},
//     //             onEnterBack: () => {gsap.to('.burger', {scale: 0, duration: 0.25, ease: "power1.out"})}
//     //         },
//     //     })
//     // }, []);
//
//
//
//     return (
//         <div onClick={() => setIsActive(!isActive)} className={`${styles.button} bg-myGray`}>
//             <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
//         </div>
//     );
// }