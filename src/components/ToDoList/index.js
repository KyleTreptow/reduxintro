import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleActive } from '../../actions/app.js';
import {retrieveItems} from '../../actions/app.js';

class TodoList extends Component {
  clickHandler(id, completed){
    this.props.toggleActive(id, completed);
  }
  componentWillMount(){
    this.props.retrieveItems();
  }
  render() {

    let that = this;
    return(

      <ul id="todo-list">
        { this.props.todo.todolist.map(function(item, index){
          // vars
          let status = item.completed === true ? 'completed' : 'incomplete';
          let icon = item.completed === true ? 'fa fa-check' : 'fa fa-times';
          //Completed only
          if (item.completed && that.props.view.completedView){
          return(
            <li className={ 'todo-item ' + status } key={item.id}>{item.name}
              <button onClick={that.clickHandler.bind(that, item.id, item.completed)} >
                Completed
              </button>
              <button>
                X
              </button>
            </li>
          );}
          else if(!item.completed  && that.props.view.todoView && !that.props.view.completedView){
            return(
              <li className={ 'todo-item ' + status } key={item.id}>{item.name}
                <button onClick={that.clickHandler.bind(that, item.id, item.completed)} >
                  Completed
                </button>
                <button>
                  X
                </button>
              </li>
            );
          }
          else if(that.props.view.todoView && that.props.view.completedView){
            return(
              <li className={ 'todo-item ' + status } key={item.id}>{item.name}
                <button onClick={that.clickHandler.bind(that, item.id, item.completed)} >
                  Completed
                </button>
                <button>
                  X
                </button>
              </li>
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
  {toggleActive, retrieveItems},
)(TodoList);
