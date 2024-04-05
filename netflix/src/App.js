import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./App.css";
import Banner from './components/Banner/Banner';
import Suggestions from './components/Suggestions/Suggestions';
import { originals,action,HorrorMovies,romance } from './Urls';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <Suggestions url={originals} title='Netflix Orginals'/>
      <Suggestions url={action} title='Action' isSmall />
      <Suggestions url={HorrorMovies} title='Horror' isSmall />
      <Suggestions url={romance} title='Romance' isSmall />
    </div>
  )
}

export default App
