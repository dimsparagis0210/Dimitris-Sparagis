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
                    skills={["UI/UX", "Figma"]}
                    isDashed={true}
                    title={"Design Stack"}
                    key={3}
                />
            </main>
            <div className={`absolute
                             3xs:left-[7rem]
                             xs:left-[10rem]
                             sm:left-[20rem]
                             lg:left-[30rem]
                             xl:left-[40rem]
                             2xl:left-[60rem] 2xl:bottom-[1rem]
                             3xl:left-[100rem] 3xl:bottom-[20rem]
                            `}
            >
                <Circle />
            </div>
        </div>
    );
}