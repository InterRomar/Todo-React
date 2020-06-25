import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';


export const TodoList = (props) => {
  const { todos } = props;

  return (
      <ul className="todo__list">
        {todos.map((todo) => <TodoItem
          key={todo.id}
          {...props}
          todo={todo}
        />)}
      </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired
    })
  )
};
