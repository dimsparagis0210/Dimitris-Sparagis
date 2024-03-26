export const Scroll = () => {
    return (
        <footer className={`w-full flex 3xs:text-[15px] absolute bottom-0 sm:text-lg 3xl:text-3xl`}>
            <main className={`flex items-center gap-2`}>
                <section className={`flex flex-col relative bottom-10 items-center gap-5 2xl:gap-7`}>
                    <p className={`text-black rotate-[-90deg]`}>Scroll</p>
                    <div className={`bg-black h-[60px] w-[3px] 2xl:h-[100px]`}/>
                </section>
            </main>
        </footer>
    );
}