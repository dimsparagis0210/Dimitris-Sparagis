import Image from "next/image";

export const Logo = () => {

    let width:number = 100;

    if (screen.width >= 320 && screen.width < 1024) {
        width = 100;
    } else if (screen.width >= 1024) {
        width = 200;
    }

    return (
        <div className={`right-0`}>
            <Image
                width={width}
                height={width}
                src="/4.png"
                alt="Logo"
            />
        </div>
    );
}