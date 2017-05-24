// @flow
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ToDoList from '../../components/ToDoList';
import ToDoForm from '../../components/ToDoForm';
import {formSubmit} from '../../actions/app.js';

class Home extends Component {
  onSubmit = data => this.props.formSubmit(data); 
  render() {
    return (
      <div id="app-wrapper">
        <Header />
        <ToDoForm onSubmit={this.onSubmit} />
  		<ToDoList />
  		<Footer />
      </div>
    );
  }
}

export default connect(null, { formSubmit })( Home );

