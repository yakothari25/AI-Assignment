import React from 'react';
import './Node.css'
import Aux from '../../hoc/Auxilary';

const Node = (props) =>{
    let y = props.y-50;
    const style = {
        position: 'absolute',
        
        left: props.x,
        top: y,
        
        }


    return(
        <a style = {style} className="btn btn-white btn-animated" id = {props.id} onClick = {props.click}>
            {props.name}
        </a>
    );
}

export default Node;