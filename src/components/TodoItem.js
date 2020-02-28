import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
    render() {
        return (
        <div className="todo-item">
            <span>{this.props.text}</span>
        </div>
        );
    }
}
export default TodoItem;