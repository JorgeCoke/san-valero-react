import React from 'react';
import './TodoItem.css';
import Boton from './Boton';

function TodoItem(props) {
    return (
        <div className="todo-item">
            <span className="todo-text">{props.text}</span>
            <Boton 
                classes="todo-button danger" 
                onClick={props.onClickDelete} 
                label="Delete 🗑">
            </Boton>
        </div>
    );
}
export default TodoItem;