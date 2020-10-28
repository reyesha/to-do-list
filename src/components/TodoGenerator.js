import React, { Component } from 'react';
import { addTodo } from '../apis/todos';
import { Row, Col } from 'antd';
class TodoGenerator extends Component {

    onSubmit = (event) => {
        event.preventDefault();
        const text = event.target.todoInput.value;

        addTodo(text).then(response => {
            this.props.addTodo(response.data);
            event.target.todoInput.value = '';
        })
    }

    render() {
        return (
            <div>
                <Row>
                <Col span={8}></Col>
                <Col span={8}>
                <form onSubmit={this.onSubmit}>
                    <span>
                        <input type="text" placeholder="input a new todo here..." id="todoInput" name="todoInput" />
                        <input type="submit" value="ADD" class="example_a" />
                    </span>
                </form>
                </Col>
                <Col span={8}></Col>
                </Row>
            </div>
        );
    }
}

export default TodoGenerator;