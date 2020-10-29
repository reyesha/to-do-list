import React, { Component } from 'react';
import { deleteTodo, toggleTodo } from '../apis/todos';
import { Row, Col } from 'antd';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            strike: false
        }
    }

    deleteToDo = (todoId) => {
        deleteTodo(todoId).then(()=> {
            this.props.deleteToDo(todoId);
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
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                        <li onClick={this.toLineThrough} style={{ textDecoration: this.props.todo.done ? 'line-through' : 'none' }} className="todoList">{this.props.todo.todoItem}</li><span className="close" onClick={() => this.deleteToDo(this.props.todo.id)}>&times;</span>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default TodoItem;