import React,{useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import HowitWorks from './components/How_it_Works/HowitWorks';
import Ngopage from "./components/Ngo/Ngopage"
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Nav from './components/Navbar/Nav';


function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <div >
     
      <BrowserRouter>
        {/* <Navbar /> */}
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/ngo' element={<Ngopage />} />
          <Route path='/gallery' element={<Gallery/> } />
          <Route path='/blog' element={<Blog/> } />
          <Route path='/howitworks' element={<HowitWorks/> } />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    
     
      </div>
      
    
  );
}

export default App;
