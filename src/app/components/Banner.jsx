import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex flex-col gap-3 md:gap-0 md:flex-row relative w-full mt-10 md:mt-20">
      <Image
        src="/banner/1.webp"
        alt="Banner Image"
        width={600}
        height={200}
        className="px-3 md:px-0 w-full h-full md:w-1/4 object-cover"
      />
      {/* <Image
          src="/banner/2.webp"
          alt="Banner Image"
          width={600}
          height={200}
          className="px-3 md:px-0 w-full h-full md:w-1/4 object-cover"
        /> */}

      {/* Background Image */}
      <div className="relative px-3 md:px-0 w-full h-full md:w-1/4">
        <Image
          src="/banner/2.webp"
          alt="food"
          width={600}
          height={200}
          className="object-cover"
        />

        {/* Text Content */}
        <div className="absolute gap-5 inset-0 flex flex-col items-center justify-center text-center px-10 md:px-30 leading-loose">
          <p className="text-[#CD7752] font-semibold tracking-widest font-bold">
            BREAKFAST TIME
          </p>

          <h2 className="text-3xl md:text-4xl text-gray-700 flex flex-col justify-center items-center gap-3">
            <span className="font-bold ">We deliver</span>
            <span>Italian food your door</span>
          </h2>
        </div>
      </div>
      {/* 
      <div className="relative ">
        <div className="flex flex-col justify-center text-center items-center">
          <h2 className="text-[#CD7752] text-xl font-semibold ">
            BREAKFAST TIME
          </h2>
          <h1 className="text-4xl "><span className="font-bold">We deliver</span> Italian food your door</h1>
        </div>
        <Image
          src="/banner/2.webp"
          alt="Banner Image"
          width={600}
          height={200}
          className="px-3 md:px-0 rounded-2xl md:rounded-none w-full h-full md:w-1/4 object-cover"
        />
      </div> */}
      <Image
        src="/banner/3.webp"
        alt="Banner Image"
        width={600}
        height={200}
        className="px-3 md:px-0 w-full h-full md:w-1/4 object-cover"
      />

      <Image
        src="/banner/4.webp"
        alt="Banner Image"
        width={600}
        height={200}
        className="px-3 md:px-0 w-full h-full md:w-1/4 object-cover"
      />
    </div>
  );
}
