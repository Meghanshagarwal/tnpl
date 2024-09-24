import React from 'react';
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'


const MatchResult = () => {
  return (
    <div className="bg-[#512bab]  text-white py-6">
        {/* <hr className=' w-full border border-gray-500' /> */}
      <div className="container mx-auto text-center">
        {/* Final match venue */}
        <h3 className="text-yellow-400 font-bold text-lg">FINAL, MA Chidambaram Stadium, Chennai</h3>

        {/* Match result */}
        <h1 className="text-white font-bold text-2xl mt-2">DINDIGUL DRAGONS WON BY 6 WICKETS (WINNERS)</h1>

        {/* Teams score section */}
        <div className="flex justify-center items-center mt-4">
          {/* Lyca Kovai Kings */}
          <div className="flex flex-col items-center mr-8">
            <img src={logo1} alt="Lyca Kovai Kings" className="w-16 h-16" />
            <p className="text-4xl font-bold mt-2">129-7</p>
            <p className="text-sm">20.0 ov | RR: 6.45</p>
          </div>

          {/* VS text */}
          <div className="text-4xl font-bold mx-8">VS</div>

          {/* Dindigul Dragons */}
          <div className="flex flex-col items-center ml-8">
            <img src={logo2} alt="Dindigul Dragons" className="w-16 h-16" />
            <p className="text-4xl font-bold mt-2">131-4</p>
            <p className="text-sm">18.2 ov | RR: 7.15</p>
          </div>
        </div>

        {/* Match Centre button */}
        <div className="mt-6">
          <button className="bg-yellow-400 text-purple-900 font-bold py-2 px-6 rounded-lg hover:bg-white">
            MATCH CENTRE
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchResult;
