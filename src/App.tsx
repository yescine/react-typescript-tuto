import React,{useState} from 'react';
import TodoList, { toDoElemnt } from './components/ToDoList'
import NewToDO from './components/NewToDo'

const App:React.FC = ( )=>{
  const todosInit = [{id:'t1', text:'finish todo'}]
  const [todos, settodos] = useState<toDoElemnt[]>(todosInit)

  const toDoAdd = (text:string)=>{
    console.log(text);
    settodos(prevToDo=>[...prevToDo,{id:Math.random().toString(),text}])
  }

  const toDelAdd = (id:string)=>{
    settodos(prevToDo=>{
      return prevToDo.filter(elem=>elem.id!==id)
    })
  }
  return(
    <div className="App">
      <h1>TS: React</h1>
      <TodoList items={todos} onDeleteItem={toDelAdd}/>

      <NewToDO toDoAdd={toDoAdd}/>
    </div>
  )
}

export default App;
