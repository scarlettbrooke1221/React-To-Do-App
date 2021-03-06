  
import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Open the book', isCompleted: true },
        { description: 'Flip page', isCompleted: false },
        { description: 'Return library book', isCompleted: false }
      ],
      newTodoDescription: '' 
    };
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) {return}
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
<<<<<<< HEAD
   this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
     }

    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

  deleteTodo(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    this.setState({ todos: todos.filter( (item) => item !== todo) });
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } deleteTodo={ () => this.deleteTodo(index) } />
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
       </div>
     );
   }
 }

export default App;