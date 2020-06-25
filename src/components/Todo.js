import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li
      data-id={todo.id}
      className={`todo__item ${todo.completed ? 'completed' : ''}`}
    >
      <input
        type="checkbox"
        className="switch"
        checked={todo.completed}
        id={todo.id}
        onChange={() => toggleTodo(todo.id)}
      />
      <label htmlFor={todo.id}></label>
      <span
        className="todo__text"
      >
        {todo.text}
      </span>
      <span
        className="todo__delete"
        onClick={() => deleteTodo(todo.id)}
      >
        &#10006;
      </span>
    </li>
  );
};

export default Todo;

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool
  }),
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};
