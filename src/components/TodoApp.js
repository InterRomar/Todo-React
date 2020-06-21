import React from 'react';
import TodoList from './TodoList';
import Footer from './Footer';
import AddTodo from './AddTodo'



export default class TodoApp extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
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