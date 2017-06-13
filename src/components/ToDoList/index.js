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
      <section className="section-default">
        <div className="container-fluid">
           <ul id="todo-list">
        { this.props.todo.todolist.map(function(item, index){
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
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({
    todo: state.todo,
    view: state.view
  }),
  {toggleActive},
)(TodoList);
