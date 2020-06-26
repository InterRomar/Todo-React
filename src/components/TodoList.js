import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Todo from './Todo';
import { toggleTodo, deleteTodo } from '../store/actions';
import { getSortingTodoList } from '../store/selectors';


class TodoList extends React.Component {
  render() {
    const { toggleTodo, deleteTodo, todos } = this.props;

    return (
      <div>
        {todos.length > 0 &&
          <ul className="todo__list">
            {todos.map((todo) => <Todo
              todo={todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />)}
          </ul>
        }
      </div>
    );
  }
}


const mapStateToProps = state => ({
  todos: getSortingTodoList(state),
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
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};
