
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Demo from './assets/Demo';
import About from './components/About/About';
// import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/pages/Login';
import UserRegistation from './components/pages/UserRegistation';



function App() {
  return (
    <div >
     
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/demo' element={<Demo/>} /> */}
          <Route path='/userRegister' element={<UserRegistation />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
     
      </div>
      
    
  );
}

export default App;
