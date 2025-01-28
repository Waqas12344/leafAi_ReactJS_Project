import React, {  useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { works } from "../constant";
import { workImg } from "../assets";
import { IoIosArrowForward } from "react-icons/io";

const Work = () => {
  const [activeWorkId, setActiveWorkId] = useState(works[0].id);  
const handleWorkClick = (id) => {
  setActiveWorkId(id);
};
  return (
    <div className="w-full lg:max-w-[1260px] mx-auto my-12 px-5">
 
      <div className="flex flex-col items-center justify-center mb-12">
        <h2 className="font-bold text-4xl lg:text-5xl">How it Works</h2>
        <p className="text-lg text-[#6D6D6D] w-full lg:w-[40%] text-center opacity-60">
          Discover the power of intelligent search across your entire digital workspace.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">    
        <div className="lg:w-[45%] flex flex-col gap-6">
          {works.map((work) => (
            <div
              key={work.id}
             
              className={`flex justify-between items-center p-5 border border-gray-300 rounded-2xl opacity-70 hover:opacity-100 transition cursor-pointer ${
                activeWorkId === work.id ? "bg-[#368E22] text-white opacity-100" : ""
              }`}
            >
            <div>
            <h4 className="text-3xl lg:text-4xl">{work.title}</h4>
          {activeWorkId === work.id ? (  <p className="mt-2 text-[#D0D0D0] text-lg">{work.subdescrip}</p>):("")    }
            </div>
              <div
                className={`w-[46px] h-[46px] rounded-full flex items-center justify-center transition-transform ${
                  activeWorkId === work.id ? "rotate-90" : "rotate-0"
                }`}
              >
                <button className="text-white bg-[#368E22] p-2 rounded-full text-2xl"   onClick={() => handleWorkClick(work.id)}>
                <IoIosArrowForward />
                </button>
              </div>
            </div>
          ))}
        </div>

     
        <div className="lg:w-[55%] flex flex-col gap-12">
          {works.map((work) => (
            activeWorkId === work.id && (
              <div key={work.id}>
                <h4 className="text-3xl lg:text-4xl font-bold mb-4">{work.title}</h4>
                <p className="text-[#6D6D6D] text-2xl/[38px]">
                  {work.descrip}
                </p>
                <button className="mt-4 w-[165px] h-[56px] bg-[#317B22] text-[16px] text-white rounded-lg hover:bg-[#265A19] transition">
                  Get Started
                </button>
              </div>
            )
          ))}
          <div>
            <img src={workImg} alt="Work Example" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
