// @flow
import React, { Component } from 'react';
import {connect} from 'react-redux';

import ToDoList from '../../components/ToDoList';
import ToDoForm from '../../components/ToDoForm';
import {formSubmit} from '../../actions/app.js';

class Home extends Component {
  onSubmit = data => this.props.formSubmit(data); 
  render() {
    return (
      <div className="container">
  		<ToDoList />
  		<ToDoForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { formSubmit })( Home );

