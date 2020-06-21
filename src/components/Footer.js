import React from 'react';
import { setSortStatus, clearCompleted } from '../store/actions';
import { connect } from 'react-redux';

const Footer = ({setSortStatus,clearCompleted, currentStatus, todos, completed, incompleted}) => {
    return (
        <div>
            { todos.length > 0 && 
                <div className="todo-app__footer footer">
                    <span className="footer__info-incompleted">
                        {incompleted.length} items left
                    </span>
                        <div className="footer__buttons buttons">
                            <button 
                                value='SHOW_ALL' 
                                className={`buttons__all btn ${currentStatus === 'SHOW_ALL' ? 'active' : ''}`}
                                onClick={(event) => setSortStatus(event.target.value)}
                            >All</button>
                            <button 
                                value='SHOW_COMPLETED' 
                                className={`buttons__all btn ${currentStatus === 'SHOW_COMPLETED' ? 'active' : ''}`}
                                onClick={(event) => setSortStatus(event.target.value)}
                            >Completed</button>
                            <button 
                                value='SHOW_INCOMPLETED' 
                                className={`buttons__all btn ${currentStatus === 'SHOW_INCOMPLETED' ? 'active' : ''}`}
                                onClick={(event) => setSortStatus(event.target.value)}
                            >Active</button>
                        
                            <button 
                                className="buttons__clear btn"
                                onClick={() => clearCompleted()}
                            >
                                Clear completed [{completed.length}]
                            </button>
                        </div>

                </div>
            }
        </div>
    );
};

const mapStateToProps = state => ({
    currentStatus: state.sortStatus,
    todos: state.todos,
    completed: state.todos.filter(todo => todo.completed),
    incompleted: state.todos.filter(todo => !todo.completed)
  });

  const mapDispatchToProps = (dispatch) => ({
    setSortStatus: status => dispatch(setSortStatus(status)),
    clearCompleted: () => dispatch(clearCompleted()),
  })

  
export default connect(mapStateToProps, mapDispatchToProps) (Footer)