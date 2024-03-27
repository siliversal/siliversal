import Image from 'next/image';
import React from 'react';
import Slideshow from './slider';

export default function Banner () {
  return (
    <div className="hero-baneer relative">
      <div className='desktop sm:text-left'>
      This site only desktop View Mobile view coming soon...
      </div>
      <Slideshow/>
      {/* <section className='yellow-strip'>
          <div className='mx-width hero-text m-lr text-center m-t'>
              <h1 className='font-semibold text-2xl'>WE CONNECT INDIA’S BEST TO YOU!</h1>
              <p className='ordinal slashed-zero tabular-nums text-xl'>With over a decade of Dedicated Experience in Export – Import.</p>
              <a href='/about.html' className='rounded-lg hero-button uppercase'>Know more</a>
          </div>
      </section> */}
    </div>
  );
}


