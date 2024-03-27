'use client';
import Image from 'next/image';
import Menu from '../menus/menu';
import Logo from '../../Components/logo/logo';
import {useEffect} from 'react';

function sticky () {
  const header = document.querySelector ('.page-header');
  const toggleClass = 'sticky';
  window.addEventListener ('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 150) {
      header.classList.add (toggleClass);
    } else {
      header.classList.remove (toggleClass);
    }
  });
}

export default function Header () {
  useEffect (function () {
    sticky ();
  }, []);

  return (
    <div className="w-full">
      <header className="b-strip py-2 page-header">
        <div className="flex justify-between max-w-6xl mx-auto sm:px-3.5 xl:px-0">
          <Logo />
          <Menu />
        </div>
      </header>
    </div>
  );
}
