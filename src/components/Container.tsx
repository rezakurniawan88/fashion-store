import React from "react";
import ImageContainer from "../assets/homepage.jpg";

function Container() {
    return (
        <div className="homepage-container w-full flex items-center relative bg-blue-300">
            <div className="w-3/5 absolute flex bg-black h-full bg-opacity-10">
                {/* <h1 className="text-slate-50 font-bold text-4xl mt-4 ml-4">DISCOUNT UP TO 40% IN<br />SUMMER SALE</h1> */}
                {/* <button className="absolute bottom-0 right-0 mb-5 mr-5 px-5 py-3 bg-black text-white text-sm font-semibold hover:bg-white hover:border hover:border-black hover:text-black">Shop Now</button> */}
            </div>
            <img src={ImageContainer} alt="image" className="w-3/5" />
            <div className="text-container">
                <h1 className="text-4xl font-bold px-9 -mt-10">Discover the latest fashion trends, anytime, anywhere.</h1>
                <p className="px-9 mt-6 font-medium text-sm leading-6 text-slate-700">Shop from our curated collection of stylish clothing and accessories, and never miss a beat in the fashion world. With fast and reliable shipping, your new look is just a click away.</p>
                <button className="mt-5 ml-9 px-5 py-3 bg-black text-white text-sm font-semibold hover:bg-white hover:border hover:border-black hover:text-black">Shop Now</button>
            </div>
        </div>
    )
}

export default Container;