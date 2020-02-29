import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Boton from './components/Boton';
import TodoItem from './components/TodoItem';
import {useStoreState, useStoreActions} from 'easy-peasy';

function App() {

  // Store
  const todos = 
    useStoreState(state => state.todos.items);
  const addTodo = 
    useStoreActions(actions => actions.todos.addTodo);
  const removeTodos = 
    useStoreActions(actions => actions.todos.removeTodos);

  // Hook
  const [inputText, setInputText] = useState('');

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>San Valero & Hiberus - ToDo App</p>
          <input 
            className="todo-input" 
            type="text" 
            value={inputText} 
            onChange={(event) => setInputText(event.target.value)}>
          </input>

          <Boton 
            label="Añadir" 
            classes="success" 
            onClick={() => {
              addTodo({text: inputText})
              setInputText('')
            }}>
          </Boton>

          {
            todos.map((todo, index) => {
              return (<TodoItem 
                        key={index} 
                        text={todo.text} 
                        index={index}>
                      </TodoItem>)
            })
          }

          <Boton 
            label="Limpiar todo" 
            classes="warning" 
            onClick={() => {
              removeTodos()
            }}>
          </Boton>
  
        </header>
      </div>
    );
}

export default App;
