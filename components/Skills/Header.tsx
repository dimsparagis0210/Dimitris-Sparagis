import Image from "next/image";

export const Header = () => {
    return (
        <div className={'flex justify-between'}>
            <div className="py-5 pl-5">
                <button
                    className={`bg-beige flex flex-col gap-2 aspect-square items-center justify-center visible p-5 rounded-full`}>
                    <div className={`w-[30px] h-[2px] bg-white`}/>
                    <div className={`w-[30px] h-[2px] bg-white`}/>
                </button>
            </div>
            <button>
                <Image
                    layout={"responsive"}
                    src="/blackLogo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                />
            </button>
        </div>
    );
}