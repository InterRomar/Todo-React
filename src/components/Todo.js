import React from 'react';

const Todo = ({todo, toggleTodo, deleteTodo}) => {
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
            onChange={toggleTodo}
          />
          <label htmlFor={todo.id}></label>
          <span 
              className="todo__text"
          >
              {todo.text}
          </span>
          <span 
              className="todo__delete"
              onClick={deleteTodo}
          >&#10006;</span>
        </li>
    );
};

export default Todo;