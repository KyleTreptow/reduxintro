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
            { this.props.todo.todolist.map(function(item, i){
              // vars
              let status = item.completed === true ? 'completed' : 'incomplete';
              let icon = item.completed === true ? 'fa fa-check' : 'fa fa-times';
              // markup - map through
              return( 
                <li className={ 'todo-item ' + status } key={i}>
                  <button onClick={that.clickHandler.bind(that, i)}><i className={ icon }></i></button>
                  { item.name }
                </li> 
              );
              // markup - end
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
  }),
  {toggleActive}
)(TodoList);
