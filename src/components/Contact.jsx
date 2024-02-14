import React from 'react';
import { Link } from 'react-router-dom';

const Contact =()=>{
	return(
   <div className="container-fluid">
    <div className='row'>
    <div className='col-md-4 my-5 pt-4 slide bg-primary rounded mx-2'>
    <p className='my-5 text-white'>
    <cite>
    <span className='cite'>"</span>Beyond the titles, I'm a radical entrepreneur at heart, always on the lookout for opportunities 
        to disrupt the status quo and leave my mark on the digital landscape.
        <br/>
        If you're seeking a reliable data oriented Person, a tech-savvy IT assistant, or a 
        visionary entrepreneur to partner with, you've come to the right place. Let's connect, collaborate, 
        and create something extraordinary together. 
        The future is ours to shape, one line of code at a time. 💻✨<span className='cite'>"</span>
    </cite><br/>
    <i>--Innocent Chisanga</i>
    </p>
    </div>
        <div className='col-md-6 m-auto  bg-white contact'>
        <div className="mt-5 px-3">
            <h1 className="display-5 text-uppercase py-2"><span className='text-primary'>Contact</span> Me</h1>
            <p className="lead">Feel free to reach out to me via the following methods:</p>
            <div className="row py-3">
                <div className="col-md-6">
                <h3>Email</h3>
                <p>Drop me an email at: <Link to="mailto:lnnocentchisanga3@gmail.com" className='nav-link text-primary'>lnnocentchisanga3@gmail.com</Link></p>
                </div>
                <div className="col-md-6">
                <h3>Phone</h3>
                <p>Give me a call at: <Link to="tel:+260979023093" className='nav-link text-primary'>+260979023093</Link></p>
                </div>
            </div>
            <div className="row py-3">
                <div className="col-md-12">
                <h3>Social Media</h3>
                <p>Connect with me on:</p>
                <ul className="list-inline">
                    <li className="list-inline-item"><Link to='https://web.facebook.com/maluine.ic.167/?_rdc=11&_rdr' className='nav-link text-primary'>Facebook</Link></li>
                    <li className="list-inline-item"><Link to='https://github.com/lnnocentchisanga3' className='nav-link text-primary'>Twitter</Link></li>
                    <li className="list-inline-item"><Link to='https://zm.linkedin.com/in/chisanga-innocent-29940215b' className='nav-link text-primary'>LinkedIn</Link></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
  </div>
    );
}

export default Contact;