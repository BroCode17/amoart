import React from 'react'
import Image from 'next/image'
import carosal from '../../public/images/carosal.jpeg'
import { Button } from './ui/button'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Carosal = () => {
  return (
    <div className='w-full relative'>
        <div className='absolute bottom-10 right-10 lg:right-[250px] bg-opacity-10 border-gray-400 bg-[#d9d9d9]'>
        <Button className='bg-transparent border rounded-none font-bold  hover:bg-black'>Explore my Gallery</Button>
        </div>

        <div className='absolute bottom-10 left-10 lg:left-[250px] bg-opacity-10 border-gray-400 bg-[#d9d9d9] rounded-full'>
        <Button className='bg-transparent border w-10 rounded-full font-bold  hover:bg-white hover:text-black'>
            <FaChevronLeft/>
        </Button>

        <Button className='bg-transparent border w-10 rounded-full font-bold  hover:bg-white hover:text-black ml-6'>
            <FaChevronRight />
        </Button>
        </div>
        <Image src={carosal} 
         alt='Carosaul'
         style={{
            width: '100%',
            height: '24rem',
            objectFit: 'cover'
         }}
        />

    </div>
  )
}

export default Carosal