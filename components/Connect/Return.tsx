import {ArrowUpward} from "@mui/icons-material";

export const Return = () => {
    return (
        <footer className={`p-3 flex text-black w-full absolute bottom-[100px]`}>
            <button className={`bg-white rounded-full p-6`}>
                <ArrowUpward
                    fontSize="large"
                    className="icon rounded-[100%] w-[80px] h-[80px] [transition:all_0.5s]
                                    hover:bg-white hover:text-black hover:[cursor:none]"
                />
            </button>
        </footer>
    );
};