import React from "react";
import { Feature } from "../constant";
import { arrowImg, unifiedSearch } from "../assets";

const Features = () => {
  return (
    <div className="w-full my-[110px]  mx-auto ">
    
      <div className="flex flex-col w-full items-center justify-center mb-12 ">
        <h2 className="font-[700] text-4xl leading-[76px] lg:text-5xl font-[Outfit]">Our Features</h2>
        <p className="text-base leading-[32px] lg:text-lg text-[#6D6D6D] w-full lg:w-[35%] text-center  font-[400] font-[Open_Sans]">
          Discover the power of intelligent search across your entire digital workspace.
        </p>
      </div>

  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[70px] gap-[45px] ">
        {Feature.map((features) => (
          <div
            key={features.id}
            className="bg-white p-[22px] rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
        
            <div className="flex bg-[#EFF4ED] w-[70px] h-[70px] rounded-full items-center justify-center  ">
              <div className="bg-[#EFF4ED] w-5 h-5 rounded-full">
                <img src={features.img} alt="" />
              </div>
            </div>
 
            <h3 className="text-xl font-semibold mt-[25px]">{features.title}</h3>
            <p className="text-sm lg:text-base text-[#6D6D6D] mt-[16px] mb-[28px]">{features.para}</p>
            <a href="#" className="text-sm flex gap-[10px] lg:text-[16px] font-[700] font-[Open_Sans] text-[#000000]">
              Learn more <span> <img src={arrowImg} alt="" /></span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
