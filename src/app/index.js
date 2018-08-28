/*import React from "react";
import { render } from "react-dom";
import {Header} from "./components/Header.js";
import {RealHeader} from "./components/RealHeader.js";

class App extends React.Component {
	// called whenever this component is needs to be rendered
	constructor(){
		super();
		this.state = {
			headerMsg:"Home"
		}	
	}	
	onLinkChange(newName){
		this.setState({
			headerMsg:newName
		});
	}	
	onGreet(param){
		alert("Hello" +param)
	}	
	render(){
		var user = {
			name:"India",
			age:70,
			hobbies: ["Fighting","Reading"]	
		}
		return (
			<div>
			<RealHeader headerMsg ={this.state.headerMsg}/>
			<Header welcomeMsg= {"Welcome"} user={user} greet={this.onLinkChange.bind(this)} headerMsg ={this.state.headerMsg}>
				<p>Please visit again !!</p>
			</Header>
			</div>	
		)
	}	
}	
render(<App/>, document.getElementById("app"));
*/
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
const mathReduce = (state  =  {
		result:1,
		lastValues:[]
	}	,action) => {
	switch(action.type) {
		case "ADD": 
			state = {
				...state,
				result:state.result + action.payload1,
				lastValues: [...state.lastValues , action.payload1]
			}	
			break;
		case "SUB": 
			state = {
				...state,
				result:state.result + action.payload1,
				lastValues: [...state.lastValues , action.payload1]
		
			}
			break;	
	}	
	return state;
}	

const userReducer = (state = {
		name:"sunitha",
		age:25
	},action) => {
	switch(action.type) {
		case "SET_NAME": 
			state = {
				...state,
				name:action.someVal
			}	
			break;
		case "SET_AGE": 
			state = {
				...state,
				age:action.someVal
		
			}
			break;	
	}	
	
	return state;
};
const myLogger = (store) => (next) => (action) => {
	console.log("log", action);
	// this needs to be done bcz we want it to continue to reducers
	next(action);
};	
const store = createStore(combineReducers({userReducer:userReducer,mathReduce:mathReduce}),{},applyMiddleware(myLogger,createLogger()));

store.subscribe(() => {
	console.log("state updated ", store.getState())
});

store.dispatch({
	type:"ADD",
	payload1:100
});
store.dispatch({
	type:"ADD",
	payload1:23
});

store.dispatch({
	type:"SET_NAME",
	someVal:"Sunitha Hegde"
});
store.dispatch({
	type:"SET_AGE",
	someVal:23
});