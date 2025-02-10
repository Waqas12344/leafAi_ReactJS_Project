import React from 'react'

const Image = (props) => {
  return (
    <div
                        className="hidden lg:block  rounded-full bg-[#ffffff] p-2 lg:p-5">
                        <img src={props.name} className="w-5 h-5  lg:w-10 lg:h-10" />
                    </div>
  )
}

export default Image