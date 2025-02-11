import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full lg:max-w-[1260px] mx-auto my-[74px] ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">LeafAI</h3>
          <p className="text-gray-600 text-lg mt-[18px]">
            We use multi-mic and echo cancellation technology so that everyone can use devices.
          </p>
          <div className="flex gap-4 mt-[34px]">
            <a 
              href="#" 
              className="p-2 border border-[#368E22] text-[#368E22] rounded-full hover:bg-[#368E22] hover:text-white transition">
              <FaFacebookF />
            </a>
            <a 
              href="#" 
              className="p-2 border border-[#368E22] text-[#368E22] rounded-full hover:bg-[#368E22] hover:text-white transition">
              <IoLogoInstagram />
            </a>
            <a 
              href="#" 
              className="p-2 border border-[#368E22] text-[#368E22] rounded-full hover:bg-[#368E22] hover:text-white transition">
              <FaTwitter />
            </a>
            <a 
              href="#" 
              className="p-2 border border-[#368E22] text-[#368E22] rounded-full hover:bg-[#368E22] hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        
        <div className="col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-8">
       
          <div>
            <h4 className="text-xl font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="mt-[31px]"><a href="#" className="hover:underline ">Features</a></li>
              <li className="mt-[31px]"><a href="#" className="hover:underline ">Pricing</a></li>
              <li className="mt-[31px]"><a href="#" className="hover:underline ">Login</a></li>
            </ul>
          </div>

      
          <div>
            <h4 className="text-xl font-bold mb-4">Our Products</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="mt-[31px]"><a href="#" className="hover:underline ">Terms of Use</a></li>
              <li className="mt-[31px]"><a href="#" className="hover:underline ">Privacy Policy</a></li>
              <li className="mt-[31px]"><a href="#" className="hover:underline ">Legal Notice</a></li>
            </ul>
          </div>

       
          <div>
            <h4 className="text-xl font-bold mb-4">Media</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="mt-[31px]"><a href="#" className="hover:underline  ">Feedback</a></li>
              <li className="mt-[31px]"><a href="#" className="hover:underline ">Privacy Policy</a></li>
              <li className="mt-[31px]"><a href="#" className="hover:underline ">Legal Notice</a></li>
            </ul>
          </div>
 
          <div>
            <h4 className="text-xl font-bold mb-4">Privacy</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="mt-[31px]"><a href="#" className="hover:underline ">Feedback</a></li>
              <li className="mt-[31px]"><a href="#" className="hover:underline ">Privacy Policy</a></li>
              <li className="mt-[31px]"><a href="#" className="hover:underline ">Legal Notice</a></li>
            </ul>
          </div>
        </div>
      </div>
 
      <div className="text-center text-sm text-gray-500 mt-[80px]">
        Copyright LeafAI.com, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
