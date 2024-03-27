'use client';
import Image from 'next/image';
import React, {Fragment} from 'react';
import {useEffect, useState} from 'react';

const ExportProducts = () => {
  const [data, setData] = useState ([]);
  useEffect (() => {
    fetch ('./data/data.json')
      .then (response => response.json ())
      .then (json => {
        setData (json);
      });
  }, []);
  return (
    <Fragment>
      <section className="max-w-6xl mx-auto">
        <h1 className="text-lg py-10 font-semibold">Semiconductors - Components</h1>
        <ul role="list" className="gap-x-4 sm:columns-1 md-sm:columns-2 md:columns-3 components">
          {data.length > 0 &&
            data.map (postdata => {
              return postdata.semiconductors.components.map (item => {
                return (
                  <li className="w-11/12 relative pl-7 text-sm leading-6">
                    {item}
                  </li>
                );
              });
            })}
        </ul>

        <div className='mt-14 mt-20 my-40'>
          <h1 className="text-lg  font-semibold">Manufacturers/OEMs</h1>
        <marquee 
 scrollamount="16" behavior="alternate" direction="left"> 
        <ul className='flex scroll-img'>
        {data.length > 0 &&
            data.map (postdata => {
              console.log ('postdata', postdata.export);
              return postdata.semiconductors.logos.map (item => {
                return (
                 <li className='ml-4'><img src={item} width="149px" height="92px"/></li> 
                );
              });
            })}
            </ul>
        </marquee>
        </div>
      </section>
    </Fragment>
  );
};

export default ExportProducts;
