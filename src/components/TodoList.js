import React, { Component } from 'react';
import TodoGroupContainer from '../containers/TodoGroupContainer';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import NotFound from './NotFound';
import DoneListContainer from '../containers/DoneListContainer';
import { Menu, Layout } from 'antd';
import { UnorderedListOutlined, CheckSquareOutlined, PlusOutlined } from '@ant-design/icons';

class TodoList extends Component {
    render() {
        const { Header, Footer, Sider, Content } = Layout;
        return (
            <div>
                <Layout>
                    <Header ><h1 style={{color: 'white'}}>TodoList</h1></Header>
                    <Content className="bgWhite">
                        <BrowserRouter>
                            <Menu mode="horizontal">
                                <Menu.Item key="todo" icon={<PlusOutlined />}>
                                    <Link to="/" >Todo Generator</Link>
                                </Menu.Item>
                                <Menu.Item key="all" icon={<UnorderedListOutlined />}>
                                    <Link to="/Todo" >Todos</Link>
                                </Menu.Item>
                                <Menu.Item key="done" icon={<CheckSquareOutlined />}>
                                    <Link to="/done" >Done</Link>
                                </Menu.Item>
                            </Menu>

                            <Switch>
                                <Route exact path="/" component={TodoGeneratorContainer}></Route>
                                <Route exact path="/Todo" component={TodoGroupContainer}></Route>
                                <Route exact path="/done" component={DoneListContainer}></Route>
                                <Route exact path="/*" component={NotFound}></Route>
                            </Switch>
                        </BrowserRouter>
                    </Content>
                    <Footer className="bgWhite"></Footer>
                </Layout>



            </div>
        );
    }
}

export default TodoList;