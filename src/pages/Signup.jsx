import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContex';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();
  
  const help = () => {
    const helper = document.getElementById('helper');
    helper.style.display = "flex";
    setTimeout(() => {
      helper.style.display = "none";
    }, 1000);  
  }

  const handleSubmit = async(ev) => {
    ev.preventDefault();
    try {
      await signUp(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    };
  };

  return (
    <>
      <div className='w-full h-screen'>
        <div className='absolute h-full w-full bg-black/60 z-10'></div>
        <img className='w-full h-full object-cover hidden absolute sm:block' src='https://preview.redd.it/zjgs096khv591.jpg?auto=webp&s=c6135026c093f19ef733cb3435fb95d67aa6f345' />
        <div className='fixed w-full px-4 py-24 z-50'>
          <form onSubmit={ handleSubmit } className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white flex flex-col justify-center text-center items-center ">
            <h1 className='text-white text-4xl font-bold my-4'>Sign Up</h1>
            {error ? <p className='p-3 bg-red-500 my-2'>{error.slice(22, error.length-2).toUpperCase()}</p> : null}
            <input 
              onChange={(ev) => setEmail(ev.target.value)}
              className='h-10 px-4 my-2 text-gray-300 text-lg focus:outline-none font-sans' 
              type="email" 
              style={{background: "#333"}} 
              placeholder='Email Address'
              autoComplete='email' 
            />
            <input 
              onChange={(ev) => setPassword(ev.target.value)}
              className='h-10 px-4 my-2 text-gray-400 text-lg focus:outline-none font-sans' 
              style={{background: "#333"}} 
              type="password" 
              placeholder='Password' 
              autoComplete='current-password' 
            />
            <button className='h-10 px-4 bg-red w-[65%] mt-8 font-semibold bg-red-600 cursor-pointer rounded'>Sign Up</button>
            <div className='my-2'>
              <div className="flex justify-between items-center">
                <div className=''>
                  <input type="checkbox" className="accent-red-600 cursor-pointer" />
                  <label className="text-gray-400 mx-2">Remember Me</label>
                </div>
                <a className="text-gray-400 ml-16 cursor-pointer" onClick={help}>Need Help?</a>
              </div>
            </div>
            <div className="my-4">
              <label className="text-gray-400">Already subscribed to Netflix?</label>
              <Link to='/login' className="hover:text-red-600 mx-2"> Sign In</Link>
            </div>
            <h1 className='absolute bottom-[120px] text-3xl uppercase text-gray-300 text-semibold' >Sponsored by your Mum</h1>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup