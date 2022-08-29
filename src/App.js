import React, { useState } from 'react'
import List from './components/List/List'
import * as  Styled from './styles/App.style'
import uuid from 'react-uuid'

export default function App() {

const initialState = {
	text: '',
	complete: '',
}
  
	const [todo, setTodo] = useState(initialState)
	const [todos, setTodos] = useState([])

	const onChangeHandler = (e) => {
		setTodo({ text: e.target.value, id: uuid(), complete: false })
	}

	const handleComplete = (id) => {
		const newState = todos.map((obj) => {
			if (obj.id === id) {
				return { ...obj, complete: true }
			}
			return obj
		})

		setTodos(newState)
	}

	const deleteTodo = (id) => {
		const filtering = todos.filter((todo) => todo.id !== id)
		setTodos(filtering)
	}

	const AddHandler = (e) => {
		e.preventDefault()
		if(todo.text === '') return alert('Please enter text in the input field first')
		setTodos(todos.concat(todo))
		setTodo(initialState)	
	}

	return (
		<Styled.ListTodoWrapper>
			<Styled.ListTodoContainer>
				<Styled.Heading>TODO LIST...</Styled.Heading>
				<Styled.Form onSubmit={AddHandler}>
					<Styled.Label htmlFor="addItem">Add a todo list App </Styled.Label>
						<Styled.Input
							id="addItem"
							value={todo.text}
							onChange={onChangeHandler}
							placeholder='Add Item'
							name='add-item'
						/>
					<Styled.Button onClick={AddHandler}>ADD ITEM</Styled.Button>
				</Styled.Form>
				<List
					todos={todos}
					handleComplete={handleComplete}
					deleteTodo={deleteTodo}
				/>
			</Styled.ListTodoContainer>
		</Styled.ListTodoWrapper>
	)
}
