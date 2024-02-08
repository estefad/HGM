import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contacto from './Components/Contacto/Contacto'
import Menu from './Components/Menu/Menu';
import Home from './Components/Home/Home';
import Nosotros from './Components/Quienes somos/Nosotros';
import Footer from './Components/Footer/Footer';

function App() {
  return (
  <>
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1 className='tit'>HGM CONSULTORES</h1>
        </header>
        <Routes>
          <Route path="/" element={<Menu/>}> 

            <Route index element={<Home/>} />
            <Route path='Contacto' element={<Contacto/>}/>
            <Route path='Nosotros' element={<Nosotros/>}/>
          </Route>
        </Routes>  
      </div>  
      <Footer/>
    </BrowserRouter>
    
  </>
    //PATH= RUTAS RAIZ, OSEA A DONDE VOY
    //footer solo lo linkeo para que aparezca en todas las secciones
  );
}

export default App;
