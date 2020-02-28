import React from 'react';
import './TodoItem.css';
import Boton from './Boton';

class TodoItem extends React.Component {
    render() {
        return (
        <div className="todo-item">
            <span className="todo-text">{this.props.text}</span>
            <Boton classes="todo-button danger" onClick={this.props.onClickDelete} label="Delete 🗑"></Boton>
        </div>
        );
    }
}
export default TodoItem;