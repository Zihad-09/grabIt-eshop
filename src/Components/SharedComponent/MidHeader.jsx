import React from "react";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";

const MidHeader = () => {
  return (
    <div className="bg-white w-full shadow-sm">
      <div className="container mx-auto px-4 py-3 flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
        <img
          className="w-24 cursor-pointer"
          src="https://i.ibb.co.com/tp0nc8ST/logo.png"
          // src="../../assets/image/logo.png"
          alt="Logo"
        />

        <div className="flex-1 w-full md:w-auto">
          <label className="input input-bordered flex items-center gap-2 w-full md:w-[350px]">
            <svg
              className="h-[1.3em] opacity-50 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow"
              placeholder="Search products..."
              required
            />
          </label>
        </div>

        <div className="gap-4 hidden lg:flex text-sm">
          <div className="flex items-center gap-2 hover:text-[#EF233C] cursor-pointer duration-200">
            <CiUser className="text-3xl" />
            <div className="hidden lg:block leading-tight">
              <p className="text-xs text-gray-500">ACCOUNT</p>
              <p className="font-semibold">LOGIN</p>
            </div>
          </div>

          <div className="flex items-center gap-2 hover:text-[#EF233C] cursor-pointer duration-200">
            <CiHeart className="text-3xl" />
            <div className="hidden lg:block leading-tight">
              <p className="text-xs text-gray-500">Wishlist</p>
              <p className="font-semibold">3 ITEMS</p>
            </div>
          </div>

          <div className="flex items-center gap-2 hover:text-[#EF233C] cursor-pointer duration-200 relative">
            <CiShoppingCart className="text-3xl" />

            <div className="hidden lg:block leading-tight">
              <p className="text-xs text-gray-500">Cart</p>
              <p className="font-semibold">3 ITEMS</p>
            </div>

            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidHeader;
