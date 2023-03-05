import React from "react";

function ProductLists({ datas }) {
    return (
        <div className="flex gap-4 flex-wrap">
            {datas.map((data) => (
                <div className="card sm:w-1/5 w-2/5 my-8 ml-10">
                    <img src={data.image} alt={data.name} className="w-full sm:h-72" />
                    <div className="py-6 px-3">
                        <p className="font-semibold">{data.name}</p>
                        <p className="font-medium text-sm">{data.brand}</p>
                        <div className="flex justify-between mt-3">
                            <p className="line-through">{data.price}</p>
                            <p className="text-red-600 font-semibold animate-pulse">{data.afterDiscount}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductLists;