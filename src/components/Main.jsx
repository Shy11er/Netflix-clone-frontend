import React from 'react'
import data from '../movies.json';

const Main = () => {
    // Math.floor(Math.random() * Object.keys(data).length)
    const movie = data[7];

    return (
        <div className='w-full h-[900px] text-white'>
            <div className='w-full h-full'>
                <div className="absolute h-[900px] w-full bg-gradient-to-r from-black"></div>
                <img className="w-full h-[900px] object-cover bg-top" src={require(`../assets/movies/${movie?.title}.png`)} alt={movie?.title}  />
                <div className='absolute w-full top-[40%] p-4 md:p-8'>
                    <h1 className='text-5xl md:text-7xl mb-4'>{movie?.title}</h1>
                    <div>
                        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-7 hover:bg-gray-900 hover:text-white'>Play</button>
                        <button className='border text-white border-gray-300 py-2 px-8 ml-4 hover:bg-gray-300 hover:text-black'>Watch Later</button>
                    </div>
                    <div className='flex flex-row my-2 text-center'>
                        {movie?.percent >= 70 ? <p className='text-green-400 font-sans text-lg'>{movie?.percent}% Watch</p> : <p className='text-red-400 font-sans text-lg'>{movie?.percent}% Watch</p>}
                        <p className='text-lg font-sans text-gray-400 mx-4'>{movie?.date}</p>
                        {movie?.type === 'serial' ? <p className='text-lg font-sans text-gray-400 mr-4'>{movie?.seasons} Seasons</p> : ""}
                        <div className='border border-gray-400 px-1 font-sans text-gray-400'>{movie?.rating}</div>
                    </div>
                    <br />
                    <p className='w-full md:max-w-[90%] lg:max-w-[50%] xl:max-w-[45%] text-gray-200 text-2xl'>{movie?.info}</p>
                </div>
            </div>
        </div>
  )
}

export default Main;