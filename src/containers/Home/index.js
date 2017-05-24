// @flow
import React, { Component } from 'react';
import {connect} from 'react-redux';

import ToDoList from '../../components/ToDoList';
import ToDoForm from '../../components/ToDoForm';
import TabSelect from '../../components/TabSelect';
import {formSubmit} from '../../actions/app.js';

class Home extends Component {
  onSubmit = data => this.props.formSubmit(data); 
  render() {
    return (
    	<div className="container">
    		<TabSelect />
    		{/* Conditional to render just ToDos */}
    		{ this.props.view.todoView && !this.props.view.completedView &&
    			<div>
  					<ToDoList />
  				</div>
  			}
  			{/* Conditional to render just Completed */}
  			{ !this.props.view.todoView && this.props.view.completedView &&
    			<div>
  					<p>Completed</p>
  					<ToDoList />
  				</div>
  			}
  			{/* Render all */}
  			{ this.props.view.todoView && this.props.view.completedView &&
    			<div>
  					<p>All</p>
  					<ToDoList />
  				</div>
  			}
  			<ToDoForm onSubmit={this.onSubmit} />
      	</div>
    );
  }
}

export default connect(
  state => ({
    view: state.view,
  }),
  {formSubmit}
)(Home);

