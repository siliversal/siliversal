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
        <h1 className="text-lg py-10 font-semibold">Electromechanical & Power Management - Components</h1>
        <section>
          <h2 className='pb-4 font-bold '>Fuses, Sockets & Circuit Breakers</h2>
        <ul role="list" className="gap-x-4 sm:columns-1 md-sm:columns-2 md:columns-3 components pb">
          {data.length > 0 &&
            data.map (postdata => {
              return postdata.electromechanical.components.fuses.map (item => {
                return (
                  <li className="w-11/12 relative pl-7 text-sm leading-6">
                    {item}
                  </li>
                );
              });
            })}
        </ul>
        </section>
        <section>
        <h2 className='font-bold py-4'>Switches</h2>
        <ul role="list" className="gap-x-4 sm:columns-1 md-sm:columns-2 md:columns-3 components pb">
          {data.length > 0 &&
            data.map (postdata => {
              return postdata.electromechanical.components.switches.map (item => {
                return (
                  <li className="w-11/12 relative pl-7 text-sm leading-6">
                    {item}
                  </li>
                );
              });
            })}
        </ul>
        </section>

        <section>
        <h2 className='font-bold py-4'>Relays</h2>
        <ul role="list" className="gap-x-4 sm:columns-1 md-sm:columns-2 md:columns-3 components pb">
          {data.length > 0 &&
            data.map (postdata => {
              return postdata.electromechanical.components.relays.map (item => {
                return (
                  <li className="w-11/12 relative pl-7 text-sm leading-6">
                    {item}
                  </li>
                );
              });
            })}
        </ul>
        </section>

        <section>
        <h2 className='font-bold py-4'>Power Supplies</h2>
        <ul role="list" className="gap-x-4 sm:columns-1 md-sm:columns-2 md:columns-3 components pb">
          {data.length > 0 &&
            data.map (postdata => {
              return postdata.electromechanical.components.power.map (item => {
                return (
                  <li className="w-11/12 relative pl-7 text-sm leading-6">
                    {item}
                  </li>
                );
              });
            })}
        </ul>
        </section>
        <section>
        <h2 className='font-bold py-4'>Thermal Management</h2>
        <ul role="list" className="gap-x-4 sm:columns-1 md-sm:columns-2 md:columns-3 components pb">
          {data.length > 0 &&
            data.map (postdata => {
              return postdata.electromechanical.components.thermal.map (item => {
                return (
                  <li className="w-11/12 relative pl-7 text-sm leading-6">
                    {item}
                  </li>
                );
              });
            })}
        </ul>
        </section>
       

        <section>
        <h2 className='font-bold py-4'>Indicators</h2>
        <ul role="list" className="gap-x-4 sm:columns-1 md-sm:columns-2 md:columns-3 components pb">
          {data.length > 0 &&
            data.map (postdata => {
              return postdata.electromechanical.components.indicators.map (item => {
                return (
                  <li className="w-11/12 relative pl-7 text-sm leading-6">
                    {item}
                  </li>
                );
              });
            })}
        </ul>
        </section>
        <div className='py-12 mb-40'>
          <h2 className='font-semibold mb-4'>Manufacturers/OEMs</h2>
        <marquee 
 scrollamount="16" behavior="alternate" direction="left"> 
        <ul className='flex scroll-img'>
        {data.length > 0 &&
            data.map (postdata => {
              console.log ('postdata', postdata.export);
              return postdata.electromechanical.components.logos.map (item => {
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
