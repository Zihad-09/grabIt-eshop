
import React from "react";
import SectionHeading from "../../../../../../../Components/SharedComponent/SectionHeading";
import useData from "../../../../../../../Hooks/useData";
import ProductCard from "../../../../../../../Components/SharedComponent/Productcard";

const NewProducts = () => {
  const { products } = useData();

  return (
    <div className="my-10">
      <div className="container mx-auto justify-items-center px-4">

        <SectionHeading
          discription={"Shop Online for new arrival and get free shipping"}
          heading={"Day of"}
          colorHeading={"The Deal"}
        />

        <div
          className="mt-8 grid gap-6 
                    grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
        >
          {products.slice(-4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
