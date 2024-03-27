import Image from 'next/image';
import React from 'react';

export default function Subbanner (props) {
  return (
    <div className="mt107">
      <section className='relative max-w-6xl mx-auto'>
        {/* <h1 className='absolute titleText'>{props.title}</h1> */}
        <img src={props.subBannerPath} />
      </section>
      
    </div>    
  );
}


