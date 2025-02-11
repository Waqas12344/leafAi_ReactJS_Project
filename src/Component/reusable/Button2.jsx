import React from 'react'

const Button2 = (props) => {
    return (
        <button className='py-[14px] px-[30px] md:py-[16px] md:px-[34px]   text-[14px] md:text-[16px] text-[#317B22] border border-[#317B22] hover:bg-[#317B22] hover:text-[#ffffff] rounded-[7px]'>
            {props.name}
        </button>
    )
}

export default Button2