'use client';

import Link from 'next/link';
import React, {Fragment} from 'react';
import {useEffect, useState} from 'react';

setTimeout (() => {

  const navi = document.querySelector ('ul.main-menu ');
  const navilink = navi.querySelectorAll ('a');
  const currentUrl = window.location.href;


  navilink.forEach (link => {
    if (link.href === currentUrl) {
      link.classList.add ('active');
    }
  });
}, 200);

function addprodText (){
 setTimeout(() => {
  var childValue;
  var parentGet = document.querySelector('.ab-mobileMenu ul');
  childValue = parentGet.children[2];
  childValue = childValue.children[0].innerHTML = "Products";
  },500);
}
const Menu = () => {
  const [data, setData] = useState ([]);
  const [show, setShow] = useState (false);

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
              <nav className="flex items-center gap-5 sm:hidden lg:flex">
                <ul className="flex items-center gap-14 main-menu">
                  {postdata.menu.map ((item, index) => {
                    return (
                      <li key={index}>
                        <Link className="fb" href={item.link}>{item.name}</Link>
                        <ul className="hidden">
                          {item.submenu.map (sub => (
                            <li key={index}>
                              <Link className="fb" href={sub.link}>
                                {sub.name}
                              </Link>
                            </li>
                          ))}

                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <button onClick={ () =>{ setShow (!show);addprodText()}}
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              
              {show &&
              <div className="md:hidden w-full md:block md:w-auto ab-mobileMenu p-6">
                <ul className="gap-y-2 flex flex-col items-left">
                  {postdata.menu.map ((item, index) => {
                    return (
                      <li key={index}>
                        <Link className="fb" href={item.link}>{item.name}</Link>
                        <ul className="mobile-sub-menu">
                          {item.submenu.map (sub => (
                            <li key={index}>
                              <Link className="fb" href={sub.link}>
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </div>
              }
            </Fragment>
          );
        })}

    </Fragment>
  );
};

export default Menu;
