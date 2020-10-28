import React, { Component } from 'react';
import TodoGroupContainer from '../containers/TodoGroupContainer';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import NotFound from './NotFound';
import DoneListContainer from '../containers/DoneListContainer';
import { Menu, Layout } from 'antd';

class TodoList extends Component {
    render() {
        const { Header, Footer, Sider, Content } = Layout;
        return (
            <div>
                <Layout>
                    <Header>TodoList</Header>
                    <Content>
                        <BrowserRouter>
                            <Menu mode="horizontal">
                                <Menu.Item key="todo">
                                    <Link to="/" >Todo Generator</Link>
                                </Menu.Item>
                                <Menu.Item key="all">
                                    <Link to="/Todo" >Todos</Link>
                                </Menu.Item>
                                <Menu.Item key="done">
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
                    <Footer></Footer>
                </Layout>



            </div>
        );
    }
}

export default TodoList;