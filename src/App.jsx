import './App.css';
import {useState} from 'react';
import MensajeBienvenida from './mensaje';

function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleMensaje = (e) => {
    e.preventDefault();

    if (edad > 17) {
      setMensaje(`Bienvenido ${nombre}, gracias por usar nuestra aplicación`);
    } else {
      setMensaje(`Hola ${nombre}, eres muy joven para usar esta aplicación`);
    }
  };

  return (
    <>
      <form onSubmit={handleMensaje}>

        <label>
          Ingrese su nombre: 
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>

        <label>
          Ingrese su edad: 
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </label>

        <input type="submit" value="Validar" />

      </form>

      <MensajeBienvenida mensaje={mensaje} />
    </>
  );
}

export default App;
