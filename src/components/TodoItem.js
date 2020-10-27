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
        this.setState({strike: !doesClick});
    }

    render() {
        return (
            <div>
                <ul>
                    <li onClick={this.toLineThrough} style={{textDecoration: this.state.strike ? 'line-through': 'none'}}>{this.props.todo.text}<span class="close" onClick={() => this.deleteToDo(this.props.todo.id)}>&times;</span></li>
                </ul>
            </div>
        );
    }
}

export default TodoItem;