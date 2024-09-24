// src/components/Navbar.js
import React from "react";
import logo from '../assets/tnpl-logo.png';

const Navbar = () => {
  return (
    <div className="bg-custom-gradient h-[100px] flex items-center justify-between text-medium py-4 space-x-0 px-44 fixed top-0 left-0 w-full z-50 shadow-md">
       <img className="w-[92px] pt-5 pb-5 cursor-pointer" src={logo} alt="" />
       <ul className=" hidden md:flex justify-center text-base text-white gap-8 leading-tight:1.25 font-bold cursor-pointer">
        <li className=" hover:text-yellow-500">HOME</li>
        <li className=" hover:text-yellow-500">MATCHES</li>
        <li className=" hover:text-yellow-500">VIDEOS</li>
        <li className=" hover:text-yellow-500">STATS</li>
        <li className=" hover:text-yellow-500">POINTS TABLE</li>
        <li className=" hover:text-yellow-500">NEWS</li>
        <li className=" hover:text-yellow-500">PHOTOS</li>
        <li className=" hover:text-yellow-500">TEAMS</li>
        <li className=" hover:text-yellow-500">MORE</li>
       </ul>

    </div>
  );
};

export default Navbar;
