import styled from 'styled-components'

export const ListTodoWrapper = styled.div`
	display: flex;
	width: 100vw;	
`

export const Label = styled.label`
	font-weight: 400;
	display: block;

	&:after {
		content: '*';
		color: red;
		font-size: 20px;
	}
`

export const Span = styled.span`
	weight: 200;
	font-size: 12px;
`

export const LabelWrapper = styled.div`
    width: 100%;
	display: flex;
	justify-content: space-between;
`

export const Heading = styled.h1`
 	color: black;
	text-align: center;
	
`
export const ListTodoContainer = styled.div`
	margin-top: 50px;
	width: 500px;
	background: white;
	border-radius: 6px;
	margin:0 auto;
`

export const Form = styled.form`
	padding-top: 20px;
`

export const Input = styled.input`
	width: 500px;
	height: 2.5rem;
	text-transform: uppercase;

	&:focus {
		outline: 2px solid red;
		border-radius: 6px;
	}
`

export const Button = styled.button`
    width: 100%;
	margin-top: 10px;
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

