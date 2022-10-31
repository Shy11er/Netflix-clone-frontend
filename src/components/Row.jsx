import React from 'react';
import data from '../movies.json';

const Row = ({title}) => {
  let upcoming = [], popular = [], trending = [], series = [], horror = [];
  let movies = [];
  for (let i = 0; i < Object.keys(data).length; i++) {
    if (data[i].status === 'upcoming') upcoming.push(data[i]);
    else if (data[i].status === 'popular') popular.push(data[i]); 
    else if (data[i].status === 'trending') trending.push(data[i]);
    if (data[i].type === 'serial') series.push(data[i]);
    if (data[i].genre[0] === 'Horror') horror.push(data[i]);
  }
  movies.push(upcoming);
  movies.push(popular);
  movies.push(trending);
  movies.push(series);
  movies.push(horror);
  console.log(movies)
  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center'>
            <div id={'slider'}>
                {movies[0].forEach(item => {
                    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                        <h1>{item.title}</h1>
                        <img src={item.imgUrl} />
                    </div>
                })}
            </div>
        </div>
    
    </>
  )
}

export default Row