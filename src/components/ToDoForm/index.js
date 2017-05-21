import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class TodoForm extends Component {
  handleSubmit = data => {
    this.props.onSubmit(data);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <div>
          <label htmlFor="todo">Todo: </label>
          <Field name="todo" component="input" type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'todo'
})(TodoForm);
