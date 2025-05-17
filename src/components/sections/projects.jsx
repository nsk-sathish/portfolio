import React, { useEffect, useRef, useState } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import zcommerce from "../../assets/images/zcommerce.png"
import zrecipes from "../../assets/images/zrecipes.png"

const Projects = () => {

    const [projects] = useState([
        {
            name: "Z Commerce",
            url: "https://z-commerce-dev.vercel.app/"
        },
        {
            name: "Z Recipes",
            url: "https://z-recipes-dev.vercel.app/"
        }
    ])
    const refs = useRef([]);

    useEffect(() => {
        const projectObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("scrollAnimate");
                    }
                });
            },
            { rootMargin: "-100px" }
        );

        refs.current.forEach(ref => {
            projectObserver.observe(ref);
        });
    }, []);

  return (
    <div className='container py-5 md:py-10 projectsAnimate'>
        <h2 className='text-4xl sm:text-5xl font-MontserratSemiBold lowercase'>.PROJECTS</h2>
        <ul className='projectsList mt-5 flex flex-col sm:flex-row gap-5'>
            {projects.map((item, index) => (
                <li ref={(el) => refs.current[index] = el} key={index} className='flex-1 project'>
                    <div className='overflow-hidden rounded-lg border'>
                        <a href={item?.url} target='_blank'>
                            <img 
                                className='aspect-video object-cover object-left-top hover:scale-105 transition-all select-none'
                                src={item?.name === "Z Commerce" ? zcommerce : zrecipes} 
                                alt={item?.name} 
                            />
                        </a>
                    </div>
                    <div className='mt-2'>
                        <a className='flex items-center gap-2 underline underline-offset-2' href={item?.url} target='_blank'>
                            <h5 className='text-xl uppercase font-MontserratSemiBold'>{item?.name}</h5> 
                            <FaExternalLinkAlt />
                        </a>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Projects