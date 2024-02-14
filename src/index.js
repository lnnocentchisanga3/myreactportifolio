import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components as Pages
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      fname: "CHISANGA",
      lname: "INNOCENT"
    }
    
  }
  render (){
    return <div className="App">
      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route exact path='/' element={<Navbar />}/>
          <Route index element={<Home />}/>
          <Route path='About' element={<About />}/>
          <Route path='Projects' element={<Projects />}/>
          <Route path='Contact' element={<Contact />}/>

          
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <h2>{this.state.fname}</h2> */}
    </div>;
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
