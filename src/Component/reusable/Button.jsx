import React from 'react'

const Button = (props) => {
    return (
        <button className='py-[14px] px-[30px] md:py-[16px] md:px-[34px]   bg-[#317B22]  text-[14px] md:text-[16px] text-[#FFFFFF] rounded-[7px] hover:bg-[#196f07]'>
            {props.name}
        
        </button>
    )
}

export default Button