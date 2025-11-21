
import React from "react";
import SectionHeading from "../../../../../../../Components/SharedComponent/SectionHeading";
import Support from "./Support";

const AboutServices = () => {
  return (
    <div className="my-16 sm:my-20 lg:my-24 px-4 sm:px-6 lg:px-12">
      
      <div className="flex justify-center text-center mb-6">
        <SectionHeading
          heading={"Our"}
          colorHeading={"Services"}
          discription={
            "ipsum dolor sit, amet consectetu dicta illo libero natus omnis velit"
          }
        />
      </div>

    
      <div className="mt-8">
        <Support />
      </div>
    </div>
  );
};

export default AboutServices;

