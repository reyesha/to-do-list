import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.todo.text}<span class="close" onClick={console.log("hello")}>&times;</span></li>
                </ul>
            </div>
        );
    }
}

export default TodoItem;