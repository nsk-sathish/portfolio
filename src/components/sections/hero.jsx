import {  React, useState, useRef, useEffect } from 'react'
import cv from '../../assets/documents/Sathishkumar_N_resume.pdf'
import { FaSquareGithub, FaLinkedin, FaSquareInstagram, FaArrowDownLong, FaRegUser } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {

  const [isInterSecting, setInterSecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const HeroObserver = new IntersectionObserver(
      ([entry]) => {
        setInterSecting(entry.isIntersecting)
      }, 
    )
    HeroObserver.observe(ref.current);

    return () => {
      HeroObserver.unobserve(ref.current);
    }
    
  }, [isInterSecting])
  
  useEffect(() => {
    if (isInterSecting) {
      ref.current.classList.add("scrollAnimate");
    }
  }, [isInterSecting])

  function scrollToSkill () {
    window.scrollTo({top: document.querySelector("#aboutme").offsetTop})
  }

  return (
    <div ref={ref} className='hero-section'>
      <div className='container flex justify-between gap-4 items-center h-[calc(100vh-70px)]'>
        <div className='flex justify-center flex-col heroContent'>
          <h1 className='text-4xl xs:text-5xl sm:text-6xl font-MontserratBold leading-tight'>
            Hi, I'm Sathishkumar
            <TypeAnimation
              sequence={[
                'Lead Frontend Developer',
                2000,
                'UI Developer',
                2000
              ]}
              wrapper="span"
              speed={250}
              style={{ fontSize: 'inherit', display: 'block' }}
              repeat={Infinity}
              className='text-primary'
            />
          </h1>
          <div className='mt-10 flex flex-wrap gap-3'>
          <a className='text-xl inline-flex items-center gap-3 uppercase italic py-2 px-4 border rounded-full hover:bg-siteBlack hover:text-siteWhite transition-all font-MontserratSemiBold' href="mailto:nskcse1993@gmail.com"><span>Contact</span> <FaRegUser /></a>
            <a className='text-xl inline-flex items-center gap-3 uppercase italic py-2 px-4 border rounded-full hover:bg-siteBlack hover:text-siteWhite transition-all font-MontserratSemiBold' href={cv} target='_blank' download={true}><span>Download CV</span> <FaExternalLinkAlt /></a>
          </div>
        </div>
        <div className='space-y-5 grid'>
          <a href='https://github.com/Afree-dev' target='_blank'>
            <FaSquareGithub className='fill-siteBlack hover:fill-primary size-7 xs:size-8' />
          </a>
          <a href='https://www.linkedin.com/in/sathishkumar-n-516b6a210/' target='_blank'>
            <FaLinkedin className='fill-siteBlack hover:fill-primary size-7 xs:size-8' />
          </a>
          <a  href="#" className='cursor-not-allowed pointer-events-none'>
            <FaSquareInstagram className='fill-siteBlack size-7 xs:size-8' />
          </a>
          <button type='button' onClick={scrollToSkill} className='grid place-items-center p-1 border py-4 rounded-full'>
            <FaArrowDownLong className='animate-bounce' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero