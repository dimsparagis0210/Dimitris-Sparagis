import {Circle} from "@/components/Layout/Circle";
import {Diamond} from "@mui/icons-material";
export const MainContent = () => {
    const skills = [
        'Organisation',
        'Team-player',
        'Computer Science',
        'Software Development(C, Java, Web, .NET, SQL)',
    ];

    return (
        <div className={`xs:ml-[1rem] sm:ml-[2rem] xl:ml-[5rem] 2xl:ml-[7rem]`}>
            <header>
                <h1 className={`3xs:text-[3rem] sm:text-[4rem] lg:text-[6rem] xl:text-[8rem]
                                2xl:text-[9rem] 2xl:ml-[5rem] text-white
                                `}
                >
                    Education
                </h1>
            </header>
            <main className={`flex absolute items-center 3xs:flex-col 3xs:m-1 lg:flex-row`}>
                <section className={`text-white rounded-2xl bg-gradient-to-b from-beige to-black 
                                  p-10 inline-flex flex-col gap-10 relative z-[1] 3xs:px-3
                                  lg:p-10
                                  xl:py-5
                                  `}
                >
                    <header className={`inline-flex flex-col gap-2 text-myBlack`}>
                        <h2 className={`font-bold`}>University of Macedonia, Thessaloniki</h2>
                        <section className={'flex justify-between'}>
                            <h3>BSc in Computer Science</h3>
                            <h3>2021-2025</h3>
                        </section>
                        <h3 className={`self-end text-blueGray-700`}>Current GPA:3.5/4</h3>
                    </header>
                    <section className={`flex text-white`}>
                        <i className={`w-auto`}>
                            <img src="/diamond.png" alt=""/>
                        </i>
                        <section className={`flex flex-col gap-5`}>
                            <header className={`flex text-white`}>
                                <h2>Key Skills</h2>
                            </header>
                            <ul>
                                {skills.map(skill => {
                                    return <li className={`text-white 3xs:py-2 lg:py-5`}>{skill}</li>
                                })}
                            </ul>
                        </section>
                    </section>
                </section>
                <div className={`relative z-[0] 3xs:bottom-20 lg:bottom-auto lg:right-[15rem]`}>
                    <Circle />
                </div>
            </main>
        </div>
    );
}