// import React from 'react'
// import { Route , Routes } from 'react-router-dom'
// import Home from './pages/Home'

// const App = () => {
//   return (
//     // <div>

//     //   <Routes>
//     //     <Route path='/' element={<Home/>} />
//     //   </Routes>

//     // </div>
//   )
// }

// export default App

// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MatchList from "./components/MatchList";
import Footer from "./components/Footer";
import MatchResult from "./components/MatchResult";
import MatchResults from "./components/MatchResults";
import Teams from "./components/TeamsSection";
import TeamsSection from "./components/TeamsSection";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <MatchResult/>
      <MatchResults/>
      <TeamsSection/>
      {/* <MatchList /> */}
      <Footer />
    </div>
  );
}

export default App;
