import React, {useState} from 'react';
import Movie from './Movie';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/mousewheel';

// className="w-full h-full relative overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
const Row = ({text, movie}) => {

  const display = () => {
    console.log(window.innerWidth)
    if (window.innerWidth < 1700 && window.innerWidth > 1450) return 5;
    else if (window.innerWidth <= 1450 && window.innerWidth > 1150) return 4;
    else if (window.innerWidth <= 1150 && window.innerWidth > 600) return 3;
    else if (window.innerWidth <= 600) return 2;
    else return 6;
  }
  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{text}</h2>
        {/* <div className='relative flex items-center h-[185px]'> */}
          <Swiper modules={[Mousewheel]}
            slidesPerView={6}
            mousewheel={true}
            >
            {movie.map((item) => (
              <SwiperSlide><Movie item={item} /></SwiperSlide>
            ))}
          </Swiper>
        {/* </div> */}
    </>
  )
}

export default Row