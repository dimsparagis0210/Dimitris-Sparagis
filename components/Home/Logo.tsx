import Magnetic from '../Layout/Magnetic';

export const Logo = () => {
    return (
        <div className={`right-0 aspect-square
                         3xs:w-[30%] 
                         md:w-[20%]
                         xl:w-[10%]
                        `}
        >
            <Magnetic>
                <img
                    src="/4.png"
                    alt="Logo"
                />
            </Magnetic>
        </div>
    );
}