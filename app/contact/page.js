'use client'

import React, {Fragment, useState} from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/footer/footer';
import Subbanner from '../Components/sub-banner/sub-banner';
import ContactForm from '../Components/contact-form/contact-form';

export default function About () {
  const [email, setEmail] = useState('contact@siliversal.com');
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
  }
  return (
    <Fragment>
      <Header />
      <Subbanner title="Contact Us"  subBannerPath="./images/sub-contact.jpg"/>
      <main className='mtb sm:px-3.5 xl:px-0'>
      <section className="max-w-6xl mx-auto relative md:flex sm:block" >
          <div className='md:w-1/2 sm:w-full'>
            <h1 className='text-2xl py-6 pb-4 font-medium'>Registered Address </h1>
              <div className='pb-8'>
              #202, 88/1, Omega Aster Apt.,<br />
              Chokkanahalli, Yelahanka<br />
              Bengaluru, Karnataka - 560064<br />
              INDIA
              <br />
              <br />
              <b className='float-left pr-1'>Email:</b><span className='float-left' >{email}</span> <i class="fa-solid fa-copy float-left copy" onClick={copyEmailToClipboard}><img src='./images/copy-black.png'/></i><br />
              <b>Phone:</b> +91 7483433274 <br />
              </div>
          </div>
          <div className="contactForm md:w-1/2 sm:w-full">
            <ContactForm/>
          </div>
      </section>
        <div>
        {/* <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10764.298847283346!2d78.37739443035427!3d17.47146751780371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb919d48e03ce3%3A0xa5effee30f611160!2sMIG%2F11!5e0!3m2!1sen!2sin!4v1698489639909!5m2!1sen!2sin"
           width="600" 
           height="450" 
           style={{border:"0", width:"100%" }} 
           allowfullscreen="" 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">
        </iframe> */}
        </div>
       </main>
      <Footer />
    </Fragment>
  );
}
