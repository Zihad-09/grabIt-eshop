import React from "react";
import { FaStar } from "react-icons/fa";

import { TbCurrencyTaka } from "react-icons/tb";
import { NavLink } from "react-router";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div
      className="overflow-hidden w-full max-w-[250px] 
    flex flex-col justify-center items-center 
    border border-gray-200 rounded-md"
    >
      <img
        className="w-full h-48 object-contain cursor-pointer"
        src={product.image}
        alt={product.name}
      />

      <NavLink to={`/Shop/${product.id}`} className="w-full">
        <div className="p-3">
          <p className="text-gray-400 text-sm">{product.categoryname}</p>

          <h3 className="font-semibold text-base">{product.name}</h3>

          <div className="flex gap-1 py-2 text-orange-500 text-sm">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <div className="flex gap-3">
            <p className="cp flex items-center font-semibold">
              {product.price} <TbCurrencyTaka />
            </p>

            <p className="line-through flex items-center text-gray-500 text-sm">
              {product.mrp} <TbCurrencyTaka />
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductCard;
