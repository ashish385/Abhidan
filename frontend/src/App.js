
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Demo from './assets/Demo';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import How_it_works from './components/How_it_works/HowitWorks';
import Ngos from './components/NGO\'s/Ngos';



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
						path='/Ngos'
						element={<Ngos />}
					/>
					<Route
						path='/demo'
						element={<Demo />}
					/>
					<Route
						path='/How_it_Works'
						element={<How_it_works />}
					/>
					<Route
						path='/Footer'
						element={<Footer />}
					/>
				</Routes>
			</BrowserRouter>
			{/* <Footer/> */}
		</div>
	);
}

export default App;
