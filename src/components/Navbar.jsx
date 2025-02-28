import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className='w-full flex justify-end items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
                <img onClick={()=>navigate(+1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
            </div> 
            
        </div>
    </>
  )
}

export default Navbar