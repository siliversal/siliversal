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
            <span className='text-sm font-semibold'>WELCOME TO SILIVERSAL,</span> Your trusted and reliable partner in Global Trade. With an extensive network of agriculture producers, SILIVERSAL is an exporter of Vegetables, Fruits, Spices, and Processed Food Products.
            <br/><br/>
            SILIVERSAL also specialized in export of a wide variety of Handmade Toys and Handicrafts produced by skilled artisans across India.<br/><br/>
            
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
