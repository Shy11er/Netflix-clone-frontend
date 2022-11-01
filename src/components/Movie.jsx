import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import { UserAuth } from '../context/AuthContex';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Movie = ({item}) => {
    const [Like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const {user} = UserAuth();

    const movieID = doc(db, 'users', `${user?.email}`);

    const saveShow = async () => {
        if (user?.email) {
            setLike(!Like);
            setSaved(true);
            await updateDoc(movieID, {
                savedShows: {
                    title: item.title,
                    img: item.imgUrl,
                },
            });
        } else {
            alert('Please log in to save a movie');
        }
    };

    return (
        <div className='w-[160xp] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img src={item?.imgUrl} className='w-[280px] h-[160px] block' />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
              <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-cemter'>{item?.title}</p>
            </div>
            <p onClick={saveShow}>
                { Like ? (
                    <FaHeart    className='absolute top-4 left-4 text-gray-300' />
                ) : (
                    <FaRegHeart className='absolute left-4 top-4 text-gray-300' />
                )}
            </p>
        </div>
            // {/* <img src={item.imgUrl} className="w-full h-auto"/>
            // <div className='absolute top-0 w-auto h-full hover:bg-black/80 opacity-0 hover:opacity-50'>
            //     <p className='text-white white-space-normal text-xs md:text-sm font-bold flex justify-center items-center text-center '>{item.title}</p>
            //     <i onClick={saveShow}>
            //         { Like ? (
            //             <FaHeart    className='absolute top-4 left-4 text-gray-300' />
            //         ) : (
            //             <FaRegHeart className='absolute left-4 top-4 text-gray-300' />
            //         )}
            //     </i>
            // </div> */}
  )
}

export default Movie