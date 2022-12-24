
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Ngopage from './components/Ngo/Ngopage';
import Sign from './components/Pages/UserRegistration';

  

function App() {
  return (
    <div >
     
      <BrowserRouter>
        <Routes>
          <Route exact  element={ <Navbar /> } />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/ngo' element={<Ngopage />} />
          <Route path='/sign' element={<Sign/>} />
        </Routes>
      </BrowserRouter>
     {/* <Footer/> */}
      </div>
      
    
  );
}

export default App;
