'use client';
import Image from 'next/image';
import React from 'react';
import {useEffect, useState, useRef} from 'react';
import './hero.css';

setTimeout(()=>{
  let imgHeight = document.querySelector(".slideshowSlider .slide").offsetHeight;
console.log("imgHeight", `${imgHeight}px`);
},500);

const Slideshow = () => {
 
  const colors = [
    'images/no-ib.jpg',
    'images/no-ib.jpg',
    'images/no-ib.jpg',
    'images/no-ib.jpg',
  ];
  const delay = 6000;
  const [index, setIndex] = useState (0);
  const timeoutRef = useRef (null);
  
  function resetTimeout () {
    if (timeoutRef.current) {
      clearTimeout (timeoutRef.current);
    }
  }

  useEffect (
    () => {
      resetTimeout ();
      timeoutRef.current = setTimeout (
        () =>
          setIndex (
            prevIndex => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1)
          ),
        delay
      );

      return () => {
        resetTimeout ();
      };
    },
    [index]
  );
 

  return (
    
    <div className="slideshow">
      <div
        className='slideshowSlider'
        style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}
      >
        {colors.map ((image, index) => (
          <div
            className="sm:h-40 slide sm:bg-contain md:bg-auto bg-no-repeat"
            key={index}
            style={{backgroundImage: `url(${image})`}}
          />
        ))}
      </div>

      { <div className="slideshowDots">
        {colors.map ((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex (idx);
            }}
          />
        ))}
      </div>}

    </div>
  );
};

export default Slideshow;
