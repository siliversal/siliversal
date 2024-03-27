'use client';
import Image from 'next/image';
import React, {Fragment} from 'react';
import {useEffect, useState} from 'react';

const OtherProducts = () => {
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
      <section className="max-w-6xl mx-auto ">
        <h1 className="text-2xl py-10 mt-6">Other Products</h1>
        <ul className="flex gap-8">
          {data.length > 0 &&
            data.map (postdata => {
              return postdata.otherproducts.map (item => {
                return (
                  <li className='br-r'>
                    <img
                      className=""
                      src={item}
                      width="362px"
                      height="249px"
                    />
                  </li>
                );
              });
            })}
        </ul>
      </section>
    </Fragment>
  );
};

export default OtherProducts;
