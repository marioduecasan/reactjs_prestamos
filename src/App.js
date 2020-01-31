import React, {Fragment, useState} from 'react';
import Header from './componentes/header';
import Formulario from './componentes/formulario';
import Mensaje from './componentes/mensaje';
import Resultado from './componentes/resultado';
import Spinner from './componentes/spinner'

function App() {

  //definer el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);
  
  let componente;

  if(cargando){
    componente = <Spinner/>
  }else if(total === 0){
    componente = <Mensaje/>
  }else{
    componente = <Resultado
                  total = {total}
                  plazo = {plazo}
                  cantidad = {cantidad}
                />
    }
  
  return (
    <Fragment>
      <Header
        titulo = "cotizador de prestamos"
      />
      <div className='container'>
        <Formulario
          cantidad = {cantidad}
          guardarCantidad = {guardarCantidad}
          plazo = {plazo}
          guardarPlazo = {guardarPlazo}
          guardarTotal = {guardarTotal}
          guardarCargando = {guardarCargando}
        />
        <div className="mensajes">
          {componente}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
