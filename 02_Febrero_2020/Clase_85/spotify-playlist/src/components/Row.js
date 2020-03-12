import React from 'react';
import './Row.css';

const Row = (props) => {

    return (
        <tr className="border_bottom">
            <td className="txt-center">{props.info.position}</td>
            <td className="txt-center">{props.liked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}</td>
            <td>{props.info.title}</td>
            <td className="txt-center">{props.info.duration.substring(0,1)+':'+props.info.duration.substring(1,3)}</td>
            <td className="txt-center"><i className="fas fa-signal"></i></td>
        </tr>
    )
}

export default Row;