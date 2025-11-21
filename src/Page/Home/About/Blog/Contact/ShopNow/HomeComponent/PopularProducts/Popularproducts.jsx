import React, { useState } from "react";
import SectionHeading from "../../../../../../../../Components/SharedComponent/SectionHeading";
import useData from "../../../../../../../../Hooks/useData";
import ProductCard from "../../../../../../../../Components/SharedComponent/Productcard";
import { TbCategory2 } from "react-icons/tb";
import { Link } from "react-router";

const Popularproducts = () => {
  const { categorys, products } = useData();
  console.log(categorys, products);
  const [categoryId, setcategoryId] = useState();
  const handelCategoryId = (id) => {
    setcategoryId(id);
  };
  const filterProduct = categoryId
    ? products.filter((p) => p.categoryId == categoryId)
    : products;
  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Left Section Heading */}
          <SectionHeading
            heading={"Popular"}
            colorHeading={"Products"}
            discription={"Shop Online for new arrival and get free shipping"}
          ></SectionHeading>

          {/* Right Categories */}
          <div className="flex flex-wrap gap-4 lg:gap-8 justify-center">
            {categorys.map((category) => (
              <div key={category?.id}>
                <p
                  onClick={() => handelCategoryId(category?.id)}
                  className="cursor-pointer"
                >
                  {category?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div
          className="container overflow-hidden mx-auto 
      grid 
      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
      justify-items-center gap-6 my-8"
        >
          {filterProduct
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 8)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Link to={"/Blog"}>
          <div className="flex items-center gap-2 cursor-pointer bcp px-10 py-3 font-lg rounded-md w-57 text-white">
            <TbCategory2 /> View All Products
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Popularproducts;
