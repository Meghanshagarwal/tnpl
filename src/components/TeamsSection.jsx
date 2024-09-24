import React from 'react';
import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'
import team4 from '../assets/team4.png'
import team5 from '../assets/team5.png'
import team6 from '../assets/team6.png'
import team7 from '../assets/team7.png'
import team8 from '../assets/team8.png'




// Sample team data with logos (Make sure to import or link your actual logos)
const teams = [
  { id: 1, name: 'Salem Spartans', logo: team1 },
  { id: 2, name: 'Chepauk Super Gillies', logo: team2 },
  { id: 3, name: 'Lyca Kovai Kings', logo: team3 },
  { id: 4, name: 'Siechem Madurai Panthers', logo: team4 },
  { id: 5, name: 'Trichy Warriors', logo: team5 },
  { id: 6, name: 'Nellai Royal Kings', logo: team6 },
  { id: 7, name: 'Dindigul Dragons', logo: team7 },
  { id: 8, name: 'iDream Tiruppur', logo: team8 },
];

const TeamsSection = () => {
  return (
    <div className="bg-[#381F73] text-white py-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-start">Teams</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {teams.map((team) => (
            <div key={team.id} className="flex justify-center">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img src={team.logo} alt={team.name} className="mx-auto mb-4 h-32 w-32 object-contain" />
                <p className="text-center text-lg font-bold text-purple-900">{team.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsSection;
