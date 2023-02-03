import React, { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleNavbar() {
        setIsOpen(!isOpen);
    };

    console.log(isOpen);

    return (
        <>
            <nav className="flex justify-between items-center px-10 py-4 border-b-[1px]">
                <h1 className="header-title font-bold text-xl">ROW.CO</h1>
                <ul className="hidden sm:flex gap-6 font-semibold">
                    <li className="hover:border-b-2 hover:border-black cursor-pointer">Home</li>
                    <li className="hover:border-b-2 hover:border-black cursor-pointer">Man</li>
                    <li className="hover:border-b-2 hover:border-black cursor-pointer">Women</li>
                    <li className="hover:border-b-2 hover:border-black cursor-pointer">Kids</li>
                    <li className="hover:border-b-2 hover:border-black cursor-pointer">Promo</li>
                </ul>
                <div className="flex gap-3">
                    <div>
                        <button className="p-3 mr-1 rounded-full hover:bg-slate-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                        </button>
                        {/* <button className="p-3 mr-1 rounded-full hover:bg-slate-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                        </button> */}
                        <button className="p-3 rounded-full hover:bg-slate-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                        </button>
                        {/* <button className="p-3 rounded-full hover:bg-slate-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                        </button> */}
                    </div>
                    <button onClick={toggleNavbar} className="md:hidden p-3 rounded-full hover:bg-slate-100 z-40">
                        {isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /></svg>)}
                    </button>
                    {/* <button className="hidden sm:block bg-slate-900 text-white text-sm font-semibold px-6 hover:bg-white hover:border hover:border-black hover:text-black">Sign In</button> */}
                </div>
            </nav>
            <nav className={isOpen ? "navbar-overlay show-navbar z-30" : "navbar-overlay"}>
                <ul className="menu-list w-full h-full flex flex-col justify-center items-center gap-7">
                    <li className="font-bold text-center">Home</li>
                    <li className="font-bold text-center">Man</li>
                    <li className="font-bold text-center">Women</li>
                    <li className="font-bold text-center">Kids</li>
                    <li className="font-bold text-center">Promo</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar