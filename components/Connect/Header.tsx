import {LogoWhiteTheme} from "@/components/Education/LogoBlackTheme";

export const Header = () => {
    return (
        <div className={'flex justify-between'}>
            <div className="py-5 pl-5">
                <button
                    className={`bg-white flex flex-col gap-2 aspect-square items-center justify-center visible p-5 rounded-full`}>
                    <div className={`w-[30px] h-[2px] bg-myBlack`}/>
                    <div className={`w-[30px] h-[2px] bg-myBlack`}/>
                </button>
            </div>
        </div>
    );
}