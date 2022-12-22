
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Demo from './assets/Demo';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import How_it_works from './components/How_it_works/HowitWorks';



function App() {
  return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						exact
						element={<Navbar />}
					/>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
					<Route
						path='/demo'
						element={<Demo />}
					/>
					<Route
						path='/How_it_Works'
						element={<How_it_works />}
					/>
					
				</Routes>
			</BrowserRouter>
			{/* <Footer/> */}
		</div>
	);
}

export default App;
