import React from 'react'
import { docImg, herobg, herobug, pdfImg, pptImg, txtImg, xlsImg, xmlImg } from '../assets'
import Button from './reusable/Button'
import Button2 from './reusable/Button2'
import Image from './reusable/Image'

const HeroSection = () => {
    return (
        <div className=" text-center w-full  bg-gradient-to-b from-[#90DE7826] to-[#BBF9A826] p-5 mt-[56px]  relative">
            <div className=" w-full flex absolute z-30 items-center justify-center lg:space-x-[438px] mt-[69px] mb-[95px] overflow-hidden">
                <img src={herobg} alt="hero" className='h-[390px] w-[370px]' />
                <img src={herobg} alt="hero" className='h-[390px] w-[370px] hidden md:block' />

            </div>

            <div className="flex flex-col relative z-10 w-full mt-[69px] mb-[95px] overflow-hidden">
                <div className='flex justify-center items-center mx-auto   md:gap-[112px]'>
                    {/* div 1  */}
                    <Image name={xmlImg} />

                    {/* div 2  */}

                    <div
                        className=" flex  gap-[10px] bg-[#ffffff] text-[#000000] text-[10px] lg:text-base font-medium items-center rounded-[47px]  mx-2 px-[10px] py-[8px]">
                        <img src={herobug} alt="" className='h-[16px] w-[16px] ' />
                        <p className='text-[7px] md:text-[12px] lg:text-[14px] font-[400] '>AI-POWERED ENTERPRISE SEARCH FOR SEAMLESS INFORMATION DISCOVERY</p>
                    </div>

                    {/* div 3 */}

                    <Image name={pdfImg} />

                </div>


                <div className='flex justify-between items-center lg:w-[95%] w-full md:mx-[40px] gap-[84px] '>
                    <Image name={txtImg} />

                    <div className=' lg:w-[85%] items-center justify-center w-full flex flex-col'>
                        <h1 className="text-2xl mt-[10px]  md:leading-[80px] lg:text-6xl font-[900] text-[#000000] font-[Overlock] text-center">
                            Unlock Your Organization's Knowledge with{' '}
                            <span className="text-[#368E22]">LeafAI</span> Search
                        </h1>

                        <p className="text-[#6D6D6D] mt-[12px] text-xs lg:text-xl font-[400] leading-[32px] max-w-2xl text-center font-[Overlock]">
                            Discover the power of intelligent search across your entire digital workspace.
                            LeafAI Search connects Confluence, SharePoint, and all your documents into
                            one intuitive platform.
                        </p>
                    </div>
                    <Image name={docImg} />
                </div>
                <div
                    className='flex items-center  justify-between gap-[214px]  mx-auto'>
                    <Image name={pptImg} />
                    <div className='flex gap-[24px] my-[23px] items-center'>
                        <Button name="Get Started" />
                        <Button2 name='See Demo' />
                    </div>
                    <Image name={xlsImg} />
                </div>
            </div>
        </div>
    )
}

export default HeroSection