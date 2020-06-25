import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { toggleTodo, deleteTodo, SortStatuses } from '../store/actions';


class TodoList extends React.Component {
  render() {
    const { toggleTodo, deleteTodo, todos } = this.props;

    return (
      <div>
        <ul className="todo__list">
          {todos.map((todo) => <Todo
            todo={todo}
            key={todo.id}
            toggleTodo={() => toggleTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
          />)}
        </ul>
      </div>
    );
  }
}

const getSortingTodoList = (todos, status) => {
  switch (status) {
    case SortStatuses.SHOW_ALL:
      return todos;
    case SortStatuses.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case SortStatuses.SHOW_INCOMPLETED:
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error(`Unknown sorting status ${status}`);
  }
};

const mapStateToProps = state => ({
  todos: getSortingTodoList(state.todos, state.sortStatus),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      completed: PropTypes.bool
    })
  ),
  toggleTodo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool
  }),
  deleteTodo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool
  }),
};
