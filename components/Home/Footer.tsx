export const Footer = () => {
    return (
        <footer className={`absolute bottom-0 w-full flex`}>
            <main className={`flex items-center gap-2`}>
                <section className={`flex flex-col relative bottom-10 items-center gap-5`}>
                    <p className={`textColorPrimary rotate-[-90deg]`}>Scroll</p>
                    <div className={`bg-white h-[60px] w-[3px]`}/>
                </section>
                <button className={`bg-white relative text-lg font-bold px-10 py-5 rounded-2xl`}>
                    CV
                </button>
            </main>
            <section className={`absolute bottom-5 right-2 textColorPrimary`}>
                <p>Based in Athens, Greece</p>
            </section>
        </footer>

    );
}