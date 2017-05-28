import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todoViewActive , completedViewActive , allViewActive } from '../../actions/app';

class TabSelect extends Component {
  todoHandler(){
    this.props.todoViewActive();
  }
  completedHandler(){
    this.props.completedViewActive();
  }
  allHandler(){
    this.props.allViewActive();
  }
  render() {
    return(
      <div className="tabSelect">
        <span onClick={this.todoHandler.bind(this)} >Todo</span>
        <span style={{margin: "0px 30px"}} onClick={this.completedHandler.bind(this)} >Completed</span>
        <span onClick={this.allHandler.bind(this)} >All</span>
      </div>
    );
  }
}

export default connect(
  state => ({
    view: state.view,
  }),
  {todoViewActive , completedViewActive , allViewActive}
)(TabSelect);
