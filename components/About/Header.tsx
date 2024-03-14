import {ArrowUpward} from "@mui/icons-material";

export const Header = () => {
    const navItemStyle = `textColorPrimary w-[100%] h-[100%] bg-white rounded-full`;

    return (
        <header className={`flex items-center justify-between border`}>
            <div className={`flex flex-col items-center border`}>
                <ArrowUpward
                    fontSize="medium"
                    className="icon textColorPrimary rounded-[100%] w-[5rem] h-[5rem] [transition:all_0.5s]
                                    hover:bg-white hover:text-black hover:[cursor:none]"
                />
                <p className={`textColorPrimary`}>
                    Go up
                </p>
            </div>
            <div className={`flex flex-col gap-2 w-[40px] h-[30px]`}>
                <div className={navItemStyle}/>
                <div className={navItemStyle}/>
                <div className={navItemStyle}/>
            </div>
        </header>
    );
}