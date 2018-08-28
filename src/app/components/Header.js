import React from "react";
import PropTypes from 'prop-types';

export class Header extends React.Component {
	constructor(props){
		super();
		this.state = {
			age: props.user.age,
			headerMsg: props.headerMsg
		}	
		console.log("constructor");
	}	
	addAge() {
		this.setState({age:this.state.age + 1})	
	}	
	handleInput(event) {
		this.setState({headerMsg:event.target.value});
	}	
	componentWillMount(){
		console.log("componentWillMount")
	}	
	componentDidMount(){
		console.log("componentDidMount")
	}	
	componentWillReceiveProps(newProps){
		console.log("componentWillReceiveProps", newProps)

	}	
	shouldComponentUpdate(newProps,newState){
		console.log("componentWillReceiveProps", newProps,newState );
		return true;
	}	
	componentWillUpdate(newProps,newState){
		console.log("componentWillUpdate", newProps,newState )
	}	
	componentDidUpdate(preProp, preState){
				console.log("componentDidUpdate", preProp,preState )

	}	
	componentWillUnmount(){
		console.log("componentWillUnmount");
	}	
	render() {
		console.log("render");
		return(
			<div>
				<h4>{this.props.welcomeMsg},{this.props.user.name}, {this.state.age}!!</h4>
				<h6>Your hobbies are !!</h6>
				<ul>
				{this.props.user.hobbies.map((hobby,i) => <li key={i}> {hobby} </li>)}
				</ul>
				{this.props.children}
				<hr/>
				<button onClick={() => this.addAge()}>Add Age</button>
				<input value={this.state.headerMsg} onChange={(event) =>this.handleInput(event) }/>
				<button onClick={() => this.props.greet(this.state.headerMsg)}>Greet</button>
			</div>
		);	
	}	
	
}	
Header.PropTypes = {
	welcomeMsg: PropTypes.String,
	user: PropTypes.Object
}	