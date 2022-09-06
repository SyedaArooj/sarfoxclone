import React from 'react'
import Topbar from './Components/Topbar'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Belowheader from './Components/Belowheader';
import Services from './Components/Services';
import Monitoring from './Components/Monitoring';
import Numbering from './Components/Numbering'
import Team from './Components/Team'
import Chooseus from './Components/Chooseus'
import Skill from './Components/Skills'

// import Category from './Components/Category';

function App() {
  return (
    <div>
       <Topbar/>
       <Navbar/>
       <Header/>
       <Belowheader/>
       <Services/>
       <Monitoring/>
       <Numbering/>
       <Chooseus/>
       <Team/>
       <Skill/>


    </div>
  )
}
export default App;