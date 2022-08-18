import React, { useState } from 'react'
import styled from 'styled-components'
import List from './List'

const ListTodoWrapper = styled.div`
	display: flex;
	justify-content: center;
`

const StyledHeading = styled.h1`
	color: black;
	text-align: center;
`
const ListTodoContainer = styled.div`
	margin-top: 50px;
	width: 80vw;
	background: white;
	text-align: center;
	border-radius: 6px;
`

const StyledForm = styled.form`
	padding-top: 20px;
	margin: 0 auto;
`

const StyledInput = styled.input`
	width: 300px;
	height: 2.5rem;
	text-transform: uppercase;

	&:focus {
		outline: 2px solid red;
	}
`
const StyledButton = styled.button`
	padding: 1rem 1rem;
	border-radius: 6px;
	background: black;
	color: white;
	outline: none;
	border: 1px solid white;
	margin-left: 10px;

	&:focus {
		outline: 2px solid red;
	}
`

export default function App() {

const initialState = {
	text: '',
	complete: '',
  };
  
	const [todo, setTodo] = useState(initialState)
	const [todos, setTodos] = useState([])

	console.log('todo', todo)
	console.log('Todos', todos)

	const onChangeHandler = (e) => {
		const idValue = Math.random()
		setTodo({ text: e.target.value, id: idValue, complete: false })
	}
	const handleComplete = (id) => {
		const newState = todos.map((obj) => {
			// 👇️ if id equals 2, update country property
			if (obj.id === id) {
				return { ...obj, complete: true }
			}

			// 👇️ otherwise return object as is
			return obj
		})

		setTodos(newState)
	}

	const deleteTodo = (id) => {
		const filtering = todos.filter((todo) => todo.id !== id)
		console.log('filtered result', filtering)
		setTodos(filtering)
	}

	const AddHandler = (e) => {
		e.preventDefault()
		if(todo.text === '') return
		if(todos.length === 6) alert('Please complete at least one todo in the list')
		setTodos(todos.concat(todo))
		setTodo(initialState)	
	}

	return (
		<ListTodoWrapper>
			<ListTodoContainer>
				<StyledHeading>TODO LIST...</StyledHeading>
				<StyledForm onSubmit={AddHandler}>
					<StyledInput
						aria-label='Add a todo list'
						value={todo.text}
						onChange={onChangeHandler}
						placeholder='Add Item'
						name='add-item'
					/>
					<StyledButton onClick={AddHandler}>ADD ITEM</StyledButton>
				</StyledForm>
				<List
					todos={todos}
					handleComplete={handleComplete}
					deleteTodo={deleteTodo}
				/>
			</ListTodoContainer>
		</ListTodoWrapper>
	)
}
