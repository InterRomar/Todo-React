import React from 'react';
import TodoList from './TodoList';
import Footer from './Footer';
import AddTodo from './AddTodo';


class TodoApp extends React.Component {
  render = () => {
    return (
      <section className="todo-app">
        <div className="todo-app__header">
          <AddTodo />
        </div>
        <div className="todo-app__body">
          <TodoList />
        </div>
          <Footer />
      </section>
    );
  }
}

export default TodoApp;
