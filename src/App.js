import React from 'react';
import './App.css';
import Menu from './Components/Menu/Menu.jsx';
import Footer from './Components/Footer/Footer';
import { Element } from 'react-scroll';
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from '../src/images/logo.png'
import Home from './Components/Home/Home.jsx';
import SegIndustrial from './Components/Quienes somos/Seg.jsx';
import Contacto from './Components/Contacto/Contacto.jsx';
import Construccion from './Components/Quienes somos/Construccion.jsx';
import Ocupacional from './Components/Quienes somos/Ocupacional.jsx';



function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
        <img src={Logo} alt='logo'className='logo'></img>
        </header>

      <Router>
         {/* Menu de navegación */}
         <Menu />
         
    {/* Secciones */}
    
    <Element  name="home"  className="section" style={{ height: '90vh' }}>
      <Home/>
    </Element>

    <Element name="industrial" className="section" style={{ height: '140vh' }}>
      <SegIndustrial/>
    </Element>

    <Element name="construccion" className="section" style={{ height: '114vh' }}>
      <Construccion/>
    </Element>

    <Element name="ocupacional" className="section" style={{ height: '145vh' }}>
      <Ocupacional/>
    </Element>


    <Element name="contacto" className="section" style={{ height: '100vh'}}>
      <Contacto/>
    </Element>
  

    {/* Footer */}
    <Footer />
  </Router>
    </div>
    </>
  );
}

export default App;

