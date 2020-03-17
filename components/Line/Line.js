import React from 'react';
import './Line.css';
import AUX from '../../hoc/Auxilary'
import aux from '../../hoc/Auxilary';

const Line = (props) =>{
    let x1 = props.x1+20;
    let y1 = props.y1+20-50;
    // top right
    let x2 = props.x2+20;
    let y2 = props.y2+20-50;
    // distance
    let length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
    // center
    let cx = ((x1 + x2) / 2) - (length / 2);
    let cy = ((y1 + y2) / 2) - (10 / 2);
    // angle
    let angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);
    let x = ((x1 + x2) / 2);
    let y = ((y1 + y2) / 2)- (10 / 2);
    const style = {
        left: cx+'px',
        top: cy+'px',
        width: length+'px',
        transform: 'rotate('+angle+'deg)',
        height: '10px'  

    }
    // make hr
    const coststyle = {
        left: x+'px',
        top: y+'px',
        position: 'absolute'
    }
    
    return(
        <AUX>
            <div style= {style} className = 'Linedraw btn-animated' id = {props.id}/>
            <p style = {coststyle}>
            {props.cost}
            </p>
            </AUX>
        
    );
}

export default Line;