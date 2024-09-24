import React from 'react';
import ravichandranAshwin from '../assets/Ravichandran Ashwin.png'
import vigneshP from '../assets/Vignesh P.png';


const matchResults = [
  {
    id: 1,
    matchType: 'FINAL',
    team1: { name: 'Lyca Kovai Kings', score: '129/7', overs: '20.0 Overs' },
    team2: { name: 'Dindigul Dragons', score: '131/4', overs: '18.2 Overs' },
    result: 'DINDIGUL DRAGONS WON BY 6 WICKETS (WINNERS)',
    venue: 'MA Chidambaram Stadium, Chennai',
    dateTime: '4 AUG 2024, 7:15 pm IST',
    player: { name: 'Ravichandran Ashwin', runs: '52(46)', image: ravichandranAshwin },
  },
  {
    id: 2,
    matchType: 'QUALIFIER 2',
    team1: { name: 'Chepauk Super Gillies', score: '108', overs: '19.4 Overs' },
    team2: { name: 'Dindigul Dragons', score: '112/1', overs: '10.5 Overs' },
    result: 'DINDIGUL DRAGONS WON BY 9 WICKETS (QUALIFIED)',
    venue: 'MA Chidambaram Stadium, Chennai',
    dateTime: '2 AUG 2024, 7:15 pm IST',
    player: { name: 'Vignesh P', wickets: '3/8', image: vigneshP },
  },
  {
    id: 3,
    matchType: 'ELIMINATOR',
    team1: { name: 'Siechem Madurai Panthers', score: '158/6', overs: '20.0 Overs' },
    team2: { name: 'Dindigul Dragons', score: '161/6', overs: '19.5 Overs' },
    result: 'DINDIGUL DRAGONS WON BY 4 WICKETS (QUALIFIED)',
    venue: 'NPR College Ground, Dindigul',
    dateTime: '31 JUL 2024, 7:15 pm IST',
    player: { name: 'Ravichandran Ashwin', runs: '57(35)', image: ravichandranAshwin },
  }
];

const MatchResults = () => {
  return (
    <div className="bg-[#381F73]  text-white py-8">
      <div className="container mx-auto">
        {/* Results heading */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Results</h2>
          <a href="/more-results" className="text-blue-400 hover:text-blue-500">See More</a>
        </div>

        {/* Matches container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchResults.map((match) => (
            <div key={match.id} className="bg-white text-purple-900 rounded-lg shadow-lg p-4">
              {/* Match Type */}
              <div className="bg-yellow-400 text-center font-bold py-1 rounded-t-md mb-4">{match.matchType}</div>

              {/* Teams and Scores */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xl font-bold">{match.team1.score}</p>
                  <p className="text-gray-600">{match.team1.overs}</p>
                </div>
                <div className="text-lg font-bold">VS</div>
                <div>
                  <p className="text-xl font-bold">{match.team2.score}</p>
                  <p className="text-gray-600">{match.team2.overs}</p>
                </div>
              </div>

              {/* Match Result */}
              <p className="text-purple-900 font-bold mt-4">{match.result}</p>

              {/* Venue and Date */}
              <p className="text-gray-600 mt-2">{match.venue}</p>
              <p className="text-gray-600 text-sm">{match.dateTime}</p>

              {/* Player of the Match */}
              <div className="flex items-center mt-4">
                <img src={match.player.image} alt={match.player.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold">{match.player.name}</p>
                  <p className="text-gray-600">{match.player.runs ? `Runs: ${match.player.runs}` : `Wkts: ${match.player.wickets}`}</p>
                  <p className="text-blue-400 font-bold">PLAYER OF THE MATCH</p>
                </div>
              </div>

              {/* View Match Centre button */}
              <div className="mt-6 text-center">
                <button className="bg-purple-900 text-white py-2 px-4 rounded-lg hover:bg-purple-800">
                  View Match Centre
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchResults;
