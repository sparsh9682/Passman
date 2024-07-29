import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
    <div className="logo font-bold text-white text-2xl">
        <span className='text-green-500'> 
            &lt;</span>
            Pass
            <span className='text-green-500'> 
            Man/&gt;</span>
            
            </div>
    <div className='flex justify-center items-center'>
      Created with <img src="icons/heart.png" alt="" /> by Sparsh Sharma
    </div>
    </div>
  )
}

export default Footer
