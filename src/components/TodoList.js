import React from 'react';
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
