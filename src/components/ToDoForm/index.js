import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class TodoForm extends Component {
  handleSubmit = data => {
    this.props.onSubmit(data);
  }
  render() {
    return (
      <section className="section-default">
        <div className="container-fluid">
          <form id="todo-form" onSubmit={this.props.handleSubmit(this.handleSubmit)}>
            <label htmlFor="todo">Enter A New Item: </label>
            <div className="form-group">
              <Field name="todo" component="input" type="text" placeholder="Enter To-Do" />
              <button className="btn-success" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default reduxForm({
  form: 'todo'
})(TodoForm);
