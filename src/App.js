import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import { Routes, Route } from 'react-router-dom';



function App() {
	return (
		<>
			{/* <Navbar /> */}
			<Home />


			{/* <Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
			</Routes> */}
		</>
	);
}

export default App;
