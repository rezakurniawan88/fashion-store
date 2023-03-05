import React from "react";
import MenImage from "../assets/man.jpg";
import WomenImage from "../assets/women.jpg";
import KidsImage from "../assets/kids.jpg";

function Category() {
    return (
        <div className="category my-10">
            <div className="flex flex-col md:flex-row  gap-6 items-center justify-center w-full">
                <div className="w-3/4 md:w-[30%] h-[30rem] relative">
                    <img src={MenImage} alt="men-images" className="w-full h-full" />
                    <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center bg-black">
                        <h1 className="text-slate-50 text-4xl font-bold">Men</h1>
                    </div>
                </div>
                <div className="w-3/4 md:w-[30%] h-[30rem] relative">
                    <img src={WomenImage} alt="women-images" className="w-full h-full" />
                    <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center bg-black">
                        <h1 className="text-slate-50 text-4xl font-bold">Women</h1>
                    </div>
                </div>
                <div className="w-3/4 md:w-[30%] h-[30rem] relative">
                    <img src={KidsImage} alt="kids-images" className="w-full h-full" />
                    <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center bg-black">
                        <h1 className="text-slate-50 text-4xl font-bold">Kids</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category