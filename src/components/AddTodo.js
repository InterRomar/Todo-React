import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addTodo } from '../store/actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  onInputChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  onSubmitClick = (event) => {
    event.preventDefault();
    if (!this.state.value) {
      return;
    }

    this.props.dispatch(addTodo(this.state.value));
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <form
        onSubmit={(event) => this.onSubmitClick(event)}
      >
        <input
          autoComplete="off"
          type="text"
          id="create-todo"
          placeholder="Add todo.."
          value={this.state.value}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

export default AddTodo;

AddTodo.propTypes = {
  dispatch: PropTypes.func
};
