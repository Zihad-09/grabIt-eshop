import React from "react";
import useData from "../../Hooks/useData";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";

const SingleProductPage = () => {
  const { id } = useParams();
  const { products } = useData();
  const findProducts = products?.find((p) => p.id == id);
  return (
    <div>
      <div>
        <div className="flex p-10 items-center gap-4 justify-center">
          <img className="w-85 h-90" src={findProducts?.image} alt="" />
          <div>
            <p className="ts">{findProducts?.categoryName}</p>
            <h3 className="text-3xl font-semibold">{findProducts?.name}</h3>
            <div className="flex items-center gap-10">
              <div className="flex gap-1 py-2 text-orange-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="ts">Total Rating :{findProducts?.ratings}</div>
            </div>
            <div className="font-semibold text-lg mt-4"> Price : $ {findProducts?.price}</div>
            <div className="ts mt-1">Mrp : $ <span className="line-through"> {findProducts?.mrp}</span></div>
            <div className="ct mt-4">{findProducts?.description}</div>
            <div> SKU : <span className="ts">{findProducts?.sku}</span></div>
            <div> STOCK : <span className="ts">{findProducts?.stock}</span> </div>
            <div> CLOSURE : <span className="ts">{findProducts?.closure}</span></div>
            <div className="flex gap-2 items-center mt-1">
                <p className="text-l mr-2"> Size : </p>
                {findProducts?.weightOptions.map(w=>(
                    <div className="btn text-xs ts" >
                        <p><span> {w}</span></p>
                    </div>
                ))}
            </div>
            <div className="flex gap-2 my-4 items-center">
                <div className="flex gap-4 border border-gray-200 px-8 py-2 rounded-md">
                    <p>+</p>
                    <p>1</p>
                    <p>-</p>
                </div>
                <button className="btn bcp text-white">Add to card</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;


