import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleActive } from '../../actions/app.js';
import {retrieveItems} from '../../actions/app.js';

class TodoList extends Component {
  clickHandler(id){
    this.props.toggleActive(id);
  }
  componentWillMount(){
    this.props.retrieveItems();
  }
  render() {

    let that = this;
    return(

      <ul id="todo-list">
        { this.props.todolist.map(function(item, index){
          // vars
          let status = item.completed === true ? 'completed' : 'incomplete';
          let icon = item.completed === true ? 'fa fa-check' : 'fa fa-times';
          //Completed only
          if (item.completed && that.props.view.completedView){
          return(
            <li className={ 'todo-item ' + status } onClick={that.clickHandler.bind(that, index)} key={index}>{item.name}</li>
          );}
          else if(!item.completed  && that.props.view.todoView && !that.props.view.completedView){
            return(
              <li className={ 'todo-item ' + status } onClick={that.clickHandler.bind(that, index)} key={index}>{item.name}</li>
            );
          }
          else if(that.props.view.todoView && that.props.view.completedView){
            return(
              <li className={ 'todo-item ' + status } onClick={that.clickHandler.bind(that, index)} key={index}>{item.name}</li>
            );
          }

        }) }
      </ul>

    );
  }
}

export default connect(
  state => ({
    todolist: state.todo.todolist,
    view: state.view
  }),
  {toggleActive, retrieveItems},
)(TodoList);
