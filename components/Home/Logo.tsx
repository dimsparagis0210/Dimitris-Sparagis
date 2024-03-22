import Image from "next/image";

export const Logo = () => {

    return (
        <div className={`right-0`}>
            <Image
                layout={"responsive"}
                width="200"
                height="200"
                src="/4.png"
                alt="Logo"
            />
        </div>
    );
}