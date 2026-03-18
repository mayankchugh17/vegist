import Image from "next/image";
import "./cards.css"

function Cards() {
  return (
    <div className="w-full flex justify-center">
      
      {/* Wrapper to control overlap */}
      <div className="mt-20 md:-mt-28 z-10 w-full flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        
        <div className="bg-white p-8 flex text-center flex-col justify-center shadow-xl items-center rounded-lg px-10 md:px-20 gap-4">
          <Image src="/cards/1.webp" alt="Card 1" width={90} height={200} />
          <h2 className="text-md md:text-2xl font-semibold">Live wine function</h2>
          <p className="text-sm md:text-2xl text-gray-600">Unlimited alcoholic drink</p>
        </div>

        <div className="bg-white p-8 flex text-center flex-col justify-center shadow-xl items-center rounded-lg px-10 md:px-20 gap-4">
          <Image src="/cards/2.webp" alt="Card 2" width={90} height={200} />
          <h2 className="text-md md:text-2xl font-semibold">Book dinning table</h2>
          <p className="text-sm md:text-2xl text-gray-600">Money back guarantee</p>
        </div>

        <div className="bg-white p-8 flex text-center flex-col justify-center shadow-xl items-center rounded-lg px-10 md:px-20 gap-4">
          <Image src="/cards/3.webp" alt="Card 3" width={90} height={200} />
          <h2 className="text-md md:text-2xl font-semibold">Master chef dinner</h2>
          <p className="text-sm md:text-2xl text-gray-600">Always available timing</p>
        </div>

        <div className="bg-white p-8 flex text-center flex-col justify-center shadow-xl items-center rounded-lg px-10 md:px-20 gap-4">
          <Image src="/cards/4.webp" alt="Card 4" width={90} height={200} />
          <h2 className="text-md md:text-2xl font-semibold">Balanced diet food</h2>
          <p className="text-sm md:text-2xl text-gray-600">Food is an important part</p>
        </div>

      </div>
    </div>
  );
}

export default Cards;