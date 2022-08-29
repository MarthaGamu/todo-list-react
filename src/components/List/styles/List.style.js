import styled from 'styled-components'

export const ListWrapper = styled.ul`
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

export const ListItems = styled.li`
	padding: 1rem 0;
`

export const Button = styled.button`
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
