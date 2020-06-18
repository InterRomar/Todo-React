import React from 'react';


export  default class TodoList extends React.Component {
    constructor(props) {
      super(props);
      
    }
    
    render() {
        
      return (
        <ul className="todo__list">
          {this.props.todos.map((todo) => 
            <li
              key={todo.id}
              data-id={todo.id}
              className={`todo__item ${todo.isCompleted ? 'completed' : ''}`}
            //   onDoubleClick={this.props.handleDelete}
            >
                <input 
                  type="checkbox" 
                  className="switch" 
                  checked={todo.isCompleted}
                  id={todo.id} 
                  onChange={this.props.handleToggle}
                />
                <label htmlFor={todo.id}></label>
                <span 
                    className="todo__text"
                >
                    {todo.text}
                </span>
                <span 
                    className="todo__delete"
                    onClick={this.props.handleDelete}
                >&#10006;</span>
            </li>
          )}
        </ul>
      )
    }
  }