import React from 'react';
import img1 from '../../../../../../../assets/image/12.jpg';
import img2 from '../../../../../../../assets/image/13.jpg';
import img3 from '../../../../../../../assets/image/14.jpg';
import { Link } from 'react-router';

const Collection = () => {
  return (
    <div className="my-10">
      <div className="container mx-auto px-4 
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                      gap-6">
        
       
        <div
          className="flex flex-col items-end px-6 py-10 
                     rounded-md bg-cover bg-center h-64 sm:h-80 lg:h-96"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <h3 className="text-end text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
            Women's <br /> Collection
          </h3>
          <Link to="/Shop">
            <button className="btn shadow-none bcp mt-4">Shop Now</button>
          </Link>
        </div>

       
        <div
          className="flex flex-col items-end px-6 py-10 
                     rounded-md bg-cover bg-center h-64 sm:h-80 lg:h-96"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <h3 className="text-end text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
            Children's <br /> Collection
          </h3>
          <Link to="/Shop">
            <button className="btn shadow-none bcp mt-4">Shop Now</button>
          </Link>
        </div>

      
        <div
          className="flex flex-col items-end px-6 py-10 
                     rounded-md bg-cover bg-center h-64 sm:h-80 lg:h-96"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <h3 className="text-end text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
            Men's <br /> Collection
          </h3>
          <Link to="/Shop">
            <button className="btn shadow-none bcp mt-4">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collection;
