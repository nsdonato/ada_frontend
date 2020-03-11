import React from 'react';
import Button from './components/Button';

function App() {
  const esMayor = false;
  return (
    <div className="App">
      {/*Conditional rendering*/}
      { esMayor ? 'Es mayor de edad' : 'No es mayor de edad'}
      <div>
      <Button mensaje="Mostrar"/>
      <Button mensaje="Cancelar"/>
      <Button mensaje="Enviar"/>
      <Button mensaje="Comprar"/>
      </div>
    </div>
  );
}

export default App;
