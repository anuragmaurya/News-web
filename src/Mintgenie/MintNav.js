import React from 'react';
import logo from './Material/download-removebg-preview.png'
import { BsSearch } from 'react-icons/bs';
import { IoNotificationsSharp } from 'react-icons/io5';
import { MdAccountCircle } from 'react-icons/md';
import Stocks from './Stocks'
import MintNews from './MintNews';

const MintNav = () => {
  return (
    <div>
      <nav className='m-0 h-14 w-full bg-white flex items-center fixed shadow-md'>
        <div className='space-y-1 cursor-pointer ml-32'>
          <span className='block w-5 h-[0.15rem] bg-gray-600 rounded-md'></span>
          <span className='block w-4 h-[0.15rem] bg-gray-600 rounded-md'></span>
          <span className='block w-[1.2rem] h-[0.15rem] bg-gray-600 rounded-md'></span>
        </div>
        <img className='mt-5 -ml-10' src={logo} alt='' />

        <ul className='flex gap-10 text-base font-[400] '>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>Practice</a>
          </li>
          <li>
            <a href=''>Markets</a>
          </li>
          <li>
            <a href=''>Play</a>
          </li>
          <li>
            <a href=''>Buy</a>
          </li>
          <li>
            <a href=''>News</a>
          </li>
          <li>
            <a href=''>Budget 2023</a>
          </li>
        </ul>

        <div className='flex text-2xl items-center'>
          <BsSearch className='ml-[10rem] font-bold' />
          <IoNotificationsSharp className='text-3xl ml-5 ' />
          <MdAccountCircle className='text-3xl ml-5 ' />
          <p className='text-[0.7rem] ml-1'>HELLO/SIGN IN</p>
        </div>
      </nav>

      <div className='flex w-full h-24 bg-black '>
        <marquee className='text-white pt-16'> skhbsdajk </marquee>
      </div>

      <div className='h-[10rem] w-full bg-neutral-600'></div>

      <div className='ml-[7.5rem] mt-7'>
        <p className='font-medium'>Market Indices</p>
        <div className='flex gap-3 mt-2 ml-2 w-full'>
          <Stocks />
          <Stocks />
          <Stocks />
          <Stocks />
          <Stocks />
          <Stocks />
          <Stocks />
          <Stocks />
        </div>
        <div className='mt-4'>
          <MintNews logo={logo} />
        </div>

      </div>
    </div>
  );
};

export default MintNav;
