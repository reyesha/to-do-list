import React, { Component } from 'react';
import { addTodo } from '../apis/todos';
import { Row, Col } from 'antd';
import { Form, Input, Button } from 'antd';

class TodoGenerator extends Component {

        formRef = React.createRef();
    
    
    onSubmit = (values) => {
        const todoItem = values.text;
        this.formRef.current.resetFields()


        addTodo(todoItem).then(response => {
            this.props.addTodo(response.data);
        })
    }

    render() {
        return (
            <div>
                <Row>
                <Col span={8}></Col>
                <Col span={8}>        
                <Form ref={this.formRef} onFinish={this.onSubmit}>
                    <Form.Item name = "text">
                        <Input placeholder="input a new todo here.." />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Add</Button>
                    </Form.Item>
                </Form>
                </Col>
                <Col span={8}></Col>
                </Row>
            </div>
        );
    }
}

export default TodoGenerator;