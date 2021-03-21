import React from 'react'
export type toDoElemnt ={id:string, text:string}
interface ToDolistProps{
   items:toDoElemnt[]
}
const ToDoList:React.FC<ToDolistProps> = (props) => {
   const {items} = props
   return (
      <div>
         <ul>
         {items.map(elem=><li key={elem.id} >{elem.text} </li>)}
         </ul>
      </div>
   )
}

export default ToDoList
