import React from "react";
import { plans } from "../constant";

const Pricing = () => {
  return (
    <div className="w-full lg:max-w-[1260px] mx-auto my-12">
      <div className="flex flex-col items-center justify-center mb-16">
        <h2 className="text-4xl lg:text-[48px] text-black font-bold">Pricing Plans</h2>
        <p className="text-base lg:text-lg text-[#6D6D6D] w-full lg:w-[35%] text-center mt-4">
          Discover the power of intelligent search across your entire digital workspace.
        </p>
        <div className="rounded-2xl bg-[#D9D9D9] flex mt-6 p-[2px] border-2 border-[#D9D9D9]">
          <button className="text-sm lg:text-base text-black bg-white px-5 py-2 rounded-2xl font-medium">
            Monthly billing
          </button>
          <button className="text-sm lg:text-base text-black px-5 py-2 font-medium">
            Annual billing
          </button>
        </div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-24">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white flex flex-col justify-between rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6"
          >
           
            <div className="text-center mb-6">
              <span className="text-xs lg:text-sm uppercase bg-[#e3f4e0] px-4 py-1 rounded-2xl text-[#51ad3f] font-semibold">
                {plan.name}
              </span>
            </div>
 
            <div className="text-center text-2xl lg:text-3xl font-bold mb-6">{plan.price}</div>
            <p className="text-center text-black mb-4">Up to 2 models free forever</p>
            <ul className="text-gray-600 mb-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center mb-2">
                  <span className="text-green-700 mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="w-full text-black hover:bg-green-600 hover:text-white border border-gray-400 px-6 py-3 rounded-lg font-medium mt-8">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
