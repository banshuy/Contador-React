import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/contador';
import logonaruto from './images/logo.png'

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={logonaruto}
          alt='logo' />
      </div>
      <div className='contenedor-principal'>
      <Contador numClick ={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClick={true}
          manejarClick={manejarClick}/>
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
