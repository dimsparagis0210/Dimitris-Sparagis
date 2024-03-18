import './Navigation.css';

export const Navigation = () => {
    return (
        <div className="navigation">
            <button className={`menu-button visible sm:invisible`}>
                <p className={`text-black py-2 px-5`}>Menu</p>
            </button>
            <ul className={`list invisible sm:visible`}>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}