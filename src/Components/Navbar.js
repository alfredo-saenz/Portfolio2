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

                <h4><a href='/'>Alfredo Saenz</a></h4>

				<nav ref={navRef}>
                    {/* <Link to='/about'> */}
					<a href='/about'>About me</a>
                    {/* </Link> */}
                    {/* <Link to='/'> */}
					<a href='/projects'>Projects</a>
                    {/* </Link> */}
                    {/* <Link to='/contact'> */}
					<a href='/contact'>Contact</a>
                    {/* </Link> */}
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
