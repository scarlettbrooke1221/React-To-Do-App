  
import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
	constructor(props) {
		super (props);
		this.state = {
			todos: [
			{description: 'Open book', isCompleted:true },
			{description: 'Flip Page', isCompleted: false},
			{ description: 'Return library book', isCompleted: false}
			]
		};
	}
	
   render() {
     return (
       <div className="App">
        <ul>
<<<<<<< HEAD
		{this.state.todos.map( (todo, index} =>
         <ToDo key={ index} description={ todo.description } isCompleted={ todo.isCompleted}/>
=======
         { this.state.todos.map( (todo, index) =>
		    <ToDo key ={ index } description={ todo.description } isCompleted={ todo.isCompleted} />
		  )}
>>>>>>> checkpoint-8-ToDoAppStateAndProps
        </ul>       
       </div>
     );
   }
 }

 export default App;
 
  