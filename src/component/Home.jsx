// src/pages/Home.js
import React from 'react';
import deepak from '../Assets/deepak.png';
import { IoDocument } from "react-icons/io5";

const Home = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row  items-center justify-between md:my-10 md:mx-20 container">
      {/* Left Section - Text and Buttons */}
      <div className="sm:w-1/2 flex flex-col *:items-start mx-10 space-y-6 mt-8 sm:mt-0">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
          I'm Deepakkumar
        </h1>
        <p className="text-xs sm:text-xl   font-poppins">
          This is my official Portfolio website to show all my details and work experience in web development.
        </p>

        <div className="flex ">
        <button className="px-2 py-2 md:px-4 m-2 bg-slate-200 text-xs  md:text-lg flex items-center gap-2 text-black rounded-lg hover:bg-primary hover:text-white focus:outline-none transition ease-out duration-500">
            Social Media
            </button>
          <button className="px-4 py-2  m-2 bg-slate-200 text-xs  md:text-lg flex items-center gap-2 text-black rounded-lg hover:bg-primary hover:text-white focus:outline-none transition ease-out duration-500">
              Download Resume <IoDocument/>
            </button>
        </div>
      </div>
      {/* Right Section - Image */}
      <div className="w-2/3 sm:w-1/3 flex justify-center items-center mx-8 me-10 my-5 order-2 sm:order-1">
        <img className="w-full object-cover flex justify-items-center order-2 rounded-full" src={deepak} alt="profile" />
      </div>
    </section>
  );
};

export default Home;
























// // src/pages/Home.js
// import React from 'react';
// import deepak from '../Assets/deepak.png';

// const Home = () => {
//   return (
//     <section className="container mx-auto flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between md:my-10 md:mx-20 min-h-screen">
//       {/* Left Section - Text and Buttons */}
//       <div className="sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left space-y-6 mt-8 sm:mt-0">
//         <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
//           I'm Deepakkumar
//         </h1>
//         <p className="text-xs sm:text-xl font-poppins">
//           This is my official Portfolio website to show all my details and work experience in web development.
//         </p>

//         <div className="flex space-x-4">
//           <button className="px-3 py-1 md:px-6 md:py-3 bg-slate-200 text-black rounded-lg hover:bg-primary hover:text-white transition duration-500">
//             Social Media
//           </button>
//           <button className="px-3 py-1 md:px-6 md:py-3 bg-slate-200 text-black rounded-lg hover:bg-primary hover:text-white transition duration-500">
//             Download CV
//           </button>
//         </div>
//       </div>

//       {/* Right Section - Image */}
//       <div className="w-2/3 sm:w-1/3 order-first my-5 sm:order-none">
//         <img className="w-full object-cover rounded-full" src={deepak} alt="profile" />
//       </div>
//     </section>
//   );
// };

// export default Home;
