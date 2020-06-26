import React, { Component } from 'react';
import PropTypes from 'prop-types';


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

  render() {
    const { onSubmit } = this.props;
    return (
      <form
        onSubmit={(event) => {
          this.setState({
            value: ''
          });
          onSubmit(event, this.state.value);
        }}
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
  dispatch: PropTypes.func,
  onSubmit: PropTypes.func
};
