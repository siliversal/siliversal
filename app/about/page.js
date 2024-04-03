import React, {Fragment} from 'react';
import Image from 'next/image';
import Header from '../Components/header/header';
import Footer from '../Components/footer/footer';
import Subbanner from '../Components/sub-banner/sub-banner';
export default function About () {
  return (
    <Fragment>
      <Header />
      <Subbanner title="About Us" subBannerPath ='./images/no-ib-sub.jpg'/> 
      <section className="max-w-6xl mx-auto relative" />
      <main className='mtb sm:px-3.5 xl:px-0'>
        <section className='max-w-6xl mx-auto gap-x-5 md:flex sm:block' >

          <div className='sm:w-full md:w-3/5'>
            <h1 className='text-2xl py-6 pb-4 font-medium drop-shadow-lg'><span className="font-bold blueText">SILIVERSAL</span> - Professionally Executed <br/> Exports and Imports</h1>
            <p className='text-sm pt-3'>
            <span className='text-sm font-semibold'>WELCOME TO SILIVERSAL,</span> 
            Siliversal Electronics, a distinguished player in the realm of importing, stocking, and distributing industry-standard electronic components. With a strategic focus on unlocking the potential of the Indian market, we stand as a reliable partner committed to delivering quality components swiftly and at competitive prices. <br></br><br></br>
At Siliversal Electronics, our foundation is uncompromising quality. We meticulously select and vet every component in our inventory to ensure they meet and exceed industry standards. Our dedication to quality assurance guarantees optimal performance, reliability, and longevity for our customers' projects and products. 
            </p>
          </div>
          <div className='sm:w-full md:w-3/5 pt-12'>
          <img 
            src="/images/no-img.jpg" 
          width="488px"
          height="427px" />
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}
