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
        {text: 'Ir al cine'}
      ],
      inputText: ''
    };
  }
  
  deleteTodo(index) {
    let todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({todos: todos});
  }

  limpiarTodos() {
    this.setState({todos: []});
  }

  addTodo() {
    if (this.state.inputText) {
      let stateToUpdate = {
        todos: [...this.state.todos, {text: this.state.inputText}], 
        inputText: ''
      };
      this.setState(stateToUpdate);
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

          <input className="todo-input" type="text" value={this.state.inputText} 
          onChange={(event) => this.setState({inputText: event.target.value})}></input>

          <Boton label="Añadir" classes="success" onClick={() => this.addTodo()}></Boton>

          {
            this.state.todos.map((todo, index) => {
              return (<TodoItem 
                        key={index} 
                        text={todo.text} 
                        onClickDelete={() => this.deleteTodo(index)}>
                      </TodoItem>)
            })
          }

          <Boton label="Limpiar todo" classes="warning" onClick={() => this.limpiarTodos()}></Boton>
  
        </header>
      </div>
    );
  }

  
}

export default App;
