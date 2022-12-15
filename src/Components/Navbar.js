import React from 'react';
// import {Link} from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar(props) {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};
	return (
		<header>
			<h5 className='home-logo'>Alfredo Saenz</h5>

			<nav className='nav-section' ref={navRef}>
				<a>
					<Link
						activeClass='active'
						to='about'
						spy={true}
						smooth={true}
						onClick={showNavbar}>
						About
					</Link>
				</a>
				<a>
					<Link
						activeClass='active'
						to='projects'
						spy={true}
						smooth={true}
						onClick={showNavbar}>
						Projects
					</Link>
				</a>
				<a>
					<Link
						activeClass='active'
						to='contact'
						spy={true}
						smooth={true}
						onClick={showNavbar}>
						Contact
					</Link>
				</a>

				<button className='nav-btn nav-close-btn' onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className='nav-btn' onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
