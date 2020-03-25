import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const CardComp = styled.div`
  background-color: ${prop => prop.isAvailable ? '#1a75bc' : '#ccc'};
  margin: 20px;
  width: 500px;
  height: 200px;
  display: flex;
  overflow: hidden;
  color: #fff;
  transition: background-color 0.5s
  &:hover {
  background-color: #fed201;
  color: #000;
    button {
      color: #1a75bc;
      border: 1px solid #1a75bc;
    }
    h3 {
      color: #1a75bc;
    }
    img {
      transform: scale(2)
    }
  }
  .card_img {
    flex: 1;
    overflow: hidden;
    img {
      width: auto;
      height: 100%;
      transition: all 1s
    }
  }
  .card_info {
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 20px;
  }
`;

const Card = ({ name, shortDesc, img, isAvailable }) => {

  return (
    <CardComp isAvailable={isAvailable}>
      <div className="card_img">
        <img alt={name} src={img} />
      </div>
      <div className="card_info">
        <h3>{name}</h3>
        <p>
          {shortDesc}
        </p>
        <Button mensaje={isAvailable ? 'Ver mas' : 'No disponible'} estilo={"cardButton"} />
      </div>
    </CardComp>
  )
};

export default Card;










