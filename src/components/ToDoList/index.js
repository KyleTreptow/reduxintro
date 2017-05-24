import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleActive } from '../../actions/app.js';

class TodoList extends Component {
  clickHandler(id){
    this.props.toggleActive(id);
  }
  render() {
    let that = this;
    return(
      <ul id="todo-list">
        { this.props.todo.todolist.map(function(obj, index){
          //Completed only
          if (obj.completed && that.props.view.completedView){
          return(
            <li className="todo todo-item completed" onClick={that.clickHandler.bind(that, index)} key={index}>{obj.name}</li>
          );}
          else if(!obj.completed  && that.props.view.todoView && !that.props.view.completedView){
            return(
              <li className="todo todo-item incomplete" onClick={that.clickHandler.bind(that, index)} key={index}>{obj.name}</li>
            );
          }
          else if(that.props.view.todoView && that.props.view.completedView){
            return(
              <li className={obj.completed ? "todo todo-item completed" : "todo todo-item incomplete"} onClick={that.clickHandler.bind(that, index)} key={index}>{obj.name}</li>
            );
          }

        }) }
      </ul>
    );
  }
}

export default connect(
  state => ({
    todo: state.todo,
    view: state.view
  }),
  {toggleActive}
)(TodoList);
