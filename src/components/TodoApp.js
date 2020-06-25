import React from 'react';

import TodoList from './TodoList';
import Footer from './Footer';
import AddTodo from './AddTodo';


class TodoApp extends React.Component {
  render = () => {
    return (
      <div className="container">
        <h1 className="page__title">Todos</h1>
        <section className="todo-app">
          <div className="todo-app__header">
            <AddTodo { ...this.props.store } />
          </div>
          <div className="todo-app__body">
            <TodoList />
          </div>
            <Footer />
        </section>
      </div>
    );
  }
}

export default TodoApp;
