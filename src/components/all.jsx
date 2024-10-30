import React from 'react'
import Hero from './hero'
import App from './App'
import About from './About'
import Projectsection from './Projectsection'
import ContactUs from './ContactUs'
import Certificate from './Certificate'
import Progress from './Progress'
import Footer from './Footer'


export default function All() {
  return (
    <div>
    
      <App/>
      <Hero/>
          
      <About/>
      <Progress/>
      <Projectsection/>
      <Certificate/>
      <ContactUs/>
      <Footer/>
      </div>
  )
};
