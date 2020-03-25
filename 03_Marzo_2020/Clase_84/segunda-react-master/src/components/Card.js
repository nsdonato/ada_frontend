import React from 'react';
import './Card.css';

const Card = props => {
  // conditional rendering
  // react no se puede usar if ni else, si se puede usar: conditional rendering y expresiones javascript
  // operador ternario = condiction que puede ser true o false
  // condicion es true ? codigo que necesito si es tru :  codigo que necesito si es false
  return (
    <div className="card">
      <div className="container">
        <img src={props.info.thumbnail} alt="" />
        <h5>{props.info.title}</h5>
        <div className="moreInfo">
          <h6 className="price">$ {props.info.price}</h6>

          <h6>{props.info.free_shipping ? <i className="material-icons">local_shipping</i> : ''}</h6></div>
      </div>
    </div >
  );
};

export default Card;