import React from 'react';
import TodoItem from "./TodoItem";
import todoData from "./todoData";
import "./style.css";

function App() {
  const todoComponents = todoData.map(todo => 
    <TodoItem key={todo.id}
      todo={todo} />)
  
  return (
    <div className="todo-list">
      {todoComponents}
    </div>
  );
}

export default App;
