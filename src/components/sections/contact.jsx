import React, { useState, useRef } from 'react';
import { FaSquareGithub, FaLinkedin, FaSquareInstagram, FaArrowDownLong, FaRegUser, FaSquareFacebook } from "react-icons/fa6";


const Contact = () => {

    return (
    <div className='mt-5 p-4 bg-white'>
        {/* <div className="container">
            <h2 className='mt-5 text-3xl xs:text-4xl sm:text-5xl font-MontserratBold uppercase text-center'>GET IN TOUCH</h2>
            <div className='mt-5 mx-auto md:w-2/4'>
                <form className='space-y-5' ref={form} onSubmit={handleSubmit}>
                    <fieldset className='flex gap-1 flex-col'>
                        <label htmlFor='name' className='text-xl'>Name</label>
                        <input 
                            type="text" 
                            name="user_name" 
                            id="name" 
                            placeholder='John Doe' 
                            autoComplete='false'
                            required 
                        />
                    </fieldset>
                    <fieldset className='flex gap-1 flex-col'>
                        <label htmlFor='email' className='text-xl'>Email</label>
                        <input 
                            type="email" 
                            name="reply_to" 
                            id="email" 
                            placeholder='johndoe@mail.com' 
                            autoComplete='false'
                            required 
                        />
                    </fieldset>
                    <fieldset className='flex gap-1 flex-col'>
                        <label htmlFor='message' className='text-xl'>Message</label>
                        <textarea 
                            name="message" 
                            id='message' 
                            className='min-h-[150px] resize-y' 
                            placeholder='Message'
                            autoComplete='false'
                            // onChange={handleInput}
                            // value={formData.message}
                            required></textarea>
                    </fieldset>
                    <button className={`border border-primary px-4 py-2 bg-primary rounded hover:bg-opacity-80 focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-black flex gap-2 items-center ${mailLoading && 'opacity-75 pointer-events-none' }`} type='submit' title='Send Message'>
                        {!mailLoading ? <FaPaperPlane /> : <ImSpinner2 className='animate-spin' />}
                        <span>Reach Out</span>
                    </button>
                </form>
            </div>
        </div> */}
        <div className='flex gap-5 justify-between items-center'>
          <div className=''>Get in touch</div>
          <div className='contact-us flex gap-5'>  
            <a href='https://www.facebook.com/share/15wKEiSMki/' target='_blank'>
                <FaSquareFacebook className='fill-siteBlack hover:fill-primary size-7 xs:size-8' />
            </a>
            <a href='https://www.linkedin.com/in/sathishkumar-n-516b6a210/' target='_blank'>
                <FaLinkedin className='fill-siteBlack hover:fill-primary size-7 xs:size-8' />
            </a>
            <a href="https://www.instagram.com/sathish_n_sk/?igsh=Nm1iNndoMDMydTl2" target='_blank'>
                <FaSquareInstagram className='fill-siteBlack size-7 xs:size-8' />
            </a>
          </div>
        </div>
    </div>
  )
}

export default Contact