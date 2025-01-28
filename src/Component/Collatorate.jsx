import React from 'react';

const Collaborate = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full   bg-gradient-to-b from-[#90DE7826] to-[#BBF9A826] py-16 px-12 my-12">
      <div>
        <h2 className="text-3xl lg:text-[48px] font-bold">Let's Collaborate With Us</h2>
        <p className="text-lg lg:text-2xl w-full lg:w-[80%] mt-4">
          Ready to revolutionize your organization's search experience?
        </p>
      </div>

      <div className="flex gap-4">
      <button className="mt-4 w-[165px] h-[56px] bg-[#317B22] text-[16px] text-white rounded-lg hover:bg-[#265A19] transition">
             Book a Demo
            </button>
            <button className="mt-4 w-[165px] h-[56px]  text-base border  text-[#317B22] rounded-lg hover:bg-[#265A19] transition">
             Request a Quote
            </button>
      </div>
    </div>
  );
};

export default Collaborate;
