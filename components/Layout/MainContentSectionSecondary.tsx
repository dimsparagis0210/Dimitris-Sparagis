'use client';

import {useEffect} from "react";

export const MainContentSectionSecondary = (props: {isBorder:boolean, side:string, mainContent:string}) => {
    const border: string = 'border-[4px] border-[solid] border-[white]';
    const textColor: string = 'text-[whitesmoke]';
    const activeBorder = props.isBorder ? `${border} border-[4px] border-[solid] border-[white]` : ' ';

    return (
        <>
            <hr className={`mr-1 bg-blue-950`}/>
            <section className={`${activeBorder} flex flex-row flex-1 p-[20px]`}>
                <div className={`flex flex-1`}>
                    <p className={`${textColor}`}>
                        {props.side}
                    </p>
                </div>
                <div className={`flex flex-[1.5] justify-end mr-[200px] text-2xl`}>
                    <p className={`${textColor}`}>
                        {props.mainContent}
                    </p>
                </div>
            </section>
        </>
    );
}