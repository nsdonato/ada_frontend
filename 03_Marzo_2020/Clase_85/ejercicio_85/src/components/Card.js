import React from 'react';
import Button from './Button';

const Card = props => {
    return (
        <div className="card">
            <div className="card_img">
                <img src={props.info.img} alt="" />
            </div>
            <div className="card_info">
                <h3>{props.info.name}</h3>
                <p>{props.info.shortDesc}</p>
                <Button>Ver mas</Button>
            </div>
        </div>
    )
}

export default Card;