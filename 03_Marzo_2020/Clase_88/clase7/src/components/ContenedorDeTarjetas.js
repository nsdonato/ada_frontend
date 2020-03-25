import React from 'react';
import Card from './Card'
import './ContenedorDeTarjetas.css'

const ContenedorDeTarjetas = ({gatos}) => {

  return(
    <div className="cardContainer">
    {
      gatos.map((gato, i) => 
      <Card 
        key={i} 
        name={gato.name}
        shortDesc={gato.shortDesc}
        img={gato.img}
        isAvailable={gato.disponible}/>)
    }
  </div>
  )
};

export default ContenedorDeTarjetas;
