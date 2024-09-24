// src/components/Banner.js
import React from "react";
import banner1 from '../assets/banner1.jpg';

const Banner = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-auto flex items-end justify-center text-white mt-10"
      style={{ backgroundImage: `url(${banner1})`, minHeight: '600px' }} // Adjust minHeight as needed
    >
       {/* Overlay with gradient */}
       <div className="absolute inset-0 z-0" style={{
        content: '""',
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(72, 8, 56, 0) 0%, #381F73 90%)',
      }}></div>
      
      {/* Overlay to reduce background image opacity */}
      <div className="absolute inset-0 opacity-50 "></div>

      {/* Text content placed at the bottom of the banner */}
      <h1 className="relative text-4xl font-bold text-center px-4 py-6  hover:text-yellow-500 hover:font-bold transition-all duration-500 z-10">
        SPINNERS, WARRIER AND ASHWIN OUTGUN LYCA KOVAI KINGS TO LIFT THEIR MAIDEN TNPL TROPHY
      </h1>
    </div>
  );
};

export default Banner;
