import React, { Component } from 'react';

class TodoItem extends Component {
    deleteToDo = (todoId) => {
        console.log(todoId)
        this.props.deleteToDo(todoId);
    }

    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.todo.text}<span class="close" onClick={() => this.deleteToDo(this.props.todo.id)}>&times;</span></li>
                </ul>
            </div>
        );
    }
}

export default TodoItem;