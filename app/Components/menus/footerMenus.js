'use client';

import Link from 'next/link';
import React, {Fragment} from 'react';
import {useEffect, useState} from 'react';



const FooterMenu = () => {
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
      {data.length > 0 &&
        data.map ((postdata, index) => {
          return (
            <Fragment>
              <ul key={index}>
              {postdata.menu.map ((item, index) => {
                return (
                  
                  <Fragment>
                      {item.submenu.map (sub => (
                        <li key={index}>
                          <Link className="fb" href={sub.link}>{sub.name}</Link>
                        </li>
                      ))}
                      </Fragment>
                );
              })}
              </ul>
            </Fragment>
          );
        })}

    </Fragment>
  );
};

export default FooterMenu;


/*
,
          {
            "name": "Processed Food Items",
            "link": "/processedfood"
          },
          {
            "name": "Handicrafts",
            "link": "/handicrafts"
          },
          {
            "name": "Solar Products",
            "link": "/solar"
          }
*/