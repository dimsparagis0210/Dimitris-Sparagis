export const Scrollbar = () => {
    return (
        <>
            <section className={`flex flex-col items-center border py-[50px]`}>
                <div
                    className={`flex flex-1 items-start justify-center w-[65%] bg-white rounded-full pt-[20px]`}>
                    <div className={`bg-gray-500 w-[75%] h-[70%] rounded-full`}></div>
                </div>
                <div className={`flex py-7`}>
                    <p className={`textColorPrimary rotate-[90deg]`}>
                        Scroll
                    </p>
                </div>
                <div className={`flex flex-1 items-start justify-center w-[65%] bg-white rounded-full`}>
                    <div className={`bg-gray-500`}></div>
                </div>
            </section>
        </>
    );
}