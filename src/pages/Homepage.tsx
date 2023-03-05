import React from "react";
import Partners from "../components/Partners";
import Container from "../components/Container.js";
import ProductLists from "../components/ProductLists.js";
import Category from "../components/Category";
import Footer from "../components/Footer";
import { newArrival, shoesData } from "../utils/data.js";

function Homepage() {
  return (
    <div className="homepage">
      <Container />

      <div className="flex justify-between items-center mx-10 pt-8 pb-5 border-b-[1px]">
        <h1 className="text-2xl font-semibold">New Arrivals</h1>
        <h1>See all</h1>
      </div>
      <ProductLists datas={newArrival} />

      <div className="flex justify-between items-center mx-10 pt-8 pb-5 border-b-[1px]">
        <h1 className="text-2xl font-semibold">Shoes</h1>
        <h1>See all</h1>
      </div>
      <ProductLists datas={shoesData} />
      <Category />
      {/* <Partners /> */}
      <Footer />

      <button className="fixed bottom-0 right-0 bg-slate-900 text-white rounded-full p-4 mr-5 mb-5 hover:bg-slate-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
      </button>
    </div>
  )
}

export default Homepage;