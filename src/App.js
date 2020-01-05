import React from 'react';
import TodoItem from "./TodoItem";
import todoData from "./todoData";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    }
  }

  render() {
    const todoComponents = this.state.todos.map(todo => 
      <TodoItem key={todo.id}
        todo={todo} />)
    
    return (
      <div className="todo-list">
        {todoComponents}
      </div>
    );
  }
}

export default App;
