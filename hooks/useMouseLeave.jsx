import { useEffect, useState } from "react";

export default function useMouseLeave() {
    const [mouseOnScreen, setMouseOnScreen] = useState(true);
    const updateMousePosition = (e) => {
        setMouseOnScreen(e);
    }
    useEffect(() => {
        window.addEventListener("mouseleave", () => updateMousePosition(false));
        window.addEventListener("mouseenter", () => updateMousePosition(true))
        return () => {
            window.removeEventListener("mouseleave", () => updateMousePosition(false));
            window.removeEventListener("mouseleave", () => updateMousePosition(true));

        }
    }, [])
    return mouseOnScreen;
}