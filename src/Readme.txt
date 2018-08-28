React js -Components - splitting webpage into components, build such reusable component with js. 
Component holds html code as well as js code which allows write logic.


JSX - js mixed with html - 

* render method renders the component,  anything inside {} is considered as js expression.

Props --> using this you can pass data to component. 
PropType - good practice to specify propType - as it ensures right usage of Component.
e.g 
ComponentName.propTypes = {
	number: PropTypes.number
	name: PropTypes.String
} 
this.props.children -- when you don't want to explicitly pass props, pass it as child while calling the Component.
<ComponentName name={"jdalkjaf"}>
	<p>Hello !!</p>  // prop is accessed using children key
</ComponentName> 

What you pass from outside of the component.

Events - 

State - React Dom won't re render unless state of the component is changed.
Something what happens inside the component.

Virtual Dom - it has virtual representation of dom - frequent/(in a loop) updates on the actual dom triggers reflows which blocks UI for the end user. React at a high level does a diff between virtual DOM and live DOM and batches updates.
on change of state - react re creates virtual dom - then compares new virtual dom with old virtual dom, no changes nothing happens. 
	if there is change, then it only replaces at that place. It is fast bcz it uses virtual dom for comparison.

Stateless component for better performance, as there are more states the component becomes more unpredictable and difficult to manage.


passing data from child to parent - props 	

Two way binding -- 

React Component Life Cycle : Each Component has life cycle
1) ComponentWillMount - when this component is getting called, this method will get executed right before the execution of render method of component.
2) ComponentDidMount - get called immidiatly after rendering.
3) ComponentWillReceiveProps - When component receives new props
4)shouldComponentUpdate - Before rendering , after receiving new state or props.
5)ComponentWillUpdate - executed when  shouldComponentUpdate -returned true, before rendering and after receving new props or state.
6)ComponentDidUpdate - after rerendeing of the component on the actual Dom.
7)ComponentWillUnmount - wheneverr component being removed.


//constructor -render

React Router - to navigate 

in react user component and main component can interact only through app component.
so state management becomes tough as app grows.


REDUX --
reactJs + Redux
Redux - helps handling the state of the app.

view/app - dispatches the action, actions are run through reducers  
reducer - takes your action, handle action and changes state, returns state.(can have multiple reducers)
the new state returned by reducer is stored inside store.(only one store).
// write reducers, create a store and register the reducer, subscribe for the store, dispatch the store.  


// import reducerCombiner to combine multiple reducers

// middleware inbetween store and reducers - it's called before store/state is changed. 
