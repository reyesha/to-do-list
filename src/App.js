import './App.css';
import TodoList from './components/TodoList';
import { getTodos } from './apis/todos';
import React from 'react';
import { connect } from 'react-redux'
import { initTodos } from './actions';

class App extends React.Component {

  componentDidMount() {
    getTodos().then(response => {
      console.log(response.data);
      this.props.initTodos(response.data);
    })
  }

  render() {
    
    return (
      <div>
        <TodoList />
      </div>
      
    );
  }



}

const mapDispatchToProps = dispatch => ({
  initTodos: todos => dispatch(initTodos(todos))
});


export default connect(null, mapDispatchToProps)(App);
