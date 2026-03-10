function Tab({heading}) {
    return(
        <div className="tab">
            <h1 className="px-5 font-semibold text-2xl md:text-5xl text-center leading-tight">{heading}</h1>
            <div>
                <ul className="flex justify-center gap-18 mt-10">
                    <li className="text-gray-500 font-semibold hover:underline underline-offset-5 hover:text-[#CD7752] tracking-widest">STARTERS</li>
                    <span className="w-0.5 h-6 bg-gray-500"></span>
                    <li className="text-gray-500 font-semibold hover:underline underline-offset-5 hover:text-[#CD7752] tracking-widest">BREAKFAST</li>
                    <span className="w-0.5 h-6 bg-gray-500"></span>
                    <li className="text-gray-500 font-semibold hover:underline underline-offset-5 hover:text-[#CD7752] tracking-widest">DINNER</li>
                    <span className="w-0.5 h-6 bg-gray-500"></span>
                    <li className="text-gray-500 font-semibold hover:underline underline-offset-5 hover:text-[#CD7752] tracking-widest">LUNCH</li>
                </ul>
            </div>
            
        </div>
    )
}   

export default Tab; 