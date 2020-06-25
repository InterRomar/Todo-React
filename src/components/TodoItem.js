import React from 'react';

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
