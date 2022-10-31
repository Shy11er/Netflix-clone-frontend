import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContex';

const Navbar = () => {
  const {user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/signup');
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='flex items-center p-4 justify-between w-full absolute z-[100]'>
        <Link to='/'>
          <h1 className='text-red-600 text-6xl font-bold cursor-pointer'>NETFLIX</h1>
        </Link>
        {user?.email ? (
          <div className='text-white '>
              <Link to='/account'>
                <button className='px-6 py-2 mx-1 '>Account</button>
              </Link>
               <button onClick={ handleLogOut } className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Log Out</button>
          </div>
        ) : (
          <div className='text-white '>
              <Link to='/login'>
                <button className='px-6 py-2 mx-1 '>Sign In</button>
              </Link>
              <Link to='/signup'>
               <button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
              </Link>
          </div>
        )
        }
    </div>
  )
}

export default Navbar;