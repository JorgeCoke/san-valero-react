import React from 'react';
import './Boton.css';

class Boton extends React.Component {
    render() {
      return (
        <button className="boton" onClick={this.props.onClick}>{this.props.label}</button>
      );
    }
  }

export default Boton;