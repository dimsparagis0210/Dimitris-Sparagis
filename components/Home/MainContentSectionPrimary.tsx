'use client';

import {Circle} from "@/components/Layout/Circle";
import { Shadow } from "../Layout/Shadow";

export const MainContentSectionPrimary = () => {
    return (
        <main>
            <div>
                <div className={`flex flex-col ml-5 sm:ml-12 sm:mt-10 relative`}>
                    <Shadow/>
                    <div>
                        <h1 className={`textColorPrimary text-8xl`}>Dimitris</h1>
                    </div>
                    <div className={`flex w-[40%] sm:w-[20%]`}>
                        <p className={`textColorPrimary`}>It's all about creating exceptional digital experiences</p>
                    </div>
                </div>
                <div className={`absolute left-[150px] sm:left-[350px] sm:bottom-10`}>
                    <Circle/>
                </div>
            </div>

        </main>
    );
}