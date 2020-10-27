import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoGenerator from '../components/TodoGenerator';

const mapDispatchToProps = (dispatch) => ({
    addTodo: (toDoMessage) => {dispatch (addTodo(toDoMessage))}
})

const TodoGeneratorContainer = connect (null, mapDispatchToProps)(TodoGenerator);

export default TodoGeneratorContainer;