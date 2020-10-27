import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
class TodoGenerator extends Component {
    
    onSubmit = (event) => {
        event.preventDefault();
        const text = event.target.todoInput.value;
        const id = uuidv4();
        const todo = { id: id, text: text};

        
        this.props.addTodo(todo);
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                    <span>
                        <input type = "text" placeholder = "input a new todo here..." id="todoInput" name="todoInput"/>
                        <input type = "submit" value="add" />
                    </span>
                </form>
            </div>
        );
    }
}

export default TodoGenerator;