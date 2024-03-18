import {absolutePathToPage} from "next/dist/shared/lib/page-path/absolute-path-to-page";

export const Shadow = () => {
    return (
        <>
            <div
                className={`absolute blur-3xl rotate-[-15deg] bg-gray-500 w-[300px] h-[100px]`}
            />
        </>
    );
}