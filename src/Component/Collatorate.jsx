import React from 'react';
import Button from './reusable/Button';
import Button2 from './reusable/Button2';

const Collaborate = () => {
  return (
    <div className="flex flex-wrap  items-center w-full   bg-gradient-to-b from-[#90DE7826] to-[#BBF9A826] mt-[70px] md:mt-[156px] py-[70px]  md:py-[97px] md:px-[54px]">
      <div>
        <h2 className="text-3xl lg:text-[48px] font-bold">Let's Collaborate With Us</h2>
        <p className="text-lg lg:text-2xl w-full lg:w-[80%] mt-4">
          Ready to revolutionize your organization's search experience?
        </p>
      </div>

      <div className="flex gap-4 mt-[20px]">
   <Button name='Book a Demo' />
   <Button2 name='Request a Quote' />
           
      </div>
    </div>
  );
};

export default Collaborate;
