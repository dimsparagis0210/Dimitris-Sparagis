import {useEffect} from "react";

export const useAnimateOnStart = (controls: any) => {
    useEffect(() => {
        controls.start("visible");
    }, []);
}