import React from 'react';
import './App.css';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';
import { Element } from 'react-scroll';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home/Home';
import Nosotros from './Components/Quienes somos/Nosotros';
import Contacto from './Components/Contacto/Contacto';
import Logo from './logo.png'


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

    <Element name="nosotros" className="section" style={{ height: '300vh' }}>
      <Nosotros/>
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

