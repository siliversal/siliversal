'use client';
import Image from 'next/image';
import Link from 'next/link';
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
        <h1 className="text-2xl py-10">Component Categories</h1>
        <ul className="grid gap-11 sm:grid-cols-1 md-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {data.length > 0 &&
            data.map (postdata => {
              console.log ('postdata', postdata.export);
              return postdata.export.map (item => {
                return (
                  <li className='shadow-xl rounded-lg justify-center items-center sm:flex sm:flex-col '>
                    <Link href={item.link} className='grow'>
                    <img
                      className="border-4 brd-color"
                      src={item.image}
                      width="362px"
                      height="249px"
                    />
                    </Link>
                    <div className='text-center py-4 fb sm:text-base flex-wrap'>{item.name}</div>
                  </li>
                );
              });
            })}
        </ul>
      </section>
    </Fragment>
  );
};

export default ExportProducts;
