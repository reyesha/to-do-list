import { connect } from 'react-redux';
import { deleteToDo, toggleTodo } from '../actions';
import TodoItem from '../components/TodoItem';

const mapDispatchToProps = (dispatch) => ({
    deleteToDo: (id) => {dispatch (deleteToDo(id))},
    toggleTodo: (id) => {dispatch(toggleTodo(id))}
})

const TodoItemContainer = connect (null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;