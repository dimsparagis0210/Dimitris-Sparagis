import Image from "next/image";

export const Logo = () => {

    return (
        <div>
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