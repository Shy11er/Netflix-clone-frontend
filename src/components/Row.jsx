import React from 'react';
import Movie from './Movie';

const Row = ({text, movie}) => {
 
  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{text}</h2>
        <div className='relative flex items-center h-[150px]'>
          <div id={'slider'}>
            {movie.map((item, id) => (
              <Movie item={item} />
            ))}
          </div>
        </div>
    </>
  )
}

export default Row