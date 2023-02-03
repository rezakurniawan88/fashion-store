import React from "react";
import NikeLogo from "../assets/nikelogo.png";
import AdidasLogo from "../assets/adidaslogo.png";
import PumaLogo from "../assets/pumalogo.png";
import DiorLogo from "../assets/diorlogo.png";

function Partners() {
    return (
        <div className="mt-20">
            <h1 className="text-2xl font-semibold text-center">Our Partners</h1>
            <div className="flex gap-16 justify-center items-center mb-20 mt-10">
                <img src={NikeLogo} alt="logo-nike" className="w-28 opacity-30" />
                <img src={AdidasLogo} alt="logo-adidas" className="w-44 opacity-30" />
                <img src={PumaLogo} alt="logo-puma" className="w-40 opacity-30" />
                <img src={DiorLogo} alt="logo-dior" className="w-40 opacity-30" />
            </div>
        </div>
    )
}

export default Partners