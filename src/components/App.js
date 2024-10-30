import './App.css';
import React, { useState } from "react";


  
function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const remove = ()=> {

     setIsOpen("");
  };

  return (

    
    <header  className='header'>
        <nav>
            <div class="logo">
              <h1>Vikram's Portfolio</h1>
            </div>
            <div class="menu-icon" className={`menu-icon ${isOpen ? "change" : ""}`} onClick={toggleMenu}>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <ul id="nav-links" className={`nav-links ${isOpen ? "active" : ""}` } onClick={remove}>
                <li><a href="/">Home</a></li>
                <li><a href="#abt" >About</a></li>
                <li><a href="#exp">Experience</a></li>
                <li><a href="#pro">Projects</a></li>
                <li><a href="#cert">Certificates</a></li>
                <li><a href="#con">Contact</a></li>
            </ul>
        </nav>
    </header>
                           
    
  );
}

export default App;
