export const Education = () => {
    return (
        <div
            className={`pageContainer md:min-h-screen relative bg-black`}
            id={'education'}
        >
            <section className={`border text-myGray flex flex-col`}>
                <header className={`flex justify-around text-7xl py-5`}>
                    <h1>Education</h1>
                    <h1>.02</h1>
                </header>
                <hr/>
                <main className={`flex`}>
                    <section className={`flex p-10`}>
                        <section>
                            <p>[1]</p>
                            <span className={`flex justify-around`}>
                                <h1>Saint-Paul High School</h1>
                                <h2>Grade:19.5/20</h2>
                            </span>
                            <ul>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Test</li>
                            </ul>
                        </section>
                        <section>
                            <span className={`flex `}>
                                <h2>Piraeus</h2>
                                <h2>2015-2021</h2>
                            </span>
                        </section>
                        <section>
                            <ul>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Test</li>
                            </ul>
                        </section>
                    </section>
                </main>
            </section>
        </div>
    );
}