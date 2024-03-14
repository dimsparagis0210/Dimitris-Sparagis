import Image from "next/image";

export const SkillsCarousel = () => {
    return (
        <section className={`flex justify-center border px-[100px] pt-[100px]`}>
            <div className={`flex flex-row items-center justify-center gap-[100px] px-5 border`}>
                <Image
                    src="/logos_react.png"
                    width={100}
                    height={100}
                    alt="React Logo"
                />
                <Image
                    src="/devicon_tailwindcss.png"
                    width={100}
                    height={100}
                    alt="Tailwind Logo"
                />
                <Image
                    src="/logos_nextjs.png"
                    width={100}
                    height={`50`}
                    alt="Next.js Logo"
                />
                <Image
                    src="/devicon-plain_java-wordmark.png"
                    width={100}
                    height={`50`}
                    alt="Java Logo"
                />
            </div>
        </section>
    );
}