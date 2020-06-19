import React from 'react';
import TodoList from '../TodoList/TodoList'



export default class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        todos: [],
        value: '',
        count: 0,
        sortStatus: 'all'
      }
      
      this.handleChangeSorting = this.handleChangeSorting.bind(this);
      this.handleClearCompleted = this.handleClearCompleted.bind(this);
      this.handleToggle = this.handleToggle.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCreateInput = this.handleCreateInput.bind(this);
    }
    showState() {
        console.log(this.state.todos)
    }
    handleToggle(event) {
      event = event.target;
      

      let mappedTodos = this.state.todos.map(todo => {
        if (todo.id === Number(event.id)) {
            todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });

      this.setState({
          todos: mappedTodos
      });
    }

    handleDelete(event) {      
        let filterTodos = this.state.todos.filter(todo => todo.id !== Number(event.target.parentNode.dataset.id));

        this.setState({
            todos: filterTodos
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.value) return;

        let newTodo = {
            id: this.state.count + 1,
            text: this.state.value,
            isCompleted: false
        }

        this.setState({
            todos: [...this.state.todos, newTodo],
            value: '',
            count: ++this.state.count 
        });        
    }

    handleCreateInput(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleChangeSorting(event) {
        this.setState({
            sortStatus: event.target.value
        })
        
    }

    handleClearCompleted() {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.isCompleted)
        })
    }


    
    render() {
        const completed = this.state.todos.filter(todo => todo.isCompleted);
        const incompleted = this.state.todos.filter(todo => !todo.isCompleted);

        

        let todos;
        switch (this.state.sortStatus) {
            case 'incompleted':
                todos = incompleted;
                break;
            case 'completed':
                todos = completed;
                break;
            
            default:
                todos = this.state.todos;
                break;
        }

      return (
        <section className="todo-app">
            <div className="todo-app__header">
              <form onSubmit={this.handleSubmit}>
                <input 
                    autoComplete="off"
                    type="text" 
                    id="create-todo" 
                    placeholder="Add todo.."
                    value={this.state.value}
                    onChange={this.handleCreateInput}

                />
              </form>
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
                        {incompleted.length} items left
                    </span>
                        <div className="footer__buttons buttons">
                            <button 
                                value='all' 
                                className={`buttons__all btn ${this.state.sortStatus === 'all' ? 'active' : ''}`}
                                onClick={this.handleChangeSorting}
                            >All</button>
                            <button 
                                value='incompleted' 
                                className={`buttons__active btn ${this.state.sortStatus === 'incompleted' ? 'active' : ''}`}
                                onClick={this.handleChangeSorting}
                            >Active</button>
                            <button 
                                value='completed' 
                                className={`buttons__completed btn ${this.state.sortStatus === 'completed' ? 'active' : ''}`}
                                onClick={this.handleChangeSorting}
                            >Completed</button>
                            <button 
                                className="buttons__clear btn"
                                onClick={this.handleClearCompleted}
                            >
                                Clear completed [{completed.length}]
                            </button>
                        </div>

                </div>
            }
        </section>
      );
    }
  }