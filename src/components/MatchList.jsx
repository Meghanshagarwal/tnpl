// src/components/MatchList.js
import React from "react";

const matches = [
  { team1: "Team A", team2: "Team B", date: "September 24, 2024", time: "7:00 PM" },
  { team1: "Team C", team2: "Team D", date: "September 25, 2024", time: "5:00 PM" },
  { team1: "Team E", team2: "Team F", date: "September 26, 2024", time: "7:30 PM" },
];

const MatchList = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Matches</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {matches.map((match, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4">
            <h3 className="text-xl font-semibold">{match.team1} vs {match.team2}</h3>
            <p>{match.date}</p>
            <p>{match.time}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchList;
