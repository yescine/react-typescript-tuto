import React from 'react';
import TodoList from './components/ToDoList'
import NewToDO from './components/NewToDo'

const App:React.FC = ( )=>{
  const todos = [{id:'t1', text:'finish todo'}]

  const toDoAdd = (text:string)=>{
    console.log(text);
  }

  return(
    <div className="App">
      <h1>TS: React</h1>
      <TodoList items={todos} />

      <NewToDO toDoAdd={toDoAdd}/>
    </div>
  )
}

export default App;
