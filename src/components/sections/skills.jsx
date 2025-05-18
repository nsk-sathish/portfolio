import {  React, useState, useRef, useEffect } from 'react'
import tech_img from "../../assets/images/tech_stack_transparent.png"

const Skills = () => {
    
    const [isInterSecting, setInterSecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const skillObserver = new IntersectionObserver(
        ([entry]) => {
          setInterSecting(entry.isIntersecting);
        }, {rootMargin: "-150px"}
      );

      skillObserver.observe(ref.current)

    },[isInterSecting]);

    useEffect(() => {
      if(isInterSecting) {
        ref.current.classList.add("scrollAnimate");
      }
    }, [isInterSecting])

  return (
    <div ref={ref} id='skills' className='container py-5 md:py-10'>
        <h2 className='text-4xl sm:text-5xl font-MontserratSemiBold lowercase'>.skills</h2>
        <div className='mt-5 flex flex-wrap justify-center align-center'>
            <img src={tech_img} alt="tech stack" />
        </div>
    </div>
  )
}

export default Skills