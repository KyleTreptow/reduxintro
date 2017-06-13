// @flow
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ToDoList from '../../components/ToDoList';
import ToDoForm from '../../components/ToDoForm';
import TabSelect from '../../components/TabSelect';
import {formSubmit} from '../../actions/app.js';
import {retrieveItems} from '../../actions/app.js';



class Home extends Component {
  onSubmit = data => this.props.formSubmit(data); 

  componentDidMount(){
    console.log('Home Component Mounted');
    //////////////////////////////////////////////
    let ajaxCall =  fetch('http://localhost:4000/todos')
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        // return json;
        this.props.retrieveItems(json);
      })
      .catch(error =>
        dispatch(receivedDimensionAttributesError(dimensionName, error))
      );
    //////////////////////////////////////////////
  }
  render() {
    return (
    	<div id="app-wrapper">
        <Header />
    		<TabSelect />
        <section className="section-default">
        <div className="container-fluid">

    		{/* Conditional to render just ToDos */}
    		{ this.props.view.todoView && !this.props.view.completedView &&
    			<div>
            <h2>To Do</h2>
  					<ToDoList />
  				</div>
  			}
  			{/* Conditional to render just Completed */}
  			{ !this.props.view.todoView && this.props.view.completedView &&
    			<div>
  					<h2>Completed</h2>
  					<ToDoList />
  				</div>
  			}
  			{/* Render all */}
  			{ this.props.view.todoView && this.props.view.completedView &&
    			<div>
  					<h2>All</h2>
  					<ToDoList />
  				</div>
  			}
        
        </div>
        </section>
  			<ToDoForm onSubmit={this.onSubmit} />
        <Footer />
      </div>
    );
  }
}

export default connect(
  state => ({
    todo: state.todo,
    view: state.view,
  }),
  {formSubmit, retrieveItems}
)(Home);

