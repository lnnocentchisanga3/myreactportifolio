import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{
	return (
		<nav className="navbar navbar-expand-sm bg-white">
		<ul className="list-inline">
			<li className="list-inline-item">
			<Link className="nav-link text-primary px-3 py-3" to="/">Home</Link>
			</li>
			<li className="list-inline-item">
			<Link className="nav-link text-primary px-3 py-3 " to="/Contact">Contact Me</Link>
			</li>
		</ul>

		</nav>
	);
}

export default Navbar;