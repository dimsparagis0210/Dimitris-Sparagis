import { Circle } from "../Skills/Circle";

export const MainContent = () => {
    return (
        <div className={`ml-12`}>
            <header className={`mt-[-100px]`}>
                <h1 className={`text-[250px] ml-20`}>Skills</h1>
            </header>
            <main className={'flex flex-col gap-5 overflow-hidden'}>
                <section
                    className={`border border-beige border-dashed inline-flex items-center gap-[100px] w-auto py-5 px-2`}>
                    <section className={`ml-5`}>
                        <div className={`bg-beige text-center rounded-3xl`}>
                            <p className={`text-white text-6xl p-7`}>01</p>
                        </div>
                    </section>
                    <section className={`flex flex-col gap-2 p-4 rounded-2xl text-myBlack`}>
                        <h2 className={`text-6xl font-bold`}>Web Stack</h2>
                        <p className={`text-4xl`}>React, Next.js, TailwindCSS</p>
                    </section>
                </section>
                <section
                    className={`inline-flex items-center gap-[100px] w-auto py-5 px-2 ml-[250px]`}>
                    <section className={`ml-5`}>
                        <div className={`bg-beige text-center rounded-3xl`}>
                            <p className={`text-white text-6xl p-7`}>01</p>
                        </div>
                    </section>
                    <section className={`flex flex-col gap-2 p-4 rounded-2xl text-myBlack`}>
                        <h2 className={`text-6xl font-bold`}>Software Engineering Stack</h2>
                        <p className={`text-4xl`}>Java, Design Patterns, Metrics, Git</p>
                    </section>
                </section>
                <section
                    className={`border border-beige border-dashed inline-flex items-center gap-[100px] w-auto py-5 px-2`}>
                    <section className={`ml-5`}>
                        <div className={`bg-beige text-center rounded-3xl`}>
                            <p className={`text-white text-6xl p-7`}>01</p>
                        </div>
                    </section>
                    <section className={`flex flex-col gap-2 p-4 rounded-2xl text-myBlack`}>
                        <h2 className={`text-6xl font-bold`}>Design Stack</h2>
                        <p className={`text-4xl`}>UI/UX, Figma</p>
                    </section>
                </section>
                <div className={`absolute right-[400px]`}>
                    <Circle />
                </div>
            </main>

        </div>
    );
}