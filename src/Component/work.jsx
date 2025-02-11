import React, { useState } from "react";
import { works } from "../constant";
import { workImg } from "../assets";
import { IoIosArrowForward } from "react-icons/io";
import Button from '../Component/reusable/Button'
const Work = () => {
  const [activeWorkId, setActiveWorkId] = useState(works[0].id);
  const handleWorkClick = (id) => {
    setActiveWorkId(id);
  };
  return (
    <div className="w-full lg:max-w-[1260px] mx-auto  ">

      <div className="flex flex-col items-center justify-center mb-12 ">
        <h2 className="font-[700] text-4xl lg:text-5xl mt-[48px] leading-[72px]">How it Works</h2>
        <p className="text-base md:text-lg leading-[32px] text-[#6D6D6D] w-[60%] md:w-[50%] text-center opacity-60">
          Discover the power of intelligent search across your entire digital workspace.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 my-[70px] pb-[70px] ">
        <div className="lg:w-[45%] flex flex-col gap-[14px]">
          {works.map((work) => (
            <div
              key={work.id}

              className={`flex justify-between items-center p-[20px] lg:p-[33px] border border-gray-300 rounded-[10px] opacity-60 hover:opacity-100 transition cursor-pointer ${activeWorkId === work.id ? "bg-[#368E22] text-white opacity-100" : ""
                }`}
            >
              <div>
                <h4 className="text-2xl lg:text-4xl">{work.title}</h4>
                {activeWorkId === work.id ? (<p className="mt-2  mr-3 text-[#D0D0D0]   text-base lg:text-lg">{work.subdescrip}</p>) : ("")}
              </div>
              <div
                className={`w-[46px] h-[46px] rounded-full flex items-center justify-center transition-transform ${activeWorkId === work.id ? "rotate-90" : "rotate-0"
                  }`}
              >
                <button className={`${activeWorkId === work.id ? "text-[#000000] bg-[#FFFFFF]" : "bg-[#368E22] text-white opacity-100"
                  } h-[46px] w-[46px] flex items-center justify-center rounded-full text-2xl`} onClick={() => handleWorkClick(work.id)}>
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          ))}
        </div>


        <div className="lg:w-[55%] flex flex-col  pt-[41px] px-[40px] pb-[20px] rounded-[15px] bg-[#FFFFFF] shadow-lg transition-shadow">
          {works.map((work) => (
            activeWorkId === work.id && (
              <div key={work.id}>
                <h4 className="text-3xl lg:text-4xl font-[700] ">{work.title}</h4>
                <p className="text-[#6D6D6D] text-2xl mt-[21px] leading-[32px]">
                  {work.descrip}
                </p>
                <div className='mt-[21px]' >

                  <Button name='Get Started' />
                </div>
              </div>
            )
          ))}
          <div>
            <img src={workImg} alt="Work Example" className="mt-[31px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
