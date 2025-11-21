import React from "react";
import img1 from "../../../../../../../assets/image/about.png";
import img2 from "../../../../../../../assets/image/about-2.png";
import img3 from "../../../../../../../assets/image/about-3 (2).png";
import SectionHeading from "../../../../../../../Components/SharedComponent/SectionHeading";

const AboutHero = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        
       
        <div className="flex items-center flex-1 gap-3">
          <img className="w-40 sm:w-60 lg:w-80 rounded-md" src={img1} alt="About 1" />
          <div className="flex flex-col gap-4">
            <img className="w-40 sm:w-60 lg:w-80 rounded-md" src={img2} alt="About 2" />
            <img className="w-40 sm:w-60 lg:w-80 rounded-md" src={img3} alt="About 3" />
          </div>
        </div>

    
        <div className="flex-1 text-center lg:text-left">
          <SectionHeading heading={"Who "} colorHeading={"We Are ?"} />

          <h3 className="uppercase text-base sm:text-lg lg:text-xl font-medium mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe esse.
          </h3>
          <p className="ts mt-4 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod enim
            tenetur dicta illo libero natus omnis velit et magni nostrum
            quaerat, asperiores sed, quos nemo repudiandae, dolore eligendi
            suscipit laborum. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Quod enim tenetur dicta illo libero natus omnis velit et magni
            nostrum quaerat, asperiores sed, quos nemo repudiandae, dolore
            eligendi suscipit laborum. Lorem ipsum dolor sit, amet consectetu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
