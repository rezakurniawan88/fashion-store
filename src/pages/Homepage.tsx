import React from "react";
import Partners from "../components/Partners";
import Container from "../components/Container.js";
import ProductLists from "../components/ProductLists.js";

function Homepage() {
  return (
    <div className="homepage">
      <Container />
      <Partners />

      <div className="flex justify-between items-center mx-10 pt-8 pb-5 border-b-[1px]">
        <h1 className="text-2xl font-semibold">New Arrivals</h1>
        <h1>See all</h1>
      </div>
      <ProductLists />
    </div>
  )
}

export default Homepage;