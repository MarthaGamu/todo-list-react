import React from 'react'

import * as Styled from './styles/List.style'

export default function List({ todos, handleComplete, deleteTodo }) {
	return (
		<Styled.ListWrapper>
			{todos.map((todo, index) => {
				return (
					<Styled.ListItems key={index}>
						{todo.text}{' '}
						<Styled.Button
							onClick={() => {
								handleComplete(todo.id)
							}}
						>
							{todo.complete === false ? 'incomplete' : 'complete'}
						</Styled.Button>
						<Styled.Button
							onClick={() => {
								deleteTodo(todo.id)
							}}
						>
							Delete
						</Styled.Button>
					</Styled.ListItems>
				)
			})}
		</Styled.ListWrapper>
	)
}
