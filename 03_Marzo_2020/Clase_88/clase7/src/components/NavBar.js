import React from 'react';
import styled from 'styled-components';
import icono from '../img/hamburguer.png';

const Nav = styled.nav`
  background-color: ${prop => prop.hayEmergenciaAdopteril ? 'red' : '#1a75bc'};
  height: 80px;
  padding: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    cursor: pointer;
    background-color: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: red;
    border: 2px solid red;
    margin: 0 5px;
    padding: 2px;
  }
  img {
    width: 25px;
    height: auto;
  }
  div {
    border: ${prop => prop.esElDiaInternacionalDeLaMujer ? 'blue' : 'red'};
    padding: 2px;
    p {
      color: ${prop => prop.hayEmergenciaAdopteril ? 'pink' : 'yellow'};
    }
  }
`;

const NavBar = ({ propNombre }) => {
  return (
    <Nav hayEmergenciaAdopteril={true} esElDiaInternacionalDeLaMujer={true}>
      <div>
        <p>{propNombre}</p>
      </div>
      <img alt="menu" src={icono} />
      <button>Boton</button>
      <p>Hola chicas</p>
    </Nav>
  );
};

export default NavBar;

// CSS-in-JS
