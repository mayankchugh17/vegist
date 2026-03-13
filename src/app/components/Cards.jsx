import Image from "next/image";
function Cards() {  
    return (
        <div className="absolute w-full mt-10 md:top-270 z-50 flex flex-col md:flex-row justify-center items-center gap-6 mx-auto">
            <div className="bg-white p-8  flex text-center flex-col justify-center shadow-xl items-center rounded-lg px-15 md:px-30 gap-4">
                <Image src="/cards/1.webp" alt="Card 1" width={90} height={200} className="rounded-sm" />
                <h2 className="text-md md:text-2xl font-semibold ">Live wine function</h2>
                <p className="text-sm  md:text-xl font-normal text-gray-600 tracking-tight font-sans">Unlimited alcoholic drink</p>
            </div>
            <div className="bg-white p-8  flex text-center flex-col justify-center shadow-xl items-center rounded-lg px-15 md:px-30 gap-4">
                <Image src="/cards/2.webp" alt="Card 1" width={90} height={200} className="rounded-sm" />
                <h2 className="text-md md:text-2xl font-semibold">Book dinning table</h2>
                <p className="text-sm  md:text-xl font-normal text-gray-600 tracking-tight font-sans">Money back guarantee</p>
            </div>
            <div className="bg-white p-8  flex text-center flex-col justify-center shadow-xl items-center rounded-lg px-15 md:px-30 gap-4">
                <Image src="/cards/3.webp" alt="Card 1" width={90} height={200} className="rounded-sm" />
                <h2 className="text-md md:text-2xl font-semibold">Master chef dinner</h2>
                <p className="text-sm  md:text-xl font-normal text-gray-600 tracking-tight font-sans">Always available timing</p>
            </div>
            <div className="bg-white p-8  flex text-center flex-col justify-center shadow-xl items-center rounded-lg px-15 md:px-30 gap-4">
                <Image src="/cards/4.webp" alt="Card 1" width={90} height={200} className="rounded-sm" />
                <h2 className="text-md md:text-2xl font-semibold">Balanced diet food</h2>
                <p className="text-sm  md:text-xl font-normal text-gray-600 tracking-tight font-sans">Food Is an important parts</p>
            </div>
            {/* <Image src="/cards/2.webp" alt="Card 2" width={90} height={200} className="rounded-lg shadow-md" />
            <Image src="/cards/3.webp" alt="Card 3" width={90} height={200} className="rounded-lg shadow-md" />
            <Image src="/cards/4.webp" alt="Card 4" width={90} height={200} className="rounded-lg shadow-md" /> */}
        </div>
    )
};

export default Cards;