import React, { Component } from 'react';
import TodoItemContainer from '../containers/TodoItemContainer';

class DoneList extends Component {
    render() {
        const todos = this.props.todos.filter(todo => todo.done === true).map((todo) => (
            <TodoItemContainer key={todo.id} todo={todo}/>
        ));
        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

export default DoneList;