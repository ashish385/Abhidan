
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Demo from './assets/Demo';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <div >
     
      <BrowserRouter>
        <Routes>
          <Route exact  element={ <Navbar /> } />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/demo' element={<Demo/>} />
        </Routes>
      </BrowserRouter>
     {/* <Footer/> */}
      </div>
      
    
  );
}

export default App;
