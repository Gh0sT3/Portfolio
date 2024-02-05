import './App.css';
import React, { useState } from 'react';
import ShowInfo from './showInfo';
import NavButton from './NavButton';


function App() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my Portfolio</h1>
      </header>
      <div className="content">
        <nav>
          <NavButton text="About Me" setActiveSection={setActiveSection} activeSection={activeSection} />
          <NavButton text="Projects" setActiveSection={setActiveSection} activeSection={activeSection} />
          <NavButton text="Contact Me" setActiveSection={setActiveSection} activeSection={activeSection} />
          <NavButton text="Cat Pictures" setActiveSection={setActiveSection} activeSection={activeSection} />
        </nav>
        <main>
          <ShowInfo activeSection={activeSection} />
        </main>
      </div>
      <footer className="App-footer">
        <p>Thank you for visiting my portfolio</p>
      </footer>
    </div>
  )
}

export default App;
