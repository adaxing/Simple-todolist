import React, { Component } from 'react';

export default class MyToDoList extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      userInput:'',
	      toDoList:[]
	    }
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleChange = this.handleChange.bind(this);
  	}
  	handleSubmit() {
	    const itemsArray = this.state.userInput.split(',');
	    this.setState({
	      toDoList: itemsArray
	    });
  	}
  	handleChange(e) {
	    this.setState({
	      userInput: e.target.value
	    });
  	}
  	render() {
	  	const items = this.state.toDoList.map(i => <li>{i}</li>); 
	  	const textAreaStyles = {
			width: 235,
			margin: 5
		};
		return (
		  <div>
				<label>Input your task below:</label>
				<br />
		    <textarea
		      onChange={this.handleChange}
		      value={this.state.userInput}
		      style={textAreaStyles}
		      placeholder="Separate Items With Commas" /><br />
		    <button onClick={this.handleSubmit}>Create List</button>
		    <p>My <bold>To Do</bold> List:</p>
				<div class='lists'>
					<ul>
						{items}
					</ul>
				</div>
		  </div>
		);
	}
};
