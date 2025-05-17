import React from 'react'
import { FaEnvelope, FaPhone } from "react-icons/fa6";

const Header = () => {
  return (
    <header className='border-b border-siteBlack fixed top-0 left-0 w-full z-[11] bg-siteWhite/80 backdrop-blur-sm'>
        <div className='container py-3 flex justify-between items-center'>
          <div>
            <svg className='svg-logo' height="45" width="255" xmlns="http://www.w3.org/2000/svg">
                <text x="5" y="30" className='fill-none stroke-siteBlack italic' fontSize="30">Sathishkumar</text>
            </svg>
          </div>
          <div className='flex gap-4'>
            <a className='hover:text-primary flex gap-2 items-center' href='mailto:nskcse1993@gmail.com'>
              <FaEnvelope className='size-5' />
              <span className='hidden md:block'>nskcse1993@gmail.com</span>
              <span className='block md:hidden'>Mail</span>
              </a>
            <a className='hover:text-primary flex gap-2 items-center' href='callto:9788453539'>
              <FaPhone className='size-5' />
              <span className='hidden md:block'>+91 9788453539</span>
              <span className='block md:hidden'>Call</span>
            </a>
          </div>
        </div>
    </header>
  )
}

export default Header