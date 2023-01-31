
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
// import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Ngopage from './components/NGO/Ngopage';

import Login from './components/pages/Login';
import UserRegistation from './components/pages/UserRegistation';

  

function App() {
  return (
    <div >
     
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/demo' element={<Demo/>} /> */}
          <Route path='/signup' element={<UserRegistation />} />
          <Route path='/login' element={<Login />} />
          <Route path='/ngoprofile' element={<Ngopage />} />
          <Route path='/gallery' element={<Gallery/> } />
        </Routes>
      </BrowserRouter>
     
      </div>
      
    
  );
}

export default App;
