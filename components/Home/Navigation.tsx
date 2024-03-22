import './Navigation.css';

export const Navigation = () => {
    return (
        <div className="navigation pl-5">
            <button className={`menu-button flex flex-col gap-2 aspect-square items-center justify-center visible p-5 sm:invisible`}>
                <div className={`w-[30px] h-[2px] bg-black`}/>
                <div className={`w-[30px] h-[2px] bg-black`}/>
            </button>
            <ul className={`list invisible left-10 relative top-[-20px]
                            sm:visible
                            md:text-lg 
                           `}
            >
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}