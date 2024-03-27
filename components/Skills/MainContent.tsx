import { Circle } from "../Skills/Circle";
import {Skill} from "@/components/Skills/Skill";

export const MainContent = () => {
    return (
        <div className={`xs:ml-[1rem] sm:ml-[2rem] xl:ml-[5rem] 2xl:ml-[7rem]`}>
            <header>
                <h1 className={`3xs:text-[3rem] sm:text-[4rem] lg:text-[6rem] xl:text-[8rem]
                                2xl:text-[9rem] 2xl:ml-[5rem]
                                `}
                >
                    Skills
                </h1>
            </header>
            <main className={'inline-flex flex-col gap-5'}>
                <Skill
                    id={1}
                    skills={["React", "Next.js", "TailwindCSS", "GSAP"]}
                    isDashed={true}
                    title={"Web Stack"}
                    key={1}
                />
                <Skill
                    id={2}
                    skills={["Java", "Design Patterns", "Metrics", "Git"]}
                    isDashed={false}
                    title={"Software Engineering Stack"}
                    key={2}
                />
                <Skill
                    id={3}
                    skills={["UI/UX", "Figma", "GSAP"]}
                    isDashed={true}
                    title={"Design Stack"}
                    key={3}
                />
                <div className={`relative
                                3xs:left-[10rem] 3xs:bottom-5
                                xs:bottom-5                            
                                sm:left-[15rem]
                                md:left-[20rem]
                                xl:left-[35rem]
                                2xl:left-[55rem]
                                3xl:left-[65rem] 3xl:bottom-[10rem]
                                `}>
                    <Circle />
                </div>
            </main>

        </div>
    );
}