import React from 'react';
import './Boton.css';

function Boton(props) {
  return (
    <button 
      className={'boton ' + props.classes} 
      onClick={props.onClick}>{props.label}
    </button>
  );
}

export default Boton;