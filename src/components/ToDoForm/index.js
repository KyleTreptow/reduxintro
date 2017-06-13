import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class TodoForm extends Component {
  handleSubmit = data => {
    this.props.onSubmit(data);
  }
  render() {
    return (
      <section className="section-default">
        <div className="container">
          <form id="todo-form" onSubmit={this.props.handleSubmit(this.handleSubmit)}>
            <label htmlFor="todo">Enter A New Item: </label>
            <div className="input-group">
              <Field className="form-control" name="todo" component="input" type="text" placeholder="Enter To-Do" />
              <span className="input-group-btn">
                <button className="btn btn-success" type="submit">Submit</button>
              </span>
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
