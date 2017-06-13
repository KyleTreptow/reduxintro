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
      <section className="section-default">
        <div className="container">
          <ul className="tab-navi">
            <li><button className="btn btn-secondary" onClick={this.todoHandler.bind(this)} >Todo</button></li>
            <li><button className="btn btn-secondary" onClick={this.completedHandler.bind(this)} >Completed</button></li>
            <li><button className="btn btn-secondary" onClick={this.allHandler.bind(this)} >All</button></li>
          </ul>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({
    view: state.view,
  }),
  {todoViewActive , completedViewActive , allViewActive}
)(TabSelect);
