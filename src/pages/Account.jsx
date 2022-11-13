import React, { useEffect, useState} from 'react'
import {Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/mousewheel';
import { UserAuth } from '../context/AuthContex';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../firebase';

const Account = () => {
  const { user } =UserAuth();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  return (
    <>
      <div className='w-full text-white'>
        <img 
          src='https://preview.redd.it/zjgs096khv591.jpg?auto=webp&s=c6135026c093f19ef733cb3435fb95d67aa6f345' 
          className='w-full h-[550px] object-cover'  
        />
      </div>
      <div className='w-full h-[550px] fixed flex items-center bg-black/60 top-0 left-0'></div>
      <div className='w-full h-auto'>
        <h2 className='text-gray-200 font-bold md:text-xl p-4 absolute top-50 text-xs'>My Movies</h2>
        <Swiper modules={[Mousewheel]}
          slidesPerView={5}
          spaceBetween={50}
          mousewheel={true}
          >
          {movies.map((item) => (
            <SwiperSlide> 
              <div className='sm:w-[200px] md:w-[240px] lg:w-[280px] mt-16 inline-block cursor-pointer relative p-2'>
                <img src={require(`../assets/movies/${item?.title}.png`)} className='lg:h-[160px] md:h-[130px] w-[200px] h-[120px] md:w-[240px] lg:w-[280px]' />
                <div className="absolute whitespace-normal px-4 flex text-center top-0 justify-center left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
                  <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-cemter'>{item?.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Account