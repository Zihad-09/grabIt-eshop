import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const TopHeader = () => {
  return (
    <div className="bg-gray-200 w-full">
      <div
        className="container mx-auto px-4 lg:px-16 py-2 
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 items-center"
      >
        
        <div className="flex justify-center md:justify-start items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <IoCallOutline className="text-gray-700" />
            <p>0123456789</p>
          </div>
          <div className="flex items-center gap-1">
            <FaWhatsapp className="text-green-600" />
            <p>01234567689</p>
          </div>
        </div>

        <div className="text-center text-sm hidden md:block">
          Fastest online Shopping Center
        </div>

 
        <div className="flex sm:justify-end justify-center gap-3 items-center text-sm">
          <button className="hover:text-red-600 duration-300">Help</button>
          <button className="hover:text-red-600 duration-300">
            Track Order
          </button>
          <button className="hover:text-red-600 duration-300">English</button>
          <button className="hover:text-red-600 duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
