import React from 'react';
import './Home.css';
import homepage from '../Images/homepage.png';
import './Navbar.css';
import CarouselContainer from './CarouselContainer';
import data from '../data.json';
import Navbar from './Navbar';
import 'remixicon/fonts/remixicon.css';
import Ash from '../Images/Untitled_Artwork 3.jpg';
import trakr from '../Images/Untitled_Artwork 4.jpg';
import world from '../Images/Untitled_Artwork 5.jpg';

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
					Hi there! My name is Alfredo Saenz, and I am a self-taught graphic
					designer and software engineer based in Kansas City, Missouri. My
					passion lies in creating innovative solutions that optimize the latest
					technologies to provide exceptional user experiences.
					<br></br>
					Throughout my career, I have been dedicated to refining my craft and
					staying up-to-date with the latest trends and best practices in the
					industry. My experience as a software engineer and graphic designer
					has given me a unique skill set, allowing me to approach challenges
					from multiple perspectives and come up with well-rounded solutions.
					<br></br>
					My goal is to continue to develop solutions that not only meet but
					exceed the expectations of my clients and end-users. If you're looking
					for a passionate and experienced software engineer and graphic
					designer to bring your ideas to life, let's connect!
				</p>
			</div>
			<div id='projects' className='projectspage'>
				<h1 className='projects-title'>My Projects</h1>
				<div className='projects-container'>
					<div className='project-box' id='box1'>
						<img className='img-box' src={Ash} alt='' />
						<h6 className='project-title'>Ashleigh's Kitchen</h6>
					</div>
					<div className='project-box' id='box2'>
						<img className='img-box' src={trakr} alt='' />
						<h6 className='project-title'>Trakr.</h6>
					</div>
					<div className='project-box' id='box3'>
						<img className='img-box' src={world} alt='' />
						<h6 className='project-title'>Hello World</h6>
					</div>
				</div>
				{/* <CarouselContainer data={data} /> */}
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
