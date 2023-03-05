import React from "react";
import ImageContainer from "../assets/homepage.webp";

function Container() {
    return (
        <div className="homepage-container w-full h-full items-center justify-center relative mb-8">
            <div className="w-full absolute flex flex-col justify-center ml-10 md:ml-20 h-full bg-opacity-50">
                <h1 className="text-xl md:text-4xl font-bold text-white">Discover 2023 Fashion Trends</h1>
                <p className="font-semibold text-xs text-white md:text-base leading-6 mt-1 mb-3 md:mt-3 md:mb-6">Your new look is just a click away.</p>
                <button className="flex gap-2 items-center justify-center bg-black w-28 md:w-36 py-3 text-white text-xs sm:text-sm font-semibold hover:bg-white hover:border hover:border-black hover:text-black">Shop Now
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                </button>
            </div>
            <img src={ImageContainer} alt="image" className="w-full" />
            {/* <div className="text-container">
                <h1 className="text-3xl md:text-4xl font-bold px-9 md:-mt-10 -mt-[21rem] text-white md:text-black">Discover the latest fashion trends, anytime, anywhere.</h1>
                <p className="px-9 mt-6 font-medium text-xs md:text-sm leading-6 text-slate-200 md:text-slate-700">Shop from our curated collection of stylish clothing and accessories, and never miss a beat in the fashion world. With fast and reliable shipping, your new look is just a click away.</p>
                <button className="mt-5 mb-10 ml-9 px-5 py-3 bg-black text-white text-xs sm:text-sm font-semibold hover:bg-white hover:border hover:border-black hover:text-black">Shop Now</button>
            </div> */}
        </div>
    )
}

export default Container;