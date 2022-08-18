import React from 'react'
import styled from 'styled-components'

const ListWrapper = styled.ul`
	width: 80vw;
	height: 70vh;
	background: white;
	color: black;
	text-transform: uppercase;
	list-style-type: none;
	margin: 0;
	padding: 0;
	padding-top: 2rem;
`
const StyledButton = styled.button`
	background: black;
	color: white;
	margin-left: 2rem;
	padding: 1rem 2rem;
	border: 1px solid grey;
	border-radius: 6px;

	&:active {
		background: brown;
	}

	&:focus {
		outline: 2px solid red;
	}
`

const StyledListItems = styled.li`
	border-bottom: 1px solid grey;
	padding: 1rem 0;
`

export default function List({ todos, handleComplete, deleteTodo }) {
	return (
		<ListWrapper>
			{todos.map((todo, index) => {
				return (
					<StyledListItems key={index}>
						{todo.text}{' '}
						<StyledButton
							onClick={() => {
								handleComplete(todo.id)
							}}
						>
							{todo.complete === false ? 'incomplete' : 'complete'}
						</StyledButton>
						<StyledButton
							onClick={() => {
								deleteTodo(todo.id)
							}}
						>
							Delete
						</StyledButton>
					</StyledListItems>
				)
			})}
		</ListWrapper>
	)
}
