import { connect } from 'react-redux';
import { deleteToDo } from '../actions';
import TodoItem from '../components/TodoItem';

const mapDispatchToProps = (dispatch) => ({
    deleteToDo: (id) => {dispatch (deleteToDo(id))}
})

const TodoItemContainer = connect (null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;