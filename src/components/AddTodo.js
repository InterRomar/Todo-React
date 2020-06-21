import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/actions'

class AddTodo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
    }
    
    
    onInputChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <form
                onSubmit={event => {
                    event.preventDefault();
                    if (!this.state.value) {
                        return;
                    }
                    this.props.dispatch(addTodo(this.state.value));
                    this.setState({
                        value: ''
                    });
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
        )
    }
}

export default connect()(AddTodo)
