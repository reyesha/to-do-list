import React, { Component } from 'react';
import TodoGroupContainer from '../containers/TodoGroupContainer';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
class TodoList extends Component {
    render() {
        return (
            <div>
                <h2> TodoList </h2>
                <BrowserRouter>
                    <span><Link to="/" >go to TodoGenerator</Link></span>
                    <br />
                    <span><Link to="/Todo" >go to TodoList</Link></span>

                    <Switch>
                        <Route exact path="/" component={TodoGeneratorContainer}></Route>
                        <Route exact path="/Todo" component={TodoGroupContainer}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default TodoList;