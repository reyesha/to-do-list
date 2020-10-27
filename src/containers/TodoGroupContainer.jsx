import { connect } from 'react-redux';
import TodoGroup from '../components/TodoGroup';

const mapStateToProps = state => ({
    todos: state.todos
});

const TodoGroupContainer = connect(mapStateToProps)(TodoGroup);

export default TodoGroupContainer;