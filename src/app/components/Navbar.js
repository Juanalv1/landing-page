"use client"
import React, { useState } from 'react'
import { IoIosMenu, IoMdClose } from "react-icons/io";
import Primarybtn from './Primarybtn';
import Secondarybtn from './Secondarybtn';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='bg-silver border  w-full h-16 flex items-center px-2 justify-between md:px-8 lg:px-12'>
      <div className=''>
        <img src='./Logo.svg' /> 
      </div>

      <div className='hidden lg:flex'>
       <ul className='flex  gap-4 text-black font-bold'>
          <li className='hover:text-primary cursor-pointer'>Home</li>
          <li className='hover:text-primary cursor-pointer'>Service</li>
          <li className='hover:text-primary cursor-pointer'>Feature</li>
          <li className='hover:text-primary cursor-pointer'>Product</li>
          <li className='hover:text-primary cursor-pointer'>Testimonial</li>
        </ul>
      </div>
      <div className='hidden lg:flex gap-x-4'>
        <Secondarybtn text={'Log in'} />
        <Primarybtn text={'Sign up'} />
      </div>
      <div className='lg:hidden'>
        <IoIosMenu  className='text-green-600 w-10 h-10 ' onClick={() => {
          isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
        }}/>
      </div>
      {isMenuOpen && (<div className='flex flex-col border-gray-900 border-l  bg-silver absolute w-2/3 top-0 right-0 h-full px-3 py-4 '>
        <IoMdClose  className='w-6 h-6 self-end'  onClick={() => {setIsMenuOpen(false)
        }}/>
        <ul className='flex flex-col mt-20 mb-16 gap-2 text-black ml-4'>
          <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonial</li>
        </ul>
        <div className='w full flex p-2 gap-8 justify-center items-center'>
          <Secondarybtn text={'Log in'} />
          <Primarybtn text={'Sign up'} />
        </div>
      </div>)}

    </div>
  )
}

export default Navbar
