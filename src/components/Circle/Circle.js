import React from "react";


const Circle = (props) =>{
    
    
    return(
        <svg height="40" width="40">
        <circle cx="25" cy="25" r="10" stroke="white" fill={props.color} />
      </svg> 
    );
}

export default Circle;