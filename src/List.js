import React from 'react'
import styled from 'styled-components'

const ListWrapper = styled.div`
	width: 80vw;
	height: 60vh;
	background: white;
	color: black;
	text-transform: uppercase;
`
const StyledButton = styled.button`
	background: black;
	color: white;
	margin-left: 2rem;
	padding: 1rem 2rem;
	border: 1px solid grey;

	&:focus {
		outline: 2px solid red;
	}
`
export default function List({ todos, handleComplete, deleteTodo }) {
	return (
		<ListWrapper>
			{todos.map((todo, index) => {
				return (
					<>
						<p key={index}>
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
						</p>
					</>
				)
			})}
		</ListWrapper>
	)
}
