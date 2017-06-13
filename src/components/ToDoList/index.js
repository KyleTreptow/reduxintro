import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleActive } from '../../actions/app.js';
import { retrieveItems } from '../../actions/app.js';

class TodoList extends Component {
  componentDidMount(){
    console.log('Todo List Mounted');
    //////////////////////////////////////////////
      console.log('attempt ajax'); 
      let ajaxCall =  fetch('http://localhost:4000/todos')
        .then(response => response.json())
        .then(json => {
          // console.log('------------');
          // console.log('Data from express backend - ajax call:');
          // console.log(json);
          // console.log('------------');
          //return json;
          this.props.retrieveItems(json);
        })
        .catch(error =>
          dispatch(receivedDimensionAttributesError(dimensionName, error))
        );
      console.log('end ajax'); 
      //////////////////////////////////////////////
    
  }
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
  {toggleActive, retrieveItems},
)(TodoList);
