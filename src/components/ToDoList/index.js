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
          if (obj.completed === true){
          return(
            <li className="todo todo-item completed" onClick={that.clickHandler.bind(that, index)} key={index}>{obj.name}</li>
          );}
          else{
            return(
              <li className="todo todo-item incomplete" onClick={that.clickHandler.bind(that, index)} key={index}>{obj.name}</li>
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
  }),
  {toggleActive}
)(TodoList);
