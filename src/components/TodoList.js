import React, { Component } from 'react';
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';
import TodoGroupContainer from '../containers/TodoGroupContainer';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer';

class TodoList extends Component {
    render() {
        return (
            <div>
                <h2> TodoList </h2>
                <TodoGroupContainer />
                <TodoGeneratorContainer />
            </div>
        );
    }
}

export default TodoList;