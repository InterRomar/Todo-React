import React from 'react';

import PropTypes from 'prop-types';
import TodoList from './TodoList';
import Footer from './Footer';
import AddTodo from './AddTodo';
import { addTodo } from '../store/actions';

class TodoApp extends React.Component {
  onSubmit = (event, value) => {
    event.preventDefault();
    if (!value) {
      return;
    }

    this.props.dispatch(addTodo(value));
  }

  render = () => {
    return (
      <div className="container">
        <h1 className="page__title">Todos</h1>
        <section className="todo-app">
          <div className="todo-app__header">
            <AddTodo onSubmit={this.onSubmit}/>
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

TodoApp.propTypes = {
  dispatch: PropTypes.func
};
