import { connect } from 'react-redux'
import { toggleTodo } from '../../actions/Todo/todos'
import TodoList from '../../component/Todo/TodoList'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../reducers/Todo/visibilityFilter';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error('Unknown filter ' + filter)
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = {
  onTodoClick: toggleTodo
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList