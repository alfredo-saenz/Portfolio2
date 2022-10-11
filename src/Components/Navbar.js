import React from 'react';
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {useRef} from 'react'
import './Navbar.css'

function Navbar(props) {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }
    return (
			<header>
                <h4>Alfredo Saenz</h4>
				<nav ref={navRef}>
					<a href='/#'>About me</a>
					<a href='/#'>Projects</a>
					<a href='/#'>Contact</a>
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
