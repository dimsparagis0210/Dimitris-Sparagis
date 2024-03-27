export const Skill = (props:{isDashed:boolean , title:string, skills:string[], id:number}) => {

    const skills:string = props.skills.join(", ");
    const isDashed = props.isDashed ?
        "border border-[2px] border-beige border-dashed" :
        "sm:ml-[100px] md:ml-[200px] 2xl:ml-[400px] 2xl:w-[100%]"
    ;

    return (
            <section
                className={`${isDashed} rounded-3xl
                    inline-flex items-center gap-[40px] py-5 px-2
                    3xs:py-2 3xs:px-3 3xs:gap-1
                    xs:ml-[1rem]
                    2xl:w-[70%]
                    `}>
                <section className={`2xl:ml-5 relative`}>
                    <div className={`bg-beige text-center rounded-3xl`}>
                        <p className={`text-white 
                                       sm:text-xl
                                       3xs:text-2xl 3xs:p-4 
                                       lg:text-4xl
                                       xl:text-6xl
                                       2xl:text-[4rem] 2xl:p-7
                                       `}
                        >
                            0{props.id}
                        </p>
                    </div>
                </section>
                <section className={`flex flex-col gap-2 p-4 rounded-2xl text-myBlack`}>
                    <h2 className={`3xs:text-2xl sm:text-3xl lg:text-4xl xl:text-6xl 2xl:text-6xl font-bold`}>{props.title}</h2>
                    <p className={`3xs:text-lg sm:text-xl lg:text-2xl xl:text-4xl 2xl:text-4xl`}>{skills}</p>
                </section>
            </section>
    );
}