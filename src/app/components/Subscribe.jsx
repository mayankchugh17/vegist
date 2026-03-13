function Subscribe() {
  return (
    <div className="flex flex-col bg-white py-8 pb-15 md:pb-40 px-10 md:px-20 lg:px-40 items-center text-center gap-6 md:gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="tracking-widest text-[#CD7752] text-lg md:text-2xl">
          RECENT NEWS
        </h1>
        <h2 className="text-2xl md:text-5xl font-bold">Get the latest deals</h2>
      </div>

      <form className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto">
        <div className="flex items-center rounded-full overflow-hidden border border-gray-300">
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="flex-1 px-4 px-2 md:px-10 py-3 py-4 md:py-6 
      text-sm sm:text-base md:text-xl 
      bg-transparent outline-none text-gray-700 placeholder-gray-500"
          />

          <button
            type="submit"
            className="px-4 px-2 md:px-10 py-3 sm:py-4 md:py-6 
      text-sm sm:text-base md:text-lg 
      bg-[#CD7752] text-white font-semibold 
      hover:bg-[#b86546] transition"
          >
            SUBSCRIBE
          </button>
        </div>
      </form>
    </div>
  );
}

export default Subscribe;
