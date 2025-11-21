
import React from 'react';
import bghero from '../../../../../../../assets/image/bghero.jpg';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <div className="my-10">
      <div
        style={{ backgroundImage: `url(${bghero})` }}
        className="bg-cover bg-center rounded-md 
                   container mx-auto h-[400px] sm:h-[500px] lg:h-[700px] 
                   px-6 sm:px-12 lg:px-24 flex items-center"
      >
        <div className="flex flex-col gap-4 sm:gap-6 text-center sm:text-left w-full sm:w-2/3">
          <h3 className="cp text-xl sm:text-2xl lg:text-3xl font-semibold">
            30% Off For This Winter
          </h3>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            Biggest sale for <br /> Man & Woman
          </h3>
          <Link to="/shop">
            <button className="btn bcp text-white w-auto px-6 py-2 
                               hover:scale-110 transition-all duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
