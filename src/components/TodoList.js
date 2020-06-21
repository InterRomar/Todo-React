import React from 'react';
import Todo from './Todo'
import { connect } from 'react-redux';
import { toggleTodo,deleteTodo, SortStatuses } from '../store/actions';


class TodoList extends React.Component {

    constructor(props) {
      super(props);
    }
    
    render() {
      let {toggleTodo, deleteTodo} = this.props; 
      return (
        <div>
          <ul className="todo__list">
            {this.props.todos.map((todo) => 
                  <Todo 
                    todo={todo} 
                    key={todo.id} 
                    toggleTodo={() => toggleTodo(todo.id)}
                    deleteTodo={() => deleteTodo(todo.id)}
                  />
            )}
          </ul>
        </div>
      )
    }
  }

  const getSortingTodoList = (todos, status) => {
    switch (status) {
      case SortStatuses.SHOW_ALL:
        return todos;
      case SortStatuses.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
      case SortStatuses.SHOW_INCOMPLETED:
        return todos.filter(todo => !todo.completed);   
      default:
        throw new Error('Unknown sorting status ' + status)
    }
  }

  const mapStateToProps = state => ({
    todos: getSortingTodoList(state.todos, state.sortStatus),
  });

  const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
  });

  export default connect(mapStateToProps, mapDispatchToProps) (TodoList)
  