'use client';

import {Circle} from "@/components/Layout/Circle";
import { Shadow } from "../Layout/Shadow";

export const MainContentSectionPrimary = () => {
    return (
        <main>
            <div>
                <div className={`flex flex-col ml-5 relative 
                                sm:ml-12 sm:mt-[20px] 
                                md:text-2xl
                                lg:text-3xl
                                `}
                >
                    <Shadow/>
                    <div>
                        <h1 className={`textColorPrimary text-8xl 
                                        2xs:text-7xl
                                        md:text-9xl
                                        lg:text-[150px]
                                        `}
                        >
                            Dimitris
                        </h1>
                    </div>
                    <div className={`flex w-[40%] 
                                    2xs:w-[50%]
                                    sm:w-[30%]
                                    `}
                    >
                        <p className={`textColorPrimary`}>It's all about creating exceptional digital experiences</p>
                    </div>
                </div>
                <div className={`absolute left-[150px] 
                                2xs:left-[100px]
                                sm:left-[270px] sm:bottom-[180px]
                                md:left-[300px] md:bottom-[100px]
                                lg:left-[450px] lg:bottom-[20px]
                                `}
                >
                    <Circle/>
                </div>
            </div>

        </main>
    );
}