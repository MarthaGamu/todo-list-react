import React,{useState} from 'react'
import List from './List'

export default function App() {
 const [todo, setTodo] = useState([{ text: '', complete: false, id: 1}])
 const [todos, setTodos] = useState([])


 console.log('todo', todo)

 const onChangeHandler = (e) => {
	const idValue = Math.random()
	setTodo({text: e.target.value, id: idValue, complete:false})

 }
 const handleComplete = (id) => {
	const newState = todos.map(obj => {
		// 👇️ if id equals 2, update country property
		if (obj.id === id) {
		  return {...obj, complete: true};
		}
  
		// 👇️ otherwise return object as is
		return obj;
	  });
  
	  setTodos(newState);
	
}

const deleteTodo = (id) => {
 const filtering = todos.filter(todo => todo.id !== id)
 console.log('filtered result', filtering)
 setTodos(filtering)
}
 
 const updateHandler = (e) => {
	e.preventDefault()
	setTodos(todos.concat(todo))
	setTodo('')
	console.log('Todos', todos)
 }
  return (
	<div>
	 <form onSubmit={updateHandler}>
		<input value={todo.text} onChange={onChangeHandler} placeholder='Search Item' />	
	 </form>
	 <List todos={todos} handleComplete={handleComplete} deleteTodo={deleteTodo}/>
	</div>
  )
}
