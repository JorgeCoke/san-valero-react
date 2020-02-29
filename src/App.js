import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Boton from './components/Boton';
import TodoItem from './components/TodoItem';

function App() {

  const [todos, setTodos] = useState([
    {text: 'Comprar el pan'},
    {text: 'Aprender React'},
    {text: 'Ir al cine'}
  ]);

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
              setTodos([...todos, {text: inputText}])
              setInputText('')
            }}>
          </Boton>

          {
            todos.map((todo, index) => {
              return (<TodoItem 
                        key={index} 
                        text={todo.text} 
                        onClickDelete={() => {
                          setTodos([...todos.filter((todo, j) => {
                            return j !== index // ! = =
                          })])
                        }}>
                      </TodoItem>)
            })
          }

          <Boton 
            label="Limpiar todo" 
            classes="warning" 
            onClick={() => setTodos([])}>
          </Boton>
  
        </header>
      </div>
    );
}

export default App;
