import React, { useState } from "react";
import { annualPlans, plans } from "../constant";

const Pricing = () => {
  const [billingType,setBillingType] =useState("monthly")


  const activePlan = billingType === "monthly" ? plans: annualPlans;
  return (
    <div className="w-full lg:max-w-[1260px] mx-auto ">
      <div className="flex flex-col items-center justify-center mt-[90px] mb-[70px]">
        <h2 className="text-4xl lg:text-[48px] text-black font-[Outfit] font-[700] leading-[75px]  ">Pricing Plans</h2>
        <p className="text-base lg:text-lg leading-[32px] text-[#6D6D6D] w-[60%] md:w-[40%] text-center mt-4">
          Discover the power of intelligent search across your entire digital workspace.
        </p>
        <div className="rounded-[62px] bg-[#D9D9D926] flex mt-[32px] p-[6px] border-1 border-[#D9D9D9]">
        <button
            className={`text-sm lg:text-base px-5 py-2 rounded-[46px] font-medium transition ${
              billingType === "monthly" ? "text-black bg-white" : "text-gray-600"
            }`}
            onClick={() => setBillingType("monthly")}
          >
            Monthly billing
          </button>
          <button
            className={`text-sm lg:text-base px-5 py-2 rounded-3xl font-medium transition ${
              billingType === "annual" ? "text-black bg-white" : "text-gray-600"
            }`}
            onClick={() => setBillingType("annual")}
          >
            Annual billing
          </button>
        </div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[46px] px-6 lg:px-24">
        {activePlan.map((plan, index) => (
          <div
            key={index}
            className="bg-white flex flex-col justify-between rounded-2xl shadow-md hover:shadow-lg transition-shadow  min-h-[471px]"
          >
           
            <div className="text-center mt-[34px]">
              <span className="text-xs lg:text-sm uppercase bg-[#e3f4e0] px-4 py-1 rounded-2xl text-[#51ad3f] font-semibold">
                {plan.name}
              </span>
            </div>
 
            <div className="text-center text-2xl lg:text-3xl font-bold mt-[26px]">{plan.price}</div>
            <p className="text-center text-black mt-[7px]">Up to 2 models free forever</p>
            <ul className="text-gray-600 mt-[28px] mx-[36px]">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center mt-[15px]">
                  <span className="text-green-700 mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className=" text-black hover:bg-[#317B22] hover:text-white border border-gray-400  rounded-[7px] font-medium mt-[40px] mx-[18px] mb-[21px] min-h-[56px]">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
