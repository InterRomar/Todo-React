import React from 'react';
import memoize from 'memoize-one';
import { TodoList } from './TodoList';
import { STATUS_TODOS } from '../constants/constants';
import AddTodo from './AddTodo';


export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      sortStatus: 'all'
    };

    this.count = 0;
  }

  handleToggle = (toggledTodo) => {
    const mappedTodos = this.state.todos.map(todo => {
      if (todo.id === toggledTodo.id) {
        const isCompleted = !todo.isCompleted;
        return { ...todo, isCompleted };
      }
      return todo;
    });
    this.setState({
      todos: mappedTodos
    });
  }

  handleDelete = (deletedTodo) => {
    const filterTodos = this.state.todos.filter(todo => {
      return todo.id !== deletedTodo.id;
    });

    this.setState({
      todos: filterTodos
    });
  }

  handleSubmit = (event, value) => {
    event.preventDefault();
    if (!value) return;

    const newTodo = {
      id: this.count + 1,
      text: value,
      isCompleted: false
    };

    this.count += 1;
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  handleChangeSorting = (event) => {
    this.setState({
      sortStatus: event.target.name
    });
  }

  handleClearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.isCompleted)
    });
  }

  filterCompleted = memoize(todos => todos.filter(todo => todo.isCompleted));

  filterIncompleted = memoize(todos => todos.filter(todo => !todo.isCompleted));

  getTodosBySortStatus = memoize((todos, sortStatus) => {
    switch (sortStatus) {
      case STATUS_TODOS.INCOMPLETED_TODOS:
        return this.filterIncompleted(todos);

      case STATUS_TODOS.COMPLETED_TODOS:
        return this.filterCompleted(todos);

      default:
        return todos;
    }
  })

  render() {
    const completedTodos = this.filterCompleted(this.state.todos);
    const incompletedTodos = this.filterIncompleted(this.state.todos);
    const todos = this.getTodosBySortStatus(this.state.todos, this.state.sortStatus);


    return (
      <section className="todo-app">
        <div className="todo-app__header">
          <AddTodo
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div className="todo-app__body">
          <TodoList
            todos={todos}
            handleToggle={this.handleToggle}
            handleDelete={this.handleDelete}
          />
        </div>
        {this.state.todos.length > 0 &&
          <div className="todo-app__footer footer">
            <span className="footer__info-incompleted">
                {incompletedTodos.length} items left
            </span>
            <div className="footer__buttons buttons">
              <button
                  name={STATUS_TODOS.ALL_TODOS}
                  className={`buttons__all btn ${this.state.sortStatus === STATUS_TODOS.ALL_TODOS ? 'active' : ''}`}
                  onClick={this.handleChangeSorting}
              >
                  All
              </button>
              <button
                  name={STATUS_TODOS.INCOMPLETED_TODOS}
                  className={`buttons__active btn ${this.state.sortStatus === STATUS_TODOS.INCOMPLETED_TODOS ? 'active' : ''}`}
                  onClick={this.handleChangeSorting}
              >
                  Active
              </button>
              <button
                  name={STATUS_TODOS.COMPLETED_TODOS}
                  className={`buttons__completed btn ${this.state.sortStatus === STATUS_TODOS.COMPLETED_TODOS ? 'active' : ''}`}
                  onClick={this.handleChangeSorting}
              >
                  Completed
              </button>
              <button
                  className="buttons__clear btn"
                  onClick={this.handleClearCompleted}
              >
                  Clear completed [{completedTodos.length}]
              </button>
            </div>
            </div>
        }
      </section>
    );
  }
}
