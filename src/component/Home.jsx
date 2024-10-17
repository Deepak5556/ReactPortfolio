// src/pages/Home.js
import React from 'react';
import deepak from '../Assets/deepak.png'

const Home = () => {
  return <section className='flex container mx-auto mt-5 '>
    <div className='w-1/2 mx-16 my-16 flex flex-col' >
        <h1 className='text-xl'>
            <span className='text-5xl my-5 font-bold' >I'm Deepakkumar</span> <br/>
        </h1>
        <h1 className='text-xl my-4 font-poppins'>
            <span className=''>This is my official Portfolio website to show all Details and work experience web development </span>
        </h1> 
        <div>       
              <button className="px-4 py-2 bg-slate-200 text-black rounded-lg hover:bg-primary my-4 me-4 hover:text-white focus:outline-none transition ease-out  duration-500">
              Social Media
              </button>
              <button className="px-4 py-2 bg-slate-200 text-black rounded-lg my-4 hover:bg-primary hover:text-white focus:outline-none transition ease-out duration-500">
              Download CV
              </button>
        </div>

    </div>
      <img className='w-1/3' src={deepak}  alt="profile"/>
  </section>
};

export default Home;
