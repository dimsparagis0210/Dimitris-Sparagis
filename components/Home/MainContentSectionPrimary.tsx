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
                                lg:text-3xl lg:ml-[6rem]
                                3xl:text-6xl 2xl:ml-[8rem]
                                `}
                >
                    <Shadow/>
                    <div>
                        <h1 className={`textColorPrimary text-8xl 
                                        3xs:text-7xl
                                        md:text-9xl
                                        lg:text-[150px]
                                        2xl:text-[300px]
                                        `}
                        >
                            Dimitris
                        </h1>
                    </div>
                    <div className={`flex w-[40%] 
                                    3xs:w-[50%]
                                    sm:w-[30%]
                                    xl:w-[20%]
                                    2xl:w-[30%]
                                    `}
                    >
                        <p className={`textColorPrimary`}>It's all about creating exceptional digital experiences</p>
                    </div>
                </div>
                <div className={`absolute left-[150px] 
                                3xs:left-[100px]
                                xs:left-[150px] bottom-[200px]
                                sm:left-[280px] sm:bottom-[180px]
                                md:left-[300px] md:bottom-[100px]
                                lg:left-[450px] lg:bottom-[20px]
                                xl:left-[750px] xl:bottom-[20px]
                                2xl:left-[1200px] 2xl:bottom-[120px]
                                `}
                >
                    <Circle/>
                </div>
            </div>

        </main>
    );
}