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
       <Image
          src="/banner/2.webp"
          alt="Banner Image"
          width={600}
          height={200}
          className="px-3 md:px-0 w-full h-full md:w-1/4 object-cover"
        />
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
