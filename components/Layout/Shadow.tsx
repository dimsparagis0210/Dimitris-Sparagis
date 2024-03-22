import {absolutePathToPage} from "next/dist/shared/lib/page-path/absolute-path-to-page";

export const Shadow = () => {
    return (
        <>
            <div
                className={`absolute blur-3xl rotate-[-15deg] bg-gray-500 w-[300px] h-[100px]
                           3xs:w-[200px]
                           sm:w-[300px]
                           3xl:w-[1000px] 3xl:h-[100px] 3xl:top-10
                           `}
            />
        </>
    );
}