
import React from 'react';
import bgImg from "../../../../../../../assets/image/execulisive-colloction.jpg";

const LatestExclusive = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-24">
      <div
        className="h-[40vh] sm:h-[50vh] lg:h-[60vh] 
                   container mx-auto rounded-md bg-cover bg-center px-4 sm:px-8 lg:px-16"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="flex flex-col items-end justify-center h-full gap-4 sm:gap-6 text-white text-right">
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            30% off sale
          </p>
          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-snug">
            Latest Exclusive <br /> summer collection
          </h3>
          <button className="bcp py-2 px-6 rounded-md text-sm sm:text-base lg:text-lg hover:scale-105 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestExclusive;
