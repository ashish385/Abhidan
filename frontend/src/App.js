
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Demo from './assets/Demo';
import About from './components/About/About';
<<<<<<< HEAD
// import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/pages/Login';
import UserRegistation from './components/pages/UserRegistation';
=======
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import How_it_works from './components/How_it_works/HowitWorks';
>>>>>>> 41e551daa65721c757159d84963d95d2d6ab6906



function App() {
  return (
<<<<<<< HEAD
    <div >
     
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/demo' element={<Demo/>} /> */}
          <Route path='/signup' element={<UserRegistation />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
     
      </div>
      
    
  );
=======
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
>>>>>>> 41e551daa65721c757159d84963d95d2d6ab6906
}

export default App;
