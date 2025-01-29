import React from 'react'
import { keyFeatures } from '../constant'

const KeyFeatures = () => {
    return (
        <div className='w-full flex flex-col my-15 p-5'>
            <div className='flex flex-col md:flex-row w-full gap-5 my-5'>
                <div className='w-full md:w-1/2'>
                    <h2 className=' text-2xl lg:text-5xl font-bold w-[70%]'>Let's Explore our Top Key Features</h2>
                </div>
                <div className='w-full md:w-1/2 flex flex-col  gap-3'>
                    <p className='text-[#333333] text-[18px] opacity-[70%]'>LeafAI Search sprouted from a simple idea: make enterprise knowledge as easy to find as a Google search</p>
                    <button className='w-15 h-8  lg:w-40 lg:h-12 bg-[#317B22] text-[10px] lg:text-base text-[#FFFFFF] rounded-[7px]'>
                        Get Started
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center justify-center py-5 mx-auto">
  {keyFeatures.map((feature) => (
    <div
      key={feature.id}
      className="flex flex-col items-center justify-center border border-gray-500 md:w-[280px] h-[271px] rounded-[22px] "
    >
      <div className="w-[32px] h-[32px] bg-[#B7DBAF] rounded-full"></div>
      <h3 className="mt-4 text-xl text-[#161C2D] text-center font-bold ">{feature.title}</h3>
      <p className="mt-4 w-[70%] text-base text-[#161C2D] opacity-70 text-center">
        {feature.para}
      </p>
    </div>
  ))}
</div>


        </div>
    )
}

export default KeyFeatures