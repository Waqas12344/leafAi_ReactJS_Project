import React from 'react'
import { docImg, pdfImg, pptImg, txtImg, xlsImg, xmlImg } from '../assets'
import { TbVirus } from 'react-icons/tb'

const HeroSection = () => {
    return (
        <div className=" text-center w-full bg-gradient-to-b from-[#90DE7826] to-[#BBF9A826] p-5 my-10 ">
            <div className='flex justify-between items-center w-[90%] lg:w-[80%] py-2 mx-auto'>
                <div
                    className="  rounded-full bg-[#ffffff] p-2 lg:p-5">
                    <img src={xmlImg} className="w-5 h-5  lg:w-10 lg:h-10" />
                </div>
                <div
                    className=" flex justify-center bg-[#ffffff] text-[#000000] text-[10px] lg:text-base font-medium items-center rounded-full px-2 mx-2">
                    <TbVirus className='text-base' />
                    <p >AI-POWERED ENTERPRISE SEARCH FOR SEAMLESS INFORMATION DISCOVERY</p>
                </div>
                <div
                    className="  rounded-full bg-[#ffffff] p-2 lg:p-5">
                    <img src={pdfImg} className="w-5 h-5  lg:w-10 lg:h-10" />
                </div>
            </div>


            <div className='flex justify-between items-center lg:w-[95%] mx-auto '>
            <div className="  rounded-full bg-[#ffffff] p-2 lg:p-5">
                    <img src={txtImg} className="w-5 h-5  lg:w-10 lg:h-10" />
                </div>

                <div className= 'w-[70%] lg:w-[85%] items-center justify-center flex flex-col'>
                    <h1 className="text-2xl lg:text-6xl font-bold text-[#000000] ">
                        Unlock Your Organization's Knowledge with{' '}
                        <span className="text-[#368E22]">LeafAI</span> Search
                    </h1>

                    <p className="text-[#6D6D6D] mt-4 text-xs lg:text-xl/32px max-w-2xl text-center">
                        Discover the power of intelligent search across your entire digital workspace.
                        LeafAI Search connects Confluence, SharePoint, and all your documents into
                        one intuitive platform.
                    </p>
                </div>
                <div
                    className="  rounded-full bg-[#ffffff] p-2 lg:p-5">
                    <img src={docImg} className="w-5 h-5  lg:w-10 lg:h-10" />
                </div>
            </div>
            <div
                className='flex items-center  justify-between gap-2 w-[80%] mx-auto'>
              <div className="  rounded-full bg-[#ffffff] p-2 lg:p-5">
                    <img src={pptImg} className="w-5 h-5  lg:w-10 lg:h-10" />
                </div>
                <div className='flex gap-5 my-2 items-center'>
                    <button className='w-15 h-8  lg:w-40 lg:h-12 bg-[#317B22] text-[10px] lg:text-base text-[#FFFFFF] rounded-[7px]'>
                        Get Started
                    </button>
                    <button className='w-15 h-8  lg:w-40 lg:h-12 text-[10px] lg:text-base text-[#317B22] border border-[#317B22 ] rounded-[7px]'>
                        See Demo
                        </button>
                </div>
                <div className="  rounded-full bg-[#ffffff] p-2 lg:p-5">
                    <img src={xlsImg} className="w-5 h-5  lg:w-10 lg:h-10" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection