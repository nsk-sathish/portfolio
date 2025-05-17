import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

const Contact = () => {
  
    const [mailLoading, setMailLoading] = useState(false);
    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setMailLoading(true);
        
        try {
          const result = await emailjs.sendForm(
            import.meta.env.VITE_EJS_SERVICE_ID, 
            import.meta.env.VITE_EJS_TEMPLATE_ID, 
            form.current, 
            { publicKey: import.meta.env.VITE_EJS_PUB_KEY }
          );
          console.log('SUCCESS!', result.text);
        } catch (error) {
          console.log('FAILED...', error.text);
        } finally {
          setMailLoading(false);
        }
    }

    console.log(mailLoading)
    return (
    <div className='mt-5 py-5 bg-siteBlack rounded-tl-[75px] rounded-tr-[75px] sm:rounded-tl-[150px] sm:rounded-tr-[150px] text-siteWhite'>
        <div className="container">
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
        </div>
    </div>
  )
}

export default Contact