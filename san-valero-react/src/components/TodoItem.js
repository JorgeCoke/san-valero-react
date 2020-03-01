import React from 'react';
import './TodoItem.css';
import Boton from './Boton';
import {useStoreActions} from 'easy-peasy';

function TodoItem(props) {

    const removeTodo = 
        useStoreActions(actions => actions.todos.removeTodo);
  
    return (
        <div className="todo-item">
            <span className="todo-text">{props.text}</span>
            <Boton 
                classes="todo-button danger" 
                onClick={() => removeTodo(props.index)} 
                label="Delete 🗑">
            </Boton>
        </div>
    );
}
export default TodoItem;