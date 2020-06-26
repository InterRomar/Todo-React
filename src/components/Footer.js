import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setSortStatus, clearCompleted } from '../store/actions';


const Footer = (props) => {
  const {
    setSortStatus,
    clearCompleted,
    currentStatus,
    todos,
    completed,
    incompleted } = props;

  return (
    <React.Fragment>
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
            >
              All
            </button>
            <button
              value='SHOW_COMPLETED'
              className={`buttons__all btn ${currentStatus === 'SHOW_COMPLETED' ? 'active' : ''}`}
              onClick={(event) => setSortStatus(event.target.value)}
            >
              Completed
            </button>
            <button
              value='SHOW_INCOMPLETED'
              className={`buttons__all btn ${currentStatus === 'SHOW_INCOMPLETED' ? 'active' : ''}`}
              onClick={(event) => setSortStatus(event.target.value)}
            >
              Active
            </button>

            <button
              className="buttons__clear btn"
              onClick={() => clearCompleted()}
            >
              Clear completed [{completed.length}]
            </button>
          </div>
          </div>
      }
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  currentStatus: state.sortStatus,
  todos: state.todosStore.todos,
  completed: state.todosStore.todos.filter(todo => todo.completed),
  incompleted: state.todosStore.todos.filter(todo => !todo.completed)
});

const mapDispatchToProps = (dispatch) => ({
  setSortStatus: status => dispatch(setSortStatus(status)),
  clearCompleted: () => dispatch(clearCompleted()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Footer);

Footer.propTypes = {
  setSortStatus: PropTypes.func,
  clearCompleted: PropTypes.func,
  currentStatus: PropTypes.string,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      completed: PropTypes.bool
    })
  ),
  completed: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      completed: PropTypes.bool
    })
  ),
  incompleted: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      completed: PropTypes.bool
    })
  ),
};
