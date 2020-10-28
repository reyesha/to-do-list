import React, { Component } from 'react';
import { deleteTodo, toggleTodo } from '../apis/todos';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            strike: false
        }
    }

    deleteToDo = (todoId) => {
        deleteTodo(todoId).then(response => {
            this.props.deleteToDo(response.data.id);
        })
    }

    toLineThrough = () => {
        
        // this.props.toggleTodo()
        toggleTodo(this.props.todo).then(response => {
            const doesClick = this.state.strike;
            this.setState({ strike: !doesClick });
            this.props.toggleTodo(response.data.id);
        })
    }

    // replace style as a className
    // refactor all class into className
    render() {
        return (
            <React.Fragment>
                <li onClick={this.toLineThrough} style={{ textDecoration: this.state.strike ? 'line-through' : 'none' }}>{this.props.todo.text}<span className="close" onClick={() => this.deleteToDo(this.props.todo.id)}>&times;</span></li>
            </React.Fragment>
        );
    }
}

export default TodoItem;