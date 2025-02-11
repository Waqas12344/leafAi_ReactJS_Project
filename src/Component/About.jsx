import React from "react";
import { docImg, pdfImg, pptImg, xlsImg, xmlImg, bgImg, logo1, vector } from "../assets";

const About = () => {
  return (
    <div className="w-full lg:max-w-[1260px] mx-auto ">
      {/* About Us Section */}
      <div className="flex flex-col md:flex-row   items-center  mb-[72px] pt-[104px] " >
      <div className="w-[100%] md:w-[30%]">
      <div className="w-full mr-[100px] lg:mr-[205px]">
          <h2 className=" text-2xl lg:text-5xl font-bold text-[#010205]">About Us</h2>
        </div>
      </div>
      
       <div className="w-[100%] md:w-[70%]">
       <div className="w-full">
          <p className="text-base lg:text-lg text-[#6D6D6D] leading-relaxed">
            LeafAI Search sprouted from a simple idea: make enterprise knowledge
            as easy to find as a Google search. We're a team of AI enthusiasts,
            search experts, and UX designers on a mission to revolutionize how
            organizations discover and utilize their collective knowledge.
          </p>
        </div>
       </div>
      </div>

     
      <div className="flex flex-col md:flex-row gap-[24px] ">
        {/* First Section */}
        <div
          className="flex flex-col bg-cover bg-center rounded-2xl py-[20px] px-[20px] lg:px-[35px] "
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <h2 className="text-[50px] lg:text-[84px] font-[700] text-white  ">
            920<span className="text-[#368E22]">+</span>
          </h2>
          <p className="text-base  lg:text-lg text-[#878C91]   ">Softwares Support</p>
          <div className="flex gap-8 md:gap-[7px] items-center mt-[104px]   ">
            {[pptImg, xmlImg, xlsImg, pdfImg].map((img, index) => (
              <div
                key={index}
                className="rounded-full bg-white flex  items-center justify-center w-20 h-20 md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px]"
              >
                <img src={img}  width='35px' height={'35px'} />
              </div>
            ))}
            <span className="text-6xl text-white">+</span>
          </div>
        </div>
 
        <div className="hidden flex-1 bg-[#90DE7826] rounded-2xl   flex-col gap-6  md:block">
          <div className="flex items-center justify-center gap-4 md:m-[20px] lg:m-[54px]">
          
            <div className="flex gap-[16px]">
             
              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="bg-white p-3 rounded-[30px]">
                  <img src={pptImg} className="w-10 h-10" />
                </div>
                <div className="bg-white p-3 rounded-[30px]">
                  <img src={docImg} className="w-10 h-10" />
                </div>
              </div>
              
              <div className="flex flex-col gap-4 items-center">
                {[xlsImg, pdfImg, xmlImg].map((img, index) => (
                  <div key={index} className="bg-white p-3 rounded-[30px]">
                    <img src={img} className="w-12 h-12" />
                  </div>
                ))}
              </div>
            
              <div className="flex flex-col gap-4 justify-center items-center">
                {[docImg, pptImg].map((img, index) => (
                  <div key={index} className="bg-white p-3 rounded-[30px]">
                    <img src={img} className="w-12 h-12" />
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-50 lg:w-auto">
              <img src={vector} alt="" />
            </div>
 
            <div className="bg-white p-3 rounded-[30px] flex items-center justify-center">
              <img src={logo1} alt="Logo" className="w-12 h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
