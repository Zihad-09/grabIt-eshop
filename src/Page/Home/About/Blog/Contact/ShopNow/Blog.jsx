import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="container mx-auto my-10 px-4 space-y-12">
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            className="w-full md:w-64 rounded-md object-cover"
            src={"/src/assets/image/perfume-6223754_1280.jpg"}
            alt="Perfume"
          />
          <p className="text-justify">
            <span className="text-3xl font-semibold cp">Perfume</span> is more
            than just a fragrance-it is a reflection of personality and mood...
          </p>
        </div>

     
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            className="w-full md:w-72 md:h-[400px] rounded-md object-cover"
            src={"/src/assets/image/Women dress.jpg"}
            alt="Women Dress"
          />
          <p className="text-justify">
            <span className="text-3xl font-semibold cp">Women's</span> dresses
            are more than just clothing – they are a statement of style...
          </p>
        </div>

    
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            className="w-full md:w-72 md:h-[400px] rounded-md object-cover"
            src={"/src/assets/image/Kid dress.jpg"}
            alt="Kid Dress"
          />
          <p className="text-justify">
            <span className="text-3xl font-semibold cp">Children’s</span>{" "}
            dresses are designed not only for style but also for comfort...
          </p>
        </div>

      
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            className="w-full md:w-72 md:h-[400px] rounded-md object-cover"
            src={"/src/assets/image/Man dress.jpg"}
            alt="Men Dress"
          />
          <p className="text-justify">
            <span className="text-3xl font-semibold cp">Men’s</span> dresses and
            outfits are a reflection of personality, confidence...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
