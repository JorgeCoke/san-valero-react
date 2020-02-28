import React from 'react';
import logo from './logo.svg';
import './App.css';
import Boton from './components/Boton';
import TodoItem from './components/TodoItem';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
        {text: 'Comprar el pan'},
        {text: 'Aprender React'},
        {text: 'Ir al cina'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            San Valero & Hiberus - ToDo App
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Boton label="Añadir" onClick={() => alert('Has clickado Añadir')}></Boton>
          <Boton label="Limpiar todo" onClick={() => alert('Has clickado Limpiar')}></Boton>

          {
            this.state.todos.map((todo, index) => {
              return (<TodoItem key={index} text={todo.text}></TodoItem>)
            })
          }

  
        </header>
      </div>
    );
  }

  
}

export default App;
