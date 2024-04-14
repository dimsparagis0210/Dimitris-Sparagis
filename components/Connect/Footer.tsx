import { Circle } from "./Circle"

export const Footer = () => {
    return(
        <>
            <div className={`absolute bottom-[-20px] right-[-50px]`}>
                <Circle />
            </div>
            <section className={`absolute bottom-0 right-0 text-white text-3xl flex flex-col items-end`}>
                <h2>©️2024</h2>
                <h2>Dimitris Sparagis</h2>
            </section>
        </>
    )
}