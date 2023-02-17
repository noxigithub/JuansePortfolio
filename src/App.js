import { useState } from 'react';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Header from './components/header.js';
import Portfolio from './components/portfolio'; import { SkillContext } from './helpers/context';

function App() {


  const [skills, setSkills] = useState([]);
  return (
    <SkillContext.Provider value={{skills,setSkills}}>
      <div className="App">
        <Header />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </SkillContext.Provider>
  );
}

export default App;
