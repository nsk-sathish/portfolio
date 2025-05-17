import {  React, useState, useRef, useEffect } from 'react'
import { FaSquareGithub, FaLinkedin, FaSquareInstagram, FaArrowDownLong, FaRegUser } from "react-icons/fa6";
import dev_img from "../../assets/images/dev_image.jpg"

const About = () => {

    const [isInterSectingProfile, setInterSectingProfile] = useState(false);
    const [isInterSectingAbout, setInterSectingAbout] = useState(false);
    const refProfile = useRef(null);
    const profileAbout = useRef(null)

    useEffect(() => {
        const profileObserver = new IntersectionObserver(
            ([entry]) => {
                setInterSectingProfile(entry.isIntersecting)
            }, {rootMargin: "-150px"}
        );

        profileObserver.observe(refProfile.current);

    }, [isInterSectingProfile])

    useEffect(() => {
        if(isInterSectingProfile) {
            refProfile.current.classList.add("scrollAnimate");
        }
    }, [isInterSectingProfile])

    // Intersecting Observer for about text section 
    useEffect(() => {
        const aboutObserver = new IntersectionObserver(
            ([entry]) => {
                setInterSectingAbout(entry.isIntersecting)
            }, {rootMargin: "-150px"}
        );

        aboutObserver.observe(profileAbout.current);

    }, [isInterSectingAbout])

    useEffect(() => {
        if(isInterSectingAbout) {
            profileAbout.current.classList.add("scrollAnimate");
        }
    }, [isInterSectingAbout])

  return (
    <div id='aboutme' className='container py-5 md:py-10 aboutAnimate'>
        <h2 className='text-4xl sm:text-5xl font-MontserratSemiBold lowercase'>.ABOUT</h2>
        <div className='mt-5 flex flex-wrap gap-3 tab:w-5/5'>
            <div ref={refProfile} className='flex gap-5 items-center aboutProfile'>
                <img 
                    className='profilImage select-none size-24 md:size-28 rounded-full outline outline-offset-4 outline-primary'
                    src={dev_img} 
                    alt="Profile Image"
                    title='Sathishkumar'
                />
                <div className='space-x-5 flex profileLinks'>
                    <a href='#' target='_blank'>
                        <FaSquareGithub className='fill-siteBlack hover:fill-primary size-7 xs:size-8' />
                    </a>
                    <a href='https://www.linkedin.com/in/sathishkumar-n-516b6a210/' target='_blank'>
                        <FaLinkedin className='fill-siteBlack hover:fill-primary size-7 xs:size-8' />
                    </a>
                    <a href="#" className='cursor-not-allowed pointer-events-none'>
                        <FaSquareInstagram className='fill-siteBlack size-7 xs:size-8' />
                    </a>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <p ref={profileAbout} className='text-xl aboutTxt'>
                    Hi, I'm a passionate and results-driven Lead Front-end Developer with over 9+ years of experience crafting intuitive, responsive, and high-performance web applications. I specialize in technologies like HTML5, CSS3, SASS/LESS, jQuery, Tailwind CSS, Bootstrap, and React.js. I’ve had the opportunity to work with platforms like Magento, WordPress, Odoo, Shopify and Drupal, bringing both creativity and efficiency to every project.
                </p>
                <div className=''>
                    <p className='text-xl'>Currently leading a front-end team at Ewall Solutions Pvt. Ltd., I take pride in mentoring developers, collaborating across disciplines, and delivering pixel-perfect UI solutions that align with business goals. My approach blends clean code, user-centric design, and scalable architecture to build web interfaces that not only look great but perform flawlessly.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About