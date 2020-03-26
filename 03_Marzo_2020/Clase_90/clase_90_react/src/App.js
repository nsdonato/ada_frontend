import React, { useState } from 'react';
import styles from 'styled-components';
import './App.css';

const LaLoz = styles.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${prop => prop.switchLoz ? 'yellow' : 'black'}
`;

const TxtLaLoz = styles.h1`
  color: ${prop => prop.switchLoz ? 'black' : 'white'}
`;

function App() {
  const [switchLoz, setSwitchLoz] = useState(false);
  const [txtLoz, setTxtLoz] = useState('MAMÁ CORTASTE TODA LA LOOOOOZ');

  const handleClick = () => {
    setSwitchLoz(switchLoz ? false : true)
    setTxtLoz(switchLoz ? 'MAMÁ CORTASTE TODA LA LOOOOOZ' : 'AHÍ VOLVIÓ. ¡SACA LA MANO DE AHÍ CARAJO!');
  }

  return (
    <LaLoz switchLoz={switchLoz}>
      <TxtLaLoz switchLoz={switchLoz}>{txtLoz}</TxtLaLoz>
      <button onClick={handleClick}>Hacer click</button>
    </LaLoz>
  );
}

export default App;
