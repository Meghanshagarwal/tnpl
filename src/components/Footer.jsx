// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer >
      <div className="w-full bg-[#381F73] px-4 text-white pt-8 pb-8 flex flex-col  md:flex-row md:flex-wrap justify-between md:px-12">
      <div>
        <h2 className="font-bold text-lg mt-4">Teams</h2>
        <div className="text-md gap-2">
          <p className="hover:text-yellow-600 cursor-pointer pt-2">Lyca Kovai Kings</p>
          <p className="hover:text-yellow-600 cursor-pointer pt-2">Nellai Royal Kings</p>
          <p className="hover:text-yellow-600 cursor-pointer pt-2">Chepauk Super Gillies</p>
          <p className="hover:text-yellow-600 cursor-pointer pt-2">Dindigul Dragons</p>
          <p className="hover:text-yellow-600 cursor-pointer pt-2">
          Siechem Madurai Panthers</p>
          <p className="hover:text-yellow-600 cursor-pointer pt-2">Idream Tiruppur Tamizhans</p>
          <p className="hover:text-yellow-600 cursor-pointer pt-2">Trichy Grand Cholas</p>
          <p className="hover:text-yellow-600 cursor-pointer pt-2">SKM Salem Spartans</p>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-lg mt-4">Latest Updates</h2>
        <div className="text-md gap-2 ">
          <p className="hover:text-yellow-600 cursor-pointer pt-2">Videos</p>
          <p className="hover:text-yellow-600 cursor-pointer pt-2">Photos</p>
          <p className="hover:text-yellow-600 cursor-pointer pt-2">News</p>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-lg mt-4 ">Guidelines</h2>
        <div className="text-md gap-2 pt-3">
          <p className="hover:text-yellow-600 cursor-pointer ">TNPL Code of Conduct</p>
          <p className="hover:text-yellow-600 cursor-pointer pt-2">Governing Council</p>
          <p className="hover:text-yellow-600 cursor-pointer pt-2">Anti Corruption Policy</p>
         
        </div>
      </div>
      <div>
        <h2 className="font-bold text-lg mt-4">Contact</h2>
        <div className="text-md gap-2">
          <p className="hover:text-yellow-600 cursor-pointer pt-2">Contact Us</p>
          <p className="hover:text-yellow-600 cursor-pointer pt-2">Privacy Policy</p>
          <p className="hover:text-yellow-600 cursor-pointer pt-2">Terms of Use</p>
        </div>
      </div>
      </div>
      <div className="bg-[#32176A] w-full h-[50px] text-center text-white text-sm flex items-center justify-center">Copyright © TNPL 2024 All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
