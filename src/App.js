import React, {Component} from 'react';
import TodoItem from './components/TodoItem';
import "./index.css";
import todosData from "./todosData";

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData,
  
    }
    this.handleChange = this.handleChange.bind(this) 
  }
  handleChange(id){
    console.log("Completed", id)
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return{ 
        todos: updateTodos
      }
    })
  }
  
  render() {
    
    const TodoItems = this.state.todos.map(elem => <TodoItem key={elem.id} elem={elem} handleChange={this.handleChange}/>)
    return (
      <div className="todo-list">
        {TodoItems}
      </div>
    )
}
}

export default App;
