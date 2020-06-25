import React from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleCreateInput = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const { value } = this.state;
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={(event) => {
        handleSubmit(event, value);
        this.setState({ value: '' });
      }}>
        <input
            autoComplete="off"
            type="text"
            id="create-todo"
            placeholder="Add todo.."
            value={value}
            onChange={this.handleCreateInput}
        />
    </form>
    );
  }
}

AddTodo.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
