import React from 'react';
import PropTypes from 'prop-types';

export default function TodoItem(props) {
  const { handleDelete, handleToggle, todo } = props;
  return (
    <li
    className={`todo__item ${todo.isCompleted ? 'completed' : ''}`}
    >
      <input
          type="checkbox"
          className="switch"
          checked={todo.isCompleted}
          id={todo.id}
          onChange={() => handleToggle(todo)}
      />
      <label htmlFor={todo.id}></label>
      <span
          className="todo__text"
      >
          {todo.text}
      </span>
      <span
          className="todo__delete"
          onClick={() => handleDelete(todo)}
      >&#10006;</span>
    </li>
  );
}

TodoItem.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired
  })
};
