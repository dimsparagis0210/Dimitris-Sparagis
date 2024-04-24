import { useState, useEffect } from "react";

const useMousePosition = () => {
    const [
        mousePosition,
        setMousePosition
    ] = useState({ x: 100, y: 100 });

    useEffect(() => {
        const updateMousePosition = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY});
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };

    }, [mousePosition]);

    return mousePosition;
};

export default useMousePosition;