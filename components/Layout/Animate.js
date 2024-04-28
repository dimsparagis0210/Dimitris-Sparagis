// export const menuSlide = {
//     initial: {x: "calc(100% + 100px)", width:'20px', aspectRatio:1, borderRadius:'100%'},
//     enter: {x: "0",width:'25%', height:'80%', borderRadius:'10px',transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1]}},
//     exit: {y: "-100", width:'0px', height:'0px', transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
// }

export const Perspective = {
    initial: {
        opacity: 0,
        rotateX:90,
    },
    enter: {
        opacity: 1,
        rotateX: 0,
        transition: {
            delay: 0.5,
        },
        stagger: 1
    },
    exit:{
        opacity: 0,
    }
};