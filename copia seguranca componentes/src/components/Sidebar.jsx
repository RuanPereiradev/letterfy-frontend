import React from 'react';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='flex flex-col justify-around'>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.home_icon} alt="Home Icon" />
          <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.search_icon} alt="Search Icon" />
          <p className='font-bold'>Search</p>
        </div>
      </div>
      <div>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt="Library Icon" />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} alt="" />
            <img className='w-5' src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className='p-4 font-semibold flex flex-col items-start gap-1 pl-4'>
          <h1>Create your first playlist</h1>
          <p className='font-light'>it´s easy, we help you</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
        </div>
        <div className='p-4 font-semibold flex flex-col items-start gap-1 pl-4 mt-4'>
          <h1>Let´s find some podcast to follow</h1>
          <p className='font-light'>we'll keep you updated on new episodes</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcast</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
