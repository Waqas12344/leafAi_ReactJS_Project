import React from "react";
import { docImg, pdfImg, pptImg, xlsImg, xmlImg, bgImg, logo1 } from "../assets";

const About = () => {
  return (
    <div className="w-full lg:max-w-[1260px] mx-auto p-6">
      {/* About Us Section */}
      <div className="flex flex-col lg:flex-row w-full items-center gap-6 mb-12">
        <div className="w-full text-center lg:w-[35%]">
          <h2 className="text-2xl lg:text-5xl font-bold text-[#010205]">About Us</h2>
        </div>
        <div className="w-full lg:w-[65%]">
          <p className="text-base lg:text-lg text-[#6D6D6D] leading-relaxed">
            LeafAI Search sprouted from a simple idea: make enterprise knowledge
            as easy to find as a Google search. We're a team of AI enthusiasts,
            search experts, and UX designers on a mission to revolutionize how
            organizations discover and utilize their collective knowledge.
          </p>
        </div>
      </div>

     
      <div className="flex flex-col lg:flex-row gap-6">
        {/* First Section */}
        <div
          className="flex flex-col justify-center items-center bg-cover bg-center rounded-2xl p-6"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <h2 className="text-[84px] font-bold text-white">
            920<span className="text-[#368E22]">+</span>
          </h2>
          <p className="text-lg text-[#878C91]">Softwares Support</p>
          <div className="flex gap-4 items-center mt-10">
            {[pptImg, xmlImg, xlsImg, pdfImg].map((img, index) => (
              <div
                key={index}
                className="rounded-full bg-white flex items-center justify-center w-14 h-14"
              >
                <img src={img} className="w-10 h-10" />
              </div>
            ))}
            <span className="text-6xl text-white">+</span>
          </div>
        </div>
 
        <div className="flex-1 bg-[#90DE7826] rounded-2xl p-8 flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
          
            <div className="flex gap-4">
             
              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="bg-white p-5 rounded-2xl">
                  <img src={pptImg} className="w-10 h-10" />
                </div>
                <div className="bg-white p-5 rounded-2xl">
                  <img src={docImg} className="w-10 h-10" />
                </div>
              </div>
              
              <div className="flex flex-col gap-4 items-center">
                {[xlsImg, pdfImg, xmlImg].map((img, index) => (
                  <div key={index} className="bg-white p-5 rounded-2xl">
                    <img src={img} className="w-12 h-12" />
                  </div>
                ))}
              </div>
            
              <div className="flex flex-col gap-4 justify-center items-center">
                {[docImg, pptImg].map((img, index) => (
                  <div key={index} className="bg-white p-5 rounded-2xl">
                    <img src={img} className="w-12 h-12" />
                  </div>
                ))}
              </div>
            </div>
 
            <div className="bg-white p-5 rounded-2xl flex items-center justify-center">
              <img src={logo1} alt="Logo" className="w-12 h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
