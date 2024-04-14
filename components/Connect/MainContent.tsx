import {Circle} from "@/components/Layout/Circle";
import './MainContent.css';

export const MainContent = () => {

    return (
        <div className={`xs:ml-[1rem] sm:ml-[2rem] xl:ml-[5rem] 2xl:ml-[7rem]`}>
            <header className={`flex flex-col items-end`}>
                <h1 className={` text-myBlack`}
                >
                    Let's Connect
                </h1>
                <h2 className={`text-white`}>
                    Available for work March 2024
                </h2>
            </header>
            <main className={`inline-flex flex-wrap gap-2 ml-1 mt-2`}>
                <section className={`w-[65%]`}>
                    <h3>Medium articles</h3>
                    <hr/>
                    <article className={`flex flex-col bg-white rounded-2xl overflow-hidden gap-2`}>
                        <div className={`bg-myBlack`}>
                            <img src="/article.jpeg" alt="Article photo"/>
                        </div>
                        <h3 className={`p-3`}>
                            My first 2 years as a Computer Science student
                        </h3>
                    </article>
                </section>
                <section>
                    <h3>Social</h3>
                    <hr/>
                    <ul>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Github</li>
                    </ul>
                </section>
                <section>
                    <h3>Resources</h3>
                    <hr/>
                    <ul>
                        <li>Code on Github</li>
                        <li>Design on Figma</li>
                    </ul>
                </section>
            </main>
        </div>
    )
}