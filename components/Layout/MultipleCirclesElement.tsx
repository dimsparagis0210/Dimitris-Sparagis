

export const MultipleCirclesElement = () => {
    const element = <div className={`rounded-full bg-[#232323] aspect-square w-[2rem]`} />;
    const row = Array(7).fill(element);
    const container = Array(6).fill(<div className={'flex gap-2'}>{row}</div>);

    return (
        <section className={`bg-gradient-to-r from-black to-[#5E5C5C] absolute bottom-0 right-[-20px] flex flex-col gap-2`}>
            {container}
        </section>
    );
}