import {useTextHoverAnimation} from "@/hooks/useTextHoverAnimation";

export const NavListElement = (props: { content: string }) => {

    const { ref1, ref2, buttonRef } = useTextHoverAnimation();
    return (
        <button className={`flex rotate-0 overflow-hidden border-white`} ref={buttonRef}>
            <p
                ref={ref1}
            >
                {props.content}
            </p>
            <div className={`absolute`}>

            <p
                ref={ref2}
                className={`absolute translate-y-8`}
            >
                {props.content}
            </p>
            </div>
        </button>
    );
}