import React from 'react'
import { keyFeatures } from '../constant'
import Button from './reusable/Button'

const KeyFeatures = () => {
    return (
        <div className='w-full flex flex-col my-[150px] '>
            <div className='flex flex-col md:flex-row w-full gap-5 my-5'>
                <div className='w-full md:w-1/2'>
                    <h2 className=' text-2xl lg:text-[48px] font-[700] font-[Outfit] w-[80%]'>Let's Explore our Top Key Features</h2>
                </div>
                <div className='w-full md:w-1/2 flex flex-col  gap-3'>
                    <p className='text-[#333333] text-[18px] opacity-[70%] w-[70%]'>LeafAI Search sprouted from a simple idea: make enterprise knowledge as easy to find as a Google search</p>
                   <div className='mt-[21px]'>
                   <Button name="Get Started" />
                   </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] items-center justify-center mt-[69px]">
  {keyFeatures.map((feature) => (
    <div
      key={feature.id}
      className="flex flex-col items-center justify-center border border-gray-300   rounded-[20px] "
    >
      <div className=" relative mt-[50px]">
<div className='w-[32px] h-[32px] bg-[#B7DBAF] rounded-full relative  top-1 left-2'></div>
<div className='absolute top-3  z-10'>
  <img src={feature.img} alt="" />
</div>
      </div>
      <h3 className="text-xl text-[#161C2D] text-center font-bold mt-[21px]">{feature.title}</h3>
      <p className="mt-[9px] mb-[36px] w-[70%] text-base text-[#161C2D] opacity-70 text-center">
        {feature.para}
      </p>
    </div>
  ))}
</div>


        </div>
    )
}

export default KeyFeatures