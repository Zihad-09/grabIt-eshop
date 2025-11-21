import React, { useState } from "react";
import useData from "../../../../../../Hooks/useData";
import ProductCard from "../../../../../../Components/SharedComponent/ProductCard";

const ShopNow = () => {
  const { products, categorys } = useData();
  const [id, setId] = useState();
  const [width, setWidth] = useState();
  console.log(products);
  console.log(width);
  const handleclick = (id) => {
    setId(id);
  };

  const handleclickwidth = (w) => {
    setWidth(w);
  };

  const filterData = products.filter((p) => {
    const matchCategory = id ? p.categoryId == id : products;
    console.log(matchCategory);
    const matchWidth = width ? p.width == width : products;
    return matchCategory && matchWidth;
  });
  return (
    <div className="container justify-items-center mx-auto px-4 my-10">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">


    <div className="lg:col-span-3">
      <div className="border border-gray-200 p-3 mt-6 lg:mt-12">
        <p className="border-b border-gray-300 pb-2 mb-3 font-semibold">Category</p>

        {categorys.map((category) => (
          <div key={category.id}>
            <label className="flex gap-2 items-center cursor-pointer">
              <input
                type="checkbox"
                onChange={() => handleclick(category.id)}
              />
              {category.name}
            </label>
          </div>
        ))}

        <div className="border-gray-200 mt-6">
          <p className="border-b border-gray-300 pb-2 mb-3 font-semibold">Width</p>

          {[...new Set(products.map((p) => p.width))].map((width, idx) => (
            <div key={idx}>
              <label className="flex gap-2 items-center cursor-pointer">
                <input
                  type="checkbox"
                  onChange={() => handleclickwidth(width)}
                />
                {width}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>

    
    <div className="lg:col-span-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filterData.length > 0 ? (
          filterData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="flex justify-center items-center col-span-full">
            <p className="ct font-semibold text-xl py-12 text-center">
              No Product Available in this category
            </p>
          </div>
        )}
      </div>
    </div>

  </div>
</div>

  );
};

export default ShopNow;
