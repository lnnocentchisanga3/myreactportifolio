import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../avatar1.jpg';

const Home =()=>{
	
		return (
            <div className='container-fluid bg-white home' >
                  <div className='row'>
                  <div className='col-md-7 slide'>
                  <div className="mt-2 p-4 border-light shadow-sm rounded">
                        <h3 className="display-6 py-3"><span className='text-primary'>Hey there,</span> Iam <span className='text-primary'>Chisanga Innocent</span> & Welcome to my digital hub! 🚀</h3>
                        <p className="lead">
                              I'm an IT specialist by profesional based in Kasama Northern, Zambia, 
                              with a passion for programming and business innovation. 
                              With a focus on mastering data management and ICT solutions, 
                              I've built a portfolio showcasing my experts.</p>
                        <hr className='text-primary text-bold'/>
                        <ul className='nav'>
                              <li className='nav-item mx-3'><Link to='https://web.facebook.com/maluine.ic.167/?_rdc=11&_rdr' className='nav-link'>  FaceBook</Link></li>
                              <li className='nav-item mx-3'><Link to='https://github.com/lnnocentchisanga3' className='nav-link'>  GitHub</Link></li>
                              <li className='nav-item mx-3'><Link to='https://zm.linkedin.com/in/chisanga-innocent-29940215b' className='nav-link'> Linkedin</Link></li>
                        </ul>
                        <hr className='text-primary text-bold'/>
                        <p className="lead">I thrive on pushing boundaries and disrupting norms 
                        as a radical entrepreneur. Each project in my portfolio reflects 
                        my commitment to excellence and my drive to make an impact in the digital realm.
                         Let's connect and collaborate on something extraordinary! 💻✨</p>
                  </div>
                  </div>

                  <div className='col-md-5 mb-2 slide2'>
                  <img src={Avatar} alt='avatar' className='mx-auto col-md-12 shadow-sm img-fluid d-block rounded'/>
                  {/* <h4>Innocent Chisanga</h4> */}
                  </div>
                  </div>
            </div>
            );
}

export default Home;