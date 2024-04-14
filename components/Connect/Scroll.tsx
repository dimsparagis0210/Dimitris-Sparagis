import { Return } from "./Return"

export const Scroll = () => {
    return (
        <footer className={`w-full flex 3xs:text-[15px] absolute bottom-0 sm:text-lg 3xl:text-3xl ml-2`}>
            <section className={`flex flex-col relative bottom-10 items-center gap-5 2xl:gap-7`}>
                <div className={`bg-white h-[60px] w-[3px] 2xl:h-[100px]`}/>
            </section>
        </footer>
    )
}