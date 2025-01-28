import React from "react";
import { Feature } from "../constant";

const Features = () => {
  return (
    <div className="w-full   mx-auto p-6">
    
      <div className="flex flex-col w-full items-center justify-center mb-12">
        <h2 className="font-bold text-4xl lg:text-5xl">Our Features</h2>
        <p className="text-base lg:text-lg text-[#6D6D6D] w-full lg:w-[40%] text-center opacity-60 mt-4">
          Discover the power of intelligent search across your entire digital workspace.
        </p>
      </div>

  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Feature.map((features) => (
          <div
            key={features.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
        
            <div className="flex bg-[#EFF4ED] w-[70px] h-[70px] rounded-full items-center justify-center mb-5">
              <div className="bg-green-700 w-5 h-5 rounded-full"></div>
            </div>
 
            <h3 className="text-xl font-semibold mb-5">{features.title}</h3>
            <p className="text-sm lg:text-base text-[#6D6D6D] mb-5">{features.para}</p>
            <a href="#" className="text-sm lg:text-base font-medium text-green-700">
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
