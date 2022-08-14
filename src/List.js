import React from 'react'

export default function List({todos, handleComplete, deleteTodo}) {
  return (
    <div>
      {todos.map((todo, index) => {
       return (
        <>
        <p key={index}>{todo.text}  <span onClick={() => {handleComplete(todo.id)}}>{todo.complete === false ? 'incomplete' : 'complete'}</span ><span onClick={() => {deleteTodo(todo.id)}}>Delete</span></p>
        </>
       )
      })}
    </div>
  )
}
