import React from 'react'
interface ToDolistProps{
   items:{id:string, text:string}[]
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
