export const Footer = () => {
    return (
        <footer className={`absolute bottom-0 w-full flex 3xs:text-[15px] sm:text-lg 3xl:text-3xl`}>
            <main className={`flex items-center gap-2`}>
                <section className={`flex flex-col relative bottom-10 items-center gap-5 2xl:gap-7`}>
                    <p className={`textColorPrimary rotate-[-90deg]`}>Scroll</p>
                    <div className={`bg-white h-[60px] w-[3px] 2xl:h-[100px]`}/>
                </section>
                <button className={`bg-white absolute right-10 bottom-20 text-2xl font-bold px-8 py-8 rounded-full`}>
                    CV
                </button>
            </main>
            <section className={`absolute bottom-5 right-2 textColorPrimary`}>
                <p>Based in Athens, Greece</p>
            </section>
        </footer>

    );
}