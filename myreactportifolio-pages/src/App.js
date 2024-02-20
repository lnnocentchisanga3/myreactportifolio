import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components as Pages
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';

class App extends React.Component {
  render (){
    return <div className="App">
      <header className="App-header">
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />}/>
          <Route index element={<Home />}/>
          <Route path='About' element={<About />}/>
          <Route path='Projects' element={<Projects />}/>
          <Route path='Contact' element={<Contact />}/>

          
        </Routes>
      </Router>
        <h2 className='myname'>CHISANGA INNOCENT</h2>
      </header>
    </div>;
  }
}

export default App;
