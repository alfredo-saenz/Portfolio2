import React from 'react';
import './Home.css';
import homepage from '../Images/homepage.png';
import './Navbar.css';
import CarouselContainer from './CarouselContainer';
import data from '../data.json';
import Navbar from './Navbar';
import 'remixicon/fonts/remixicon.css';

function Home(props) {
	return (
		<>
			<Navbar />
			<div className='homepage'>
				<div className='intro'>
					<h1 className='welcome'>Welcome</h1>
					<p className='welcome-intro'>
						Hello! My name is Alfredo Saenz and I'm a UI/UX designer
					</p>
				</div>
				<div>
					<img
						className='home-img'
						src={homepage}
						alt='An image of me (Alfredo Saenz) working on my computer doing codes'
					/>
				</div>
			</div>
			<div id='about' className='aboutpage'>
				<h1 className='about-me'>About Me</h1>
				<p className='about-me-section'>
					I am a software engineer and self-taught graphic designer based in
					Kansas City, Missouri. I am dedicated to the pursuit of developing
					solutions that make benefit of best-practice technologies to provide
					the best user experiences.
				</p>
			</div>
			<div id='projects' className='projectspage'>
				<h1 className='projects-title'>My Projects</h1>
				<CarouselContainer data={data} />
			</div>
			<div id='contact' className='contactpage'>
				<h1 className='contact-me'>Contact Me</h1>
				<div className='icons'>
					<a
						href='https://github.com/alfredo-saenz'
						target='_blank'
						className='icon icons--github'>
						<i className='ri-github-line'></i>
					</a>
					<a
						href='https://www.linkedin.com/in/alfredo-saenz/'
						target='_blank'
						className='icon icons--linkedin'>
						<i className='ri-linkedin-line'></i>
					</a>
				</div>
			</div>
		</>
	);
}

export default Home;
