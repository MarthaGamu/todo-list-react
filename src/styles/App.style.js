import styled from 'styled-components'

export const ListTodoWrapper = styled.div`
	display: flex;
	justify-content: center;
`

export const Label = styled.label`
	display: none;
`

export const Heading = styled.h1`
	color: black;
	text-align: center;
`
export const ListTodoContainer = styled.div`
	margin-top: 50px;
	width: 80vw;
	background: white;
	text-align: center;
	border-radius: 6px;
`

export const Form = styled.form`
	padding-top: 20px;
	margin: 0 auto;
`

export const Input = styled.input`
	width: 300px;
	height: 2.5rem;
	text-transform: uppercase;

	&:focus {
		outline: 2px solid red;
		border-radius: 6px;
	}
`

export const Button = styled.button`
	padding: 1rem 1rem;
	border-radius: 6px;
	background: black;
	color: white;
	outline: none;
	border: 1px solid white;
	margin-left: 10px;

	&:focus {
		outline: 3px solid red;
	}
`

