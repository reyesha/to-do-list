import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            strike: false
        }
    }

    deleteToDo = (todoId) => {
        console.log(todoId)
        this.props.deleteToDo(todoId);
    }
    toLineThrough = () => {
        const doesClick = this.state.strike;
        this.setState({ strike: !doesClick });
    }

    // replace style as a className
    // refactor all class into className
    render() {
        return (
            <React.Fragment>
                <li onClick={this.toLineThrough} style={{ textDecoration: this.state.strike ? 'line-through' : 'none' }}>{this.props.todo.text}<span class="close" onClick={() => this.deleteToDo(this.props.todo.id)}>&times;</span></li>
            </React.Fragment>
        );
    }
}

export default TodoItem;